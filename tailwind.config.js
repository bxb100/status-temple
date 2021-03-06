module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './styles/tailwind.css'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            spacing: {
                '100': '25rem',
                '152': '38rem',
                '1/90': '1%',
                '101/100': '101%',
                'px-4': '4px',
                'px-5': '5px',
              }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
