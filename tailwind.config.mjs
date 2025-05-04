export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  darkMode: 'class',


  theme: {
    colors: {
      // Light theme colors
      light: {
        background: '#ffffff',
        foreground: '#171717',
        primary: '#008080',
        primaryContrast: '#b9e7e7',
      },
      // Dark theme colors with multiple shades
      dark: {
        background: '#0a0a0a',     // darkest (almost pure black)
        surface: '#171717',        // slightly lighter
        card: '#262626',           // for cards/containers
        foreground: '#e5e5e5',     // light text
        muted: '#a3a3a3',          // secondary text
        primary: '#00b3b3',
        primaryContrast: '#004d4d',
      },
      transparent: 'transparent',
      current: 'currentColor',
    },
    fontFamily: {
      sans: ['"Helvetica Neue"', 'sans-serif'],
      mono: ['"Courier New"', 'monospace'],
    },
    animation: {
      'gradient-x': 'gradient-x 3s ease infinite',
    },
    keyframes: {
      'gradient-x': {
        '0%, 100%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
      },
    },
  },


  // theme: {
  //   extend: {
  //     colors: {
  //       // Light theme
  //       background: '#ffffff',
  //       foreground: '#171717',
  //       primary: '#008080',
  //       primaryContrast: '#b9e7e7',
        
  //       // Dark theme - using same names with dark: prefix
  //       dark: {
  //         background: '#171717',
  //         foreground: '#e5e5e5',
  //         primary: '#00b3b3',
  //         primaryContrast: '#004d4d',
  //       }
  //     },
    //   fontFamily: {
    //     sans: ['"Helvetica Neue"', 'sans-serif'],
    //     mono: ['"Courier New"', 'monospace'],
    //   },
    //   animation: {
    //     'gradient-x': 'gradient-x 3s ease infinite',
    //   },
    //   keyframes: {
    //     'gradient-x': {
    //       '0%, 100%': { backgroundPosition: '0% 50%' },
    //       '50%': { backgroundPosition: '100% 50%' },
    //     },
    //   },
    // },
  // },


  plugins: [],
}

// export default {
//     content: [
//       "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust based on your project
//     ],
//     theme: {
//       colors: {
//         background: '#ffffff',
//         foreground: '#171717',
//         primary: '#008080',
//         primaryContrast: '#b9e7e7',
//         transparent: 'transparent',
//         current: 'currentColor',
//       },
//       fontFamily: {
//         sans: ['"Helvetica Neue"', 'sans-serif'],
//         mono: ['"Courier New"', 'monospace'],
//       },
//       extend: {
//         animation: {
//           'gradient-x': 'gradient-x 3s ease infinite',
//         },
//       },
//       keyframes: {
//         'gradient-x': {
//           '0%, 100%': { backgroundPosition: '0% 50%' },
//           '50%': { backgroundPosition: '100% 50%' },
//         },
//       },
//     },
//     plugins: [],
//   }