const assert = require('assert');
const logger = require('../logger');

describe('Logger', function() {
  it('should log an info message', function() {
    logger.init({ level: 'info' });
    assert.strictEqual(logger.info('Test info message'), undefined);
  });
});
