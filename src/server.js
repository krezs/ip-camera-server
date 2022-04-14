const NodeMediaServer = require('node-media-server');
const config = require('./config');

var nms = new NodeMediaServer(config);

nms.run();