console.log("starting...");

var fs = require('fs');

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
							
							var request = http.request(p, function(result) {
								var data = '';
								result.on('data', function(chunk) {
									data += chunk;
								});

								result.on('end', function() {
									var parsed = parseFile(u, data);
									writeData(parsed);
									//console.log("result:\n" + data);
								});
							});
							request.end();
						}
				}			
			});
		}
	}
});

function parseFile(path, content) {
	var data = '';
	var comps = path.split('/');
	var title = comps[comps.length-1]
	if (title.indexOf('.java') > 0) {
		data += title;
		data += '\n\n';
	}

	return data;
}

function writeData(data) {
	var writeStream = fs.createWriteStream('Permission.txt', {'flags' : 'a'});
	writeStream.write(data);
	writeStream.end();
}

c.queue('https://github.com/android/platform_frameworks_base');
