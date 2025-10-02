// tailwind.config.js

export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
            background: 'var(--background)',
      foreground: 'var(--foreground)',
      primary: 'var(--primary)',
      'primary-foreground': 'var(--primary-foreground)',
      secondary: 'var(--secondary)',
      'secondary-foreground': 'var(--secondary-foreground)',
      muted: 'var(--muted)',
      'muted-foreground': 'var(--muted-foreground)',
      border: 'var(--border)',
      input: 'var(--input)',
      ring: 'var(--ring)',




      light: {
        background: '#ffffff',
        secondaryBackground: '#f5f5f5',
          primary: '#134e4a',              // teal-900
  primaryForeground: '#ffffff',    // ✅ light text on dark teal
        card: '#f0f4f4',
        surface: '#e6f2f2',
        foreground: '#0f172a', // slate-900
        muted: '#64748b',      // slate-500
        primary: '#134e4a',    // teal-900
        primaryContrast: '#d1f5f0', // soft aqua for contrast (teal-50-ish)
        border: '#cbd5e1',     // slate-300
        input: '#e2e8f0',      // slate-200
        ring: '#0f766e',       // teal-700
      },

      dark: {
        background: '#0f172a',      // slate-900
        surface: '#1e293b',         // slate-800
          primary: '#2dd4bf',              // bright teal
  primaryForeground: '#0f172a',    // ✅ dark text on bright teal
        card: '#334155',            // slate-700
        foreground: '#f1f5f9',      // slate-100
        muted: '#94a3b8',           // slate-400
        primary: '#2dd4bf',         // teal-400 (bright for contrast in dark mode)
        primaryContrast: '#0f172a', // deep slate
        border: '#475569',          // slate-600
        input: '#1e293b',           // slate-800
        ring: '#5eead4',            // teal-300
      },
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
};



// export default {
//   content: [
//     "./src/**/*.{html,js,jsx,ts,tsx}",
//   ],
//   darkMode: 'class',


//   theme: {
//     colors: {
//       // Light theme colors
//       light: {
//         cream: '#fdf6e3',
//         background: '#ffffff',
//         secondaryBackground: '#f0f0f0',
//         foreground: '#171717',
//         primary: '#008080',
//         primaryContrast: '#b9e7e7',
//       },
//       // Dark theme colors with multiple shades
//       dark: {
//         background: '#0a0a0a',     // darkest (almost pure black)
//         surface: '#171717',        // slightly lighter
//         card: '#262626',           // for cards/containers
//         foreground: '#e5e5e5',     // light text
//         muted: '#a3a3a3',          // secondary text
//         primary: '#00b3b3',
//         primaryContrast: '#004d4d',
//       },
//       transparent: 'transparent',
//       current: 'currentColor',
//     },
//     fontFamily: {
//       sans: ['"Helvetica Neue"', 'sans-serif'],
//       mono: ['"Courier New"', 'monospace'],
//     },
//     animation: {
//       'gradient-x': 'gradient-x 3s ease infinite',
//     },
//     keyframes: {
//       'gradient-x': {
//         '0%, 100%': { backgroundPosition: '0% 50%' },
//         '50%': { backgroundPosition: '100% 50%' },
//       },
//     },
//   },
// };


// //   // theme: {
// //   //   extend: {
// //   //     colors: {
// //   //       // Light theme
// //   //       background: '#ffffff',
// //   //       foreground: '#171717',
// //   //       primary: '#008080',
// //   //       primaryContrast: '#b9e7e7',
        
// //   //       // Dark theme - using same names with dark: prefix
// //   //       dark: {
// //   //         background: '#171717',
// //   //         foreground: '#e5e5e5',
// //   //         primary: '#00b3b3',
// //   //         primaryContrast: '#004d4d',
// //   //       }
// //   //     },
// //     //   fontFamily: {
// //     //     sans: ['"Helvetica Neue"', 'sans-serif'],
// //     //     mono: ['"Courier New"', 'monospace'],
// //     //   },
// //     //   animation: {
// //     //     'gradient-x': 'gradient-x 3s ease infinite',
// //     //   },
// //     //   keyframes: {
// //     //     'gradient-x': {
// //     //       '0%, 100%': { backgroundPosition: '0% 50%' },
// //     //       '50%': { backgroundPosition: '100% 50%' },
// //     //     },
// //     //   },
// //     // },
// //   // },


// //   plugins: [],
// // }

// // // export default {
// // //     content: [
// // //       "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust based on your project
// // //     ],
// // //     theme: {
// // //       colors: {
// // //         background: '#ffffff',
// // //         foreground: '#171717',
// // //         primary: '#008080',
// // //         primaryContrast: '#b9e7e7',
// // //         transparent: 'transparent',
// // //         current: 'currentColor',
// // //       },
// // //       fontFamily: {
// // //         sans: ['"Helvetica Neue"', 'sans-serif'],
// // //         mono: ['"Courier New"', 'monospace'],
// // //       },
// // //       extend: {
// // //         animation: {
// // //           'gradient-x': 'gradient-x 3s ease infinite',
// // //         },
// // //       },
// // //       keyframes: {
// // //         'gradient-x': {
// // //           '0%, 100%': { backgroundPosition: '0% 50%' },
// // //           '50%': { backgroundPosition: '100% 50%' },
// // //         },
// // //       },
// // //     },
// // //     plugins: [],
// // //   }