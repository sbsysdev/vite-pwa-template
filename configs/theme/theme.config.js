/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

// Theme
const supportedAppThemeList = ['light', 'dark'];

export default plugin(function ({ addVariant, matchVariant }) {
    // Load app theme as class
    supportedAppThemeList.forEach(appTheme =>
        addVariant(`theme-${appTheme}`, `:is(.theme-${appTheme} &)`)
    );
    matchVariant(`theme`, value => `:is(.theme-${value} &)`);

    // Load app theme as [data-theme='...']
    supportedAppThemeList.forEach(appTheme =>
        addVariant(`data-theme-${appTheme}`, `:is([data-theme='${appTheme}'] &)`)
    );
    matchVariant('data-theme', value => `:is([data-theme='${value}'] &)`);
});
