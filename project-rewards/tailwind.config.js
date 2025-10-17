tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Poppins', 'sans-serif'],
                        serif: ['Playfair Display', 'serif'],
                    },
                    colors: {
                        'brand-purple': '#4F46E5',
                        'brand-pink': '#EC4899',
                        'brand-lime': '#A3E635',
                        'brand-teal': '#14B8A6',
                        'brand-dark': '#111827',
                        'brand-light': '#F3F4F6',
                    },
                    animation: {
                        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                        'glow': 'glow 3s ease-in-out infinite',
                        'marquee': 'marquee 30s linear infinite',
                    },
                    keyframes: {
                        fadeInUp: {
                            '0%': { opacity: '0', transform: 'translateY(30px) scale(0.98)' },
                            '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
                        },
                        glow: {
                            '0%, 100%': { boxShadow: '0 0 10px #EC4899, 0 0 20px #EC4899, 0 0 30px #4F46E5' },
                            '50%': { boxShadow: '0 0 20px #4F46E5, 0 0 30px #4F46E5, 0 0 40px #A3E635' },
                        },
                        marquee: {
                            '0%': { transform: 'translateX(0%)' },
                            '100%': { transform: 'translateX(-100%)' },
                        }
                    }
                }
            }
        }