#!/usr/bin/env node
var prerender = require('./lib');

var server = prerender({ port: 3003 });

server.use(prerender.sendPrerenderHeader());
server.use(prerender.browserForceRestart());
// server.use(prerender.blockResources());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());

server.start();
