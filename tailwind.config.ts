import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  theme: {
    screens: {
      xs: '514px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        hslv: {
          '50': '#eafffd',
          '100': '#cafffc',
          '200': '#9cfffd',
          '300': '#57fffe',
          '400': '#0cf5ff',
          '500': '#00d7ea',
          '600': '#00aac4',
          '700': '#00849a',
          '800': '#0b6b7f',
          '900': '#0e596b',
          '950': '#023b4a',
        },
        dim: {
          50: '#5F99F7',
          100: '#5F99F7',
          200: '#38444d',
          300: '#202e3a',
          400: '#253341',
          500: '#5F99F7',
          600: '#5F99F7',
          700: '#192734',
          800: '#162d40',
          900: '#15202b',
        },
      },
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9',
      },
    },
  },
};

/**
 * 
Breakpoint prefix	Minimum width	CSS
sm	640px	@media (min-width: 640px) { ... }
md	768px	@media (min-width: 768px) { ... }
lg	1024px	@media (min-width: 1024px) { ... }
xl	1280px	@media (min-width: 1280px) { ... }
2xl	1536px	@media (min-width: 1536px) { ... }
 */
