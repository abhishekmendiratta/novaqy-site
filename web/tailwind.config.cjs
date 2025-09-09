module.exports = {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
        secondary: '#0f766e',
        success: '#15803d',
        warning: '#b45309',
        error: '#b91c1c',
        background: '#ffffff',
        surface: '#f9fafb',
        text: '#111827',
      },
      fontFamily: {
        primary: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        base: ['1.125rem', { lineHeight: '1.6' }], // 18px
        lg: ['1.5rem', { lineHeight: '1.6' }],     // 24px
        xl: ['1.875rem', { lineHeight: '1.6' }],   // 30px
      },
      spacing: {
        'xs': '8px',
        'sm': '16px',
        'md': '24px',
        'lg': '32px',
        'xl': '44px',
        'touch': '44px',
      },
      minHeight: {
        touch: '44px',
      },
      minWidth: {
        touch: '44px',
      },
      outline: {
        'focused': ['3px solid #1e40af', '3px'],
      },
    },
  },
  plugins: [],
}
