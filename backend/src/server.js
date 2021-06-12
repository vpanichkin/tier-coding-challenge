const config = require('./config')(process.env.NODE_ENV);
const logger = require('./shared/logger');
const app = require('./app');

app.listen(config.port, () => {
    logger.info(`Listening to port ${config.port}`);
});

const unexpectedErrorHandler = (error) => {
    logger.error(error);
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
    logger.info('SIGTERM received');
    if (app) {
        app.close();
    }
});
