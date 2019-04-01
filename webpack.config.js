const serverConfig = require('./webpack.config.server')
const webConfig = require('./webpack.config.web')

module.exports = [webConfig, serverConfig]
