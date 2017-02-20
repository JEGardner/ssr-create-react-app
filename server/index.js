const app = require('./app')

// Why don't I need http createServer
app.start({
	onHttpServerCreated: function () {
		require('keystone/server/createApp')(app)
	},
	onSocketServerCreated: function () {
		require('keystone/server/createApp')(app)
	}
})
