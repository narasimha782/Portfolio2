/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: 'rgb(var(--color-bg) / <alpha-value>)',
          paper: 'rgb(var(--color-bg-paper) / <alpha-value>)',
        },
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        ink: {
          DEFAULT: 'rgb(var(--color-ink) / <alpha-value>)',
          secondary: 'rgb(var(--color-ink-secondary) / <alpha-value>)',
          muted: 'rgb(var(--color-ink-muted) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
          soft: 'rgb(var(--color-accent-soft) / <alpha-value>)',
          dim: 'rgb(var(--color-accent-dim) / <alpha-value>)',
        },
        border: 'rgb(var(--color-border) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        card: '0 4px 26px -6px rgba(3, 8, 18, 0.55), 0 1px 2px rgba(3, 8, 18, 0.4)',
        'card-hover': '0 8px 36px -6px rgba(3, 8, 18, 0.65), 0 2px 4px rgba(3, 8, 18, 0.5)',
        glow: '0 0 0 1px rgba(13, 148, 136, 0.25), 0 10px 32px -8px rgba(13, 148, 136, 0.45)',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(90deg, rgb(var(--color-accent)), rgb(var(--color-accent-soft)))',
      },
      screens: {
        xs: '420px',
      },
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  plugins: [],
};