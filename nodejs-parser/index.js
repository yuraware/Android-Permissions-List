console.log("starting...");

var Crawler = require("crawler");
var url = require('url');
var http = require('https');

var checkUrl = "/android/platform_frameworks_base/tree/master/";
var checkUrl2 = "/android/platform_frameworks_base/blob/";
var baseRawUrl = "https://raw.githubusercontent.com";

var c = new Crawler({
	maxConnections: 2,
	callback: function (error, result, $) {
	
		if (null != $) {
			$('a').each(function(index, a) {
				var queuedUrl = $(a).attr('href');

				if (queuedUrl != undefined 
					&& (queuedUrl.indexOf(checkUrl) > -1  || queuedUrl.indexOf(checkUrl2) > -1)) {

						var u = "https://github.com" + queuedUrl;

						c.queue(u);	

						if (u.indexOf(".java") > -1) {
							
							var p = baseRawUrl + queuedUrl;
							p = p.replace('/blob/', "/");

							console.log("Url = " + p);

							var fetchUrl = require("fetch").fetchUrl;

							// fetchUrl(p, function(error, meta, body){
							//     console.log(body.toString());
							// });
							
							var request = http.request(p, function(result) {
								var data = '';
								result.on('data', function(chunk) {
									data += chunk;
								});

								result.on('end', function() {
									console.log("result:\n" + data);
								});
							});
							request.end();
						}
				}			
			});
		}
	}

});

c.queue('https://github.com/android/platform_frameworks_base');
