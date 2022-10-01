module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        110: '26rem',
        128: '32rem',
        144: '35rem',
      },
    },
    colors: {
      textColor: '#ffffff',
      gray200: '#e5e7eb',
      gray300: '#d1d5db',
      gray400: '#9ca3af',
      gray500: '#6b7280',
      gray700: '#374151',
      gray800: '#1f2937',
      gray900: '#111827',
      green500: '#22c55e',
      green900: '#14532d',
    },
    screens: {
      sm: '350px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1200px',
      // => @media (min-width: 1024px) { ... }
    },
  },
  plugins: [],
};
