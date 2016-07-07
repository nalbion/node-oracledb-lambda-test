var oracledb;
// try {
//     oracledb = require('oracledb');
// } catch (e) {
//     console.error('Failed to load oracledb:', e);
// }

// console.log('oracledb:', oracledb);

exports.handler = function(event, context, callback) {
    console.log('event:', event);
    console.log('context:', context);
    try {
        oracledb = require('oracledb');
    } catch (e) {
        console.log('Failed to load oracledb:');
        console.log(e);
        callback('Failed to load oracledb');
    }
    console.log('oracledb:', oracledb);

    if (oracledb != null) {
        callback(null, 'Oracle DB is supported');
    } else {
        callback('Did not actually expect to see this, `require(\'oracledb\')` will fail');
    }
};
