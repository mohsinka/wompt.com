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
	config: wompt.env,
	root: __dirname
});

app.start_server();