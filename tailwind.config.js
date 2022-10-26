/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {

    extend: {
      display: ["group-hover"],
      colors: {
        'soft-red': 'hsl(10, 79%, 65%)',
        'softer-red': 'hsl(10, 79%, 75%)',
        'cyan': 'hsl(186, 34%, 60%)',
        'light-cyan': 'hsl(186, 34%, 70%)',
        'pale-orange': 'hsl(33, 100%, 98%)',
        'cream': 'hsl(27, 66%, 92%)',
        'medium-brown': 'hsl(28, 10%, 53%)',
        'dark-brown': 'hsl(25, 47%, 15%)'
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
