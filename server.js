require.paths.unshift('vendor/mongoose');

var wompt     = require("./lib/includes");

/*
 
	Objects:
		App
		 - has many channels
		 - has many clients

		Channel
		 - has many clients

*/

var app = new wompt.App({
	config: {
		port: 8001,
		public_dir: __dirname + '/public'
	}
});

app.start_server();
