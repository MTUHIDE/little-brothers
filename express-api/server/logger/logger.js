const { createLogger, format, transports } = require('winston')
const CONFIG = require('../config/config')

const logLevel = CONFIG.log_level || 'info'
const logger = createLogger({
    level: logLevel,
    exitOnError: false,
    format: format.json(),
    transports: [new transports.File({ filename: `logs/server.log` }), new transports.Console()],
})

module.exports = logger