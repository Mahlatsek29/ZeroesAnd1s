module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Electric Cyan
        primary: {
          DEFAULT: "#00FFFF", // cyan-400 - Electric cyan for primary actions and focus
          50: "#ECFEFF", // cyan-50
          100: "#CFFAFE", // cyan-100
          200: "#A5F3FC", // cyan-200
          300: "#67E8F9", // cyan-300
          400: "#00FFFF", // cyan-400 - Primary electric cyan
          500: "#06B6D4", // cyan-500
          600: "#0891B2", // cyan-600
          700: "#0E7490", // cyan-700
          800: "#155E75", // cyan-800
          900: "#164E63", // cyan-900
        },
        
        // Secondary Colors - Hot Pink
        secondary: {
          DEFAULT: "#FF1493", // pink-500 - Hot pink for secondary emphasis and energy
          50: "#FDF2F8", // pink-50
          100: "#FCE7F3", // pink-100
          200: "#FBCFE8", // pink-200
          300: "#F9A8D4", // pink-300
          400: "#F472B6", // pink-400
          500: "#FF1493", // pink-500 - Hot pink secondary
          600: "#DB2777", // pink-600
          700: "#BE185D", // pink-700
          800: "#9D174D", // pink-800
          900: "#831843", // pink-900
        },

        // Accent Colors - Matrix Green
        accent: {
          DEFAULT: "#00FF41", // green-400 - Matrix green for success states and highlights
          50: "#F0FDF4", // green-50
          100: "#DCFCE7", // green-100
          200: "#BBF7D0", // green-200
          300: "#86EFAC", // green-300
          400: "#00FF41", // green-400 - Matrix green accent
          500: "#22C55E", // green-500
          600: "#16A34A", // green-600
          700: "#15803D", // green-700
          800: "#166534", // green-800
          900: "#14532D", // green-900
        },

        // Background Colors
        background: "#000000", // black - Pure black for maximum neon contrast
        surface: {
          DEFAULT: "#111111", // gray-900 - Subtle lift for content containers and cards
          light: "#1F1F1F", // gray-800
          lighter: "#2A2A2A", // gray-700
        },

        // Text Colors
        text: {
          primary: "#FFFFFF", // white - Clean white for primary readability
          secondary: "#CCCCCC", // gray-300 - Muted white for hierarchy and metadata
          muted: "#999999", // gray-400
          disabled: "#666666", // gray-500
        },

        // Status Colors
        success: "#00FF41", // green-400 - Bright green for positive confirmations
        warning: "#FFFF00", // yellow-400 - Electric yellow for attention without alarm
        error: "#FF0040", // red-500 - Bright red for clear problem indication
      },

      fontFamily: {
        // Headlines - Orbitron
        orbitron: ['Orbitron', 'sans-serif'],
        // Body - Source Code Pro
        'source-code': ['Source Code Pro', 'monospace'],
        mono: ['Source Code Pro', 'monospace'],
        // CTAs - Rajdhani
        rajdhani: ['Rajdhani', 'sans-serif'],
        // Accents - Major Mono Display
        'major-mono': ['Major Mono Display', 'monospace'],
      },

      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        black: '900',
      },

      boxShadow: {
        'neon-primary': '0 0 20px rgba(0, 255, 255, 0.5)',
        'neon-secondary': '0 0 20px rgba(255, 20, 147, 0.5)',
        'neon-accent': '0 0 20px rgba(0, 255, 65, 0.5)',
        'neon-error': '0 0 20px rgba(255, 0, 64, 0.5)',
        'neon-sm': '0 0 10px rgba(0, 255, 255, 0.3)',
        'neon-lg': '0 0 30px rgba(0, 255, 255, 0.6)',
      },

      animation: {
        'pulse-neon': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'typing': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
      },

      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 255, 255, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 255, 255, 0.8)' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'blink-caret': {
          '0%, 50%': { borderColor: 'transparent' },
          '51%, 100%': { borderColor: '#00FFFF' },
        },
      },

      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },

      transitionDuration: {
        '300': '300ms',
      },

      borderWidth: {
        '1': '1px',
        '2': '2px',
      },

      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}