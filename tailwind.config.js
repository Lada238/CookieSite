// Конфиг Tailwind: палитра «бордо · сирень · розовый · персик · дымчато-голубой», тёмная тема, анимация, плагин с кастомной утилитой
tailwind.config = {
  darkMode: 'class',
  theme: { extend: {
    colors: {
      brand: { 50: '#fbf1f5', 100: '#f4e0e9', 200: '#ead0df', 300: '#d8b4cc', 400: '#bf8fae', 500: '#a4708f', 600: '#86405c', 700: '#7a3048', 800: '#5e2437', 900: '#43192a' },
      peach: { 100: '#f8ede8', 200: '#e9cfc5', 300: '#dcb8aa', 700: '#8a5a48' },
      mist:  { 100: '#eaf0f2', 200: '#b8c7cd', 300: '#9db1b9', 700: '#4d6670' },
      slate: { 50: '#fbf6f7', 100: '#f5ecee', 200: '#eadce0', 300: '#dac8ce', 400: '#b79ba6', 500: '#8f7580', 600: '#6f5a65', 700: '#4f3a45', 800: '#3a2832', 900: '#2a1b23', 950: '#1d1217' },
      success: '#5f8a8f', warning: '#c78d62', danger: '#a23a52', info: '#6f93a3' },
    keyframes: { fadeUp: { '0%': { opacity: 0, transform: 'translateY(16px)' }, '100%': { opacity: 1, transform: 'none' } } },
    animation: { 'fade-up': 'fadeUp .8s ease-out both' }
  } },
  plugins: [ function ({ addUtilities }) {
    addUtilities({ '.scrollbar-thin': { 'scrollbar-width': 'thin' } });   // своя утилита scrollbar-thin
  } ]
};
