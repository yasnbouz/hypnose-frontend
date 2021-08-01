module.exports = {
    reactStrictMode: true,
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
    i18n: {
        locales: ['fr', 'en'],
        defaultLocale: 'fr',
    },
    images: {
        deviceSizes: [640, 750, 828, 1080, 1200],
    },
};
