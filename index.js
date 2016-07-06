var oracledb = require('oracledb');
console.info('oracledb:', oracledb);

exports.handler = function(event, context) {
    console.info('event:', event);
    console.info('context:', context);
    console.info('oracledb:', oracledb);

    if (oracledb != null) {
        context.succeed('Oracle DB is supported');
    } else {
        context.fail('Did not actually expect to see this, `require(\'oracledb\')` will fail');
    }
};
