const commonConfig = {
    port: 3000,
    logPath: './logs',
    maxSymbolsInUrl: 5,
};

const prodConfig = {
    port: process.env.PORT || 8888,
};

const devConfig = {};

function getConfigFor(environment) {
    switch (environment) {
        case 'development':
            return { ...commonConfig, ...devConfig };
        default:
            return { ...commonConfig, ...prodConfig };
    }
}

module.exports = getConfigFor;
