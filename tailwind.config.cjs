module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        aamas: {
          ivory: '#FAF7F2',
          cream: '#F3EDE3',
          ink: '#1A1A1A',
          charcoal: '#2A2A28',
          terracotta: '#A8632E',
          terracottaDark: '#8A4F24',
          stone: '#6B7280',
          body: '#57544F',
          border: '#E5DED0',
          white: '#FFFFFF'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Fraunces', 'serif']
      }
    }
  },
  plugins: [require('@tailwindcss/forms')],
}