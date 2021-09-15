// Example `tailwind.config.js` file
const colors = require('tailwindcss/colors')

module.exports = {
  // purge: {
  //   mode: "all",
  //   content: ["./**/*.html"],
  //   options: {
  //     whitelist: [],
  //   },
  // },
  theme: {
    borderColor: theme => ({
      ...theme('colors'),
      'transparent': 'transparent',
    }),
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      dark: 'var(--color-dark)',
      borderColor: 'var(--color-border)',
      navColor: 'var(--color-nav)',
      tileColor: 'var(--color-border)',
      tileHover: 'var(--color-tile-hover)',
      link: 'var(--color-link)',
      transparent: 'transparent',
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '4rem',
        lg: '8rem',
        xl: '6rem',
        '2xl': '2rem',
      },
    },
    fontFamily: {
      sans: ['Metropolis', 'sans-serif'],
    },
    letterSpacing: {
      tighter: '-.06em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.06em',
      widest: '.1em',
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.secondary'),
            a: {
              color: theme('colors.primary'),
              '&:hover': {
                color: theme('colors.link'),
              },
            },
            li: {
              '&::before': {
                color: theme('colors.secondary'),
              },
            },
            h1: {
              color: theme('colors.primary'),
            },
            h2: {
              color: theme('colors.primary'),
            },
            h3: {
              color: theme('colors.link'),
            },
            h4: {
              color: theme('colors.secondary'),
            },
            strong: {
              color: theme('colors.secondary'),
            },
            blockquote: {
              color: theme('colors.secondary'),
            },
            code: {
              color: theme('colors.secondary'),
            },
            thead: {
              color: theme('colors.secondary'),
            }
          },
        },
      }),
    }
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
    }
  },
  plugins: [require("@tailwindcss/typography")],
}
