import { g as getDefaultExportFromCjs } from "./react-vendor.js";
import { r as requireSha512, a as requireCore } from "./auth-vendor.js";
var sha512Exports = requireSha512();
const SHA512 = /* @__PURE__ */ getDefaultExportFromCjs(sha512Exports);
var encHex$2 = { exports: {} };
var encHex$1 = encHex$2.exports;
var hasRequiredEncHex;
function requireEncHex() {
  if (hasRequiredEncHex) return encHex$2.exports;
  hasRequiredEncHex = 1;
  (function(module, exports) {
    (function(root, factory) {
      {
        module.exports = factory(requireCore());
      }
    })(encHex$1, function(CryptoJS) {
      return CryptoJS.enc.Hex;
    });
  })(encHex$2);
  return encHex$2.exports;
}
var encHexExports = requireEncHex();
const encHex = /* @__PURE__ */ getDefaultExportFromCjs(encHexExports);
export {
  SHA512 as S,
  encHex as e
};
