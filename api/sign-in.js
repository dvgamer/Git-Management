
var crypto = require('crypto');
var text = 'T0UnO.K';
var conn = require('../library/db');

module.exports = function(req, res, data){

	console.log(data);
	console.log(req.session);

	res.error({ username: true, password: false });

	// Unknow User and Password
	// Unknow Password
	// pass

	// var hash = crypto.createHmac('sha256', text).update('password').digest('hex');
	// console.log(hash);
	// console.log(data);

	// var db = conn.connect();
 //  	var $scope = {};

	// db.insert('sys_sessions', { session_id: 'plum', email: 'purple' , ipaddress: 'purple', expire_at: 1453465421355 }, function(err, row, field){
	// 	console.log(err);
	// 	console.log(row);
	// 	console.log(field);
	// 	res.send({ session_id: 'aaa' });
	// });

// 	db.query({
//     sql: 'SELECT * FROM repository',
//     nestTables: true,
//     paginate: {
//         page: 1,
//         resultsPerPage: 15
//     }
// }).then(function(err, row, field){
// 		console.log(err);
// 		console.log(row);
// 		console.log(field);
// 		res.send({ session_id: 'aaa' });
// 	});

}