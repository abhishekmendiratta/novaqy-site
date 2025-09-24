var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { c as createClient } from "./auth-vendor.js";
const supabaseUrl = void 0;
const supabaseKey = void 0;
const supabase = createClient(supabaseUrl, supabaseKey);
class SubscriptionService {
  constructor(supabaseClient = supabase) {
    __publicField(this, "supabase");
    this.supabase = supabaseClient;
  }
  /**
   * Create a new subscription
   */
  createSubscription(subscriptionData) {
    return __async(this, null, function* () {
      try {
        const { data, error } = yield this.supabase.from("subscriptions").insert([subscriptionData]).select().single();
        if (error) {
          console.error("Error creating subscription:", error);
          throw error;
        }
        return data;
      } catch (error) {
        console.error("Subscription creation failed:", error);
        return null;
      }
    });
  }
  /**
   * Get user's subscriptions
   */
  getUserSubscriptions(userId) {
    return __async(this, null, function* () {
      try {
        const { data, error } = yield this.supabase.from("subscriptions").select(`
          *,
          payments (
            amount,
            currency,
            transaction_id
          )
        `).eq("user_id", userId).order("created_at", { ascending: false });
        if (error) {
          console.error("Error fetching subscriptions:", error);
          return [];
        }
        return data || [];
      } catch (error) {
        console.error("Failed to fetch subscriptions:", error);
        return [];
      }
    });
  }
  /**
   * Get active subscription for user
   */
  getActiveSubscription(userId) {
    return __async(this, null, function* () {
      try {
        const { data, error } = yield this.supabase.from("subscriptions").select("*").eq("user_id", userId).eq("status", "active").order("created_at", { ascending: false }).limit(1).single();
        if (error) {
          if (error.code === "PGRST116") {
            return null;
          }
          console.error("Error fetching active subscription:", error);
          return null;
        }
        return data;
      } catch (error) {
        console.error("Failed to fetch active subscription:", error);
        return null;
      }
    });
  }
  /**
   * Cancel subscription
   */
  cancelSubscription(subscriptionId, reason) {
    return __async(this, null, function* () {
      try {
        const { error } = yield this.supabase.from("subscriptions").update({
          status: "cancelled",
          cancellation_date: (/* @__PURE__ */ new Date()).toISOString(),
          cancellation_reason: reason,
          auto_renew: false,
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        }).eq("id", subscriptionId);
        if (error) {
          console.error("Error cancelling subscription:", error);
          return false;
        }
        return true;
      } catch (error) {
        console.error("Subscription cancellation failed:", error);
        return false;
      }
    });
  }
  /**
   * Renew subscription
   */
  renewSubscription(subscriptionId) {
    return __async(this, null, function* () {
      try {
        const { data: subscription, error: fetchError } = yield this.supabase.from("subscriptions").select("*").eq("id", subscriptionId).single();
        if (fetchError || !subscription) {
          console.error("Error fetching subscription for renewal:", fetchError);
          return null;
        }
        const currentEndDate = new Date(subscription.end_date);
        const newEndDate = new Date(currentEndDate);
        newEndDate.setFullYear(newEndDate.getFullYear() + 1);
        const { data, error } = yield this.supabase.from("subscriptions").update({
          end_date: newEndDate.toISOString(),
          renewal_count: subscription.renewal_count + 1,
          last_renewal_date: (/* @__PURE__ */ new Date()).toISOString(),
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        }).eq("id", subscriptionId).select().single();
        if (error) {
          console.error("Error renewing subscription:", error);
          return null;
        }
        return data;
      } catch (error) {
        console.error("Subscription renewal failed:", error);
        return null;
      }
    });
  }
  /**
   * Check if subscription is expired and update status
   */
  checkAndUpdateExpiredSubscriptions() {
    return __async(this, null, function* () {
      try {
        const now = (/* @__PURE__ */ new Date()).toISOString();
        const { data, error } = yield this.supabase.from("subscriptions").update({ status: "expired" }).eq("status", "active").lt("end_date", now).select("id");
        if (error) {
          console.error("Error updating expired subscriptions:", error);
          return 0;
        }
        return (data == null ? void 0 : data.length) || 0;
      } catch (error) {
        console.error("Failed to check expired subscriptions:", error);
        return 0;
      }
    });
  }
  /**
   * Get subscriptions expiring soon
   */
  getExpiringSubscriptions(days = 30) {
    return __async(this, null, function* () {
      try {
        const futureDate = /* @__PURE__ */ new Date();
        futureDate.setDate(futureDate.getDate() + days);
        const futureDateStr = futureDate.toISOString();
        const { data, error } = yield this.supabase.from("subscriptions").select("*").eq("status", "active").eq("auto_renew", true).lte("end_date", futureDateStr).order("end_date", { ascending: true });
        if (error) {
          console.error("Error fetching expiring subscriptions:", error);
          return [];
        }
        return data || [];
      } catch (error) {
        console.error("Failed to fetch expiring subscriptions:", error);
        return [];
      }
    });
  }
}
class PaymentService {
  constructor(supabaseClient = supabase) {
    __publicField(this, "supabase");
    this.supabase = supabaseClient;
  }
  /**
   * Create a new payment record
   */
  createPayment(paymentData) {
    return __async(this, null, function* () {
      try {
        const { data, error } = yield this.supabase.from("payments").insert([paymentData]).select().single();
        if (error) {
          console.error("Error creating payment:", error);
          throw error;
        }
        return data;
      } catch (error) {
        console.error("Payment creation failed:", error);
        return null;
      }
    });
  }
  /**
   * Update payment status
   */
  updatePaymentStatus(transactionId, status, payuResponse) {
    return __async(this, null, function* () {
      try {
        const updateData = {
          status,
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        };
        if (payuResponse) {
          updateData.payu_response = payuResponse;
          updateData.gateway_transaction_id = payuResponse.bank_ref_num || payuResponse.bankcode;
        }
        const { error } = yield this.supabase.from("payments").update(updateData).eq("transaction_id", transactionId);
        if (error) {
          console.error("Error updating payment status:", error);
          return false;
        }
        return true;
      } catch (error) {
        console.error("Payment status update failed:", error);
        return false;
      }
    });
  }
  /**
   * Get payment by transaction ID
   */
  getPaymentByTransactionId(transactionId) {
    return __async(this, null, function* () {
      try {
        const { data, error } = yield this.supabase.from("payments").select("*").eq("transaction_id", transactionId).single();
        if (error) {
          if (error.code === "PGRST116") {
            return null;
          }
          console.error("Error fetching payment:", error);
          return null;
        }
        return data;
      } catch (error) {
        console.error("Failed to fetch payment:", error);
        return null;
      }
    });
  }
  /**
   * Get user's payments
   */
  getUserPayments(userId) {
    return __async(this, null, function* () {
      try {
        const { data, error } = yield this.supabase.from("payments").select("*").eq("user_id", userId).order("created_at", { ascending: false });
        if (error) {
          console.error("Error fetching user payments:", error);
          return [];
        }
        return data || [];
      } catch (error) {
        console.error("Failed to fetch user payments:", error);
        return [];
      }
    });
  }
  /**
   * Process refund (mark payment as refunded)
   */
  processRefund(transactionId, refundAmount) {
    return __async(this, null, function* () {
      try {
        const payment = yield this.getPaymentByTransactionId(transactionId);
        if (!payment) {
          console.error("Payment not found for refund");
          return false;
        }
        const refundAmountToUse = refundAmount || payment.amount;
        const { error } = yield this.supabase.from("payments").update({
          status: "refunded",
          payu_response: __spreadProps(__spreadValues({}, payment.payu_response), {
            refund_amount: refundAmountToUse,
            refund_date: (/* @__PURE__ */ new Date()).toISOString()
          }),
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        }).eq("transaction_id", transactionId);
        if (error) {
          console.error("Error processing refund:", error);
          return false;
        }
        return true;
      } catch (error) {
        console.error("Refund processing failed:", error);
        return false;
      }
    });
  }
}
const subscriptionService = new SubscriptionService();
const paymentService = new PaymentService();
class UserService {
  constructor(supabaseClient = supabase) {
    __publicField(this, "supabase");
    this.supabase = supabaseClient;
  }
  /**
   * Create or update user profile
   */
  createOrUpdateUser(userData) {
    return __async(this, null, function* () {
      try {
        const { data: existingUser } = yield this.supabase.from("users").select("*").eq("email", userData.email).single();
        if (existingUser) {
          const { data, error } = yield this.supabase.from("users").update(__spreadProps(__spreadValues({}, userData), {
            updated_at: (/* @__PURE__ */ new Date()).toISOString()
          })).eq("id", existingUser.id).select().single();
          if (error) throw error;
          return data;
        } else {
          const { data, error } = yield this.supabase.from("users").insert([userData]).select().single();
          if (error) throw error;
          return data;
        }
      } catch (error) {
        console.error("User creation/update failed:", error);
        return null;
      }
    });
  }
  /**
   * Get user by email
   */
  getUserByEmail(email) {
    return __async(this, null, function* () {
      try {
        const { data, error } = yield this.supabase.from("users").select("*").eq("email", email).single();
        if (error) {
          if (error.code === "PGRST116") return null;
          throw error;
        }
        return data;
      } catch (error) {
        console.error("Failed to get user by email:", error);
        return null;
      }
    });
  }
}
class PaymentFlowService {
  constructor(supabaseClient = supabase) {
    __publicField(this, "supabase");
    this.supabase = supabaseClient;
  }
  /**
   * Process successful payment from PayU
   */
  processPaymentSuccess(transactionId, payuResponse, userData, planName, planType = "personal") {
    return __async(this, null, function* () {
      try {
        const userService2 = new UserService(this.supabase);
        const user = yield userService2.createOrUpdateUser(userData);
        if (!user) {
          throw new Error("Failed to create/update user");
        }
        const paymentService2 = new PaymentService(this.supabase);
        const payment = yield paymentService2.createPayment({
          user_id: user.id,
          transaction_id: transactionId,
          amount: parseFloat(payuResponse.amount || "0"),
          currency: "USD",
          status: "completed",
          payment_method: "payu",
          plan_name: planName,
          plan_type: planType,
          payu_response: payuResponse,
          payment_gateway: "payu",
          gateway_transaction_id: payuResponse.bank_ref_num || payuResponse.bankcode
        });
        if (!payment) {
          throw new Error("Failed to create payment record");
        }
        const subscriptionService2 = new SubscriptionService(this.supabase);
        const subscription = yield subscriptionService2.createSubscription({
          user_id: user.id,
          payment_id: payment.id,
          plan_name: planName,
          plan_type: planType,
          status: "active",
          start_date: (/* @__PURE__ */ new Date()).toISOString(),
          end_date: new Date(Date.now() + 365 * 24 * 60 * 60 * 1e3).toISOString(),
          // 1 year
          auto_renew: true,
          renewal_count: 0
        });
        if (!subscription) {
          throw new Error("Failed to create subscription");
        }
        const agreementText = `Service Agreement for ${planName} plan. Payment of $${payment.amount} received on ${(/* @__PURE__ */ new Date()).toISOString()}.`;
        const { error: agreementError } = yield this.supabase.from("service_agreements").insert([{
          user_id: user.id,
          subscription_id: subscription.id,
          agreement_text: agreementText,
          agreement_version: "1.0",
          signed_at: (/* @__PURE__ */ new Date()).toISOString(),
          ip_address: userData.ip_address,
          user_agent: userData.user_agent
        }]);
        if (agreementError) {
          console.error("Failed to create service agreement:", agreementError);
        }
        return true;
      } catch (error) {
        console.error("Payment processing failed:", error);
        return false;
      }
    });
  }
}
const paymentFlowService = new PaymentFlowService();
export {
  paymentFlowService as a,
  paymentService as p,
  subscriptionService as s
};
