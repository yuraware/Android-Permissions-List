console.log("starting...");

var fs = require('fs');

var Crawler = require("crawler");
var url = require('url');
var http = require('https');

var checkUrl = "/android/platform_frameworks_base/tree/master/";
var checkUrl2 = "/android/platform_frameworks_base/blob/";
var baseRawUrl = "https://raw.githubusercontent.com";

var urlMap = {};
var fileNameMap = {};

var dir = require('node-dir');
var fs = require('fs');


traverseFiles();

function traverseFiles() {	
	dir.paths(__dirname, true, function(err, paths) {
    	if (err) throw err;

    	for (var i in paths) {
    		var path = paths[i];
    		if (!fs.lstatSync(path).isDirectory()) {
    			var content = readFile(path);
    			var parsed = parseFile(path, content);
				if (parsed.length > 0) {
					writeData(parsed);		
				}
    		}
    	}
	});
}

function readFile(filepath) {
	try {
		var content = fs.readFileSync(filepath);
		return content;
	} catch (err) {
		console.log("error reading file = " + filepath)
		return ""
	}
}

function crawlPages() {
	var c = new Crawler({
	maxConnections: 16,
	callback: function (error, result, $) {
	
		if (null != result && null != $) {
			$('a').each(function(index, a) {
				var queuedUrl = $(a).attr('href');

				if (queuedUrl != undefined 
					&& (queuedUrl.indexOf(checkUrl) > -1  || queuedUrl.indexOf(checkUrl2) > -1)) {

						var u = "https://github.com" + queuedUrl;

						var containsAddress = u in urlMap;
						if (!containsAddress) {
							c.queue(u);
						}
						
						urlMap[u] = true;

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
									if (parsed.length > 0) {
										writeData(parsed);		
									}
									
								});
							});

							request.on('error', function(error) {
									console.log(error);
								});

							request.on('uncaughtException', function (err) {
    								console.log(err);
							}); 

							request.end();
						}
				}			
			});
		}
	}
});

	c.queue('https://github.com/android/platform_frameworks_base');
}

function parseFile(path, content) {
	var fileName = getFileNameFromPath(path);
	if (fileName.length == 0) return "";

	console.log("parsing file at path: "  +path);

	var fileParsed = fileName in fileNameMap;

	if (!fileParsed) {
		var title = getFilePath(path);
		fileNameMap[fileName] = true;

		var data = '';

		if (title.length > 0) {
			var permissions = getPermissionsFromString(content);

			var relativePath = path.replace(__dirname + "/source_code/",'');

			if (permissions.length > 0) {
				data += '\n' + relativePath + '\n';
				//console.log("title = " + title);
				data += permissions;	
			}
		}

		return data;
	}

	return '';
}

var methodPermissions = "";

function getPermissionsFromString(content) {
	var data = "";
	content = content + ''
	var lines = content.split('\n');
	for (var i = 0; i < lines.length; i++) {
		var line = lines[i];
		
		if (line.indexOf('<p>Requires') > -1) {
			//line = lines[++i];
			while (line.indexOf('android.Manifest.permission#') > -1) {
				var permission = (line.split('#')[1]).split('}')[0] + '\n';
				permission = permission.split(' ')[0];

				if (methodPermissions.indexOf(permission) === -1) {
					methodPermissions = methodPermissions.concat(permission);	
				}
				
				line = lines[++i];

				//console.log('permission = ' + permission);
				//console.log('5methodPermissions = ' + methodPermissions);
			}
		}

		if (line.indexOf('public ') > -1 && methodPermissions.length > 0) {
			var methodSignature = line;

			// method signature			
			if (line.indexOf('{') === -1) {
				while (true) {
					line = lines[++i];
					methodSignature += line;

					if (line.indexOf('{') > -1) { break; }
				}
			}

			methodSignature = methodSignature.replace('{', '').trim();

			// public strings
			if (methodSignature.indexOf("/**") > -1) {
				methodSignature = methodSignature.split("/**")[0];
			}

			if (methodSignature.indexOf("//") > -1) {
				methodSignature = methodSignature.split("//")[0];
			}
		}

		if (methodPermissions.length > 0 && methodSignature !== undefined 
			&& methodSignature.length > 0 && data.indexOf(methodSignature) === -1) {
			
			methodPermissions = '\n' + methodSignature + '\n' + methodPermissions + '\n'

			//console.log('methodPermissions = ' + methodPermissions);
			data += methodPermissions;
			methodPermissions = '';
		}

	}

	data = data.replace(/ +(?= )/g,'');

	return data;
}

function getFilePath(path) {
	return path.replace(baseRawUrl, '');
}

function getFileNameFromPath(path) {
	var comps = path.split('/');
	var title = comps[comps.length-1];
	return (title.indexOf('.java') > -1) ? title : '';
}

function writeData(data) {
	data = data.replace(/\n\s*\n/g, '\n\n');
	var writeStream = fs.createWriteStream('Permission.txt', {'flags' : 'a'});
	writeStream.write(data);
	writeStream.end();
}
