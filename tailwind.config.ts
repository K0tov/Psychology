import type { Config } from 'tailwindcss';

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'ice-blue': '#E8F4F8',
                'mint-green': '#E8F5F1',
                'soft-grey': '#F5F5F7',
                'clinical-dark': '#2D2D2D',
                'clinical-medium': '#6B6B6B',
                'clinical-light': '#E0E0E5',
                'accent-blue': '#B8DCE8',
                'accent-mint': '#B8E8DC',
            },
            fontFamily: {
                sans: ['Jura', 'system-ui', 'sans-serif'],
                heading: ['Montserrat', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-up': 'slideUp 0.4s ease-out',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
