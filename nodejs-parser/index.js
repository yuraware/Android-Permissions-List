console.log("starting...");

var Crawler = require("crawler");
var url = require('url');

var checkUrl = "/android/platform_frameworks_base/tree/master/";
var checkUrl2 = "/android/platform_frameworks_base/blob/"
var c = new Crawler({
	maxConnections: 10,
	callback: function (error, result, $) {
	
		if (null != $) {
			$('a').each(function(index, a) {
				var queuedUrl = $(a).attr('href');

				if (queuedUrl != undefined 
					&& (queuedUrl.indexOf(checkUrl) > -1  || queuedUrl.indexOf(checkUrl2) > -1)) {

						var u = "https://github.com" + queuedUrl;
						c.queue(u);	

						if (u.indexOf(".java") > -1) {
							console.log("Url = ", u);
							console.log("result = " + result.body);

							//paring of result
						}
				}			
			});
		}
	}

});

c.queue('https://github.com/android/platform_frameworks_base');
