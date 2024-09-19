// logger.js

let logLevel = 'info';

const levels = {
  info: 1,
  warn: 2,
  error: 3
};

function init(options) {
  logLevel = options.level || 'info';
}

function log(message, level) {
  if (levels[level] >= levels[logLevel]) {
    console.log(`[${level.toUpperCase()}] ${message}`);
  }
}

function info(message) {
  log(message, 'info');
}

function warn(message) {
  log(message, 'warn');
}

function error(message) {
  log(message, 'error');
}

module.exports = { init, info, warn, error };
