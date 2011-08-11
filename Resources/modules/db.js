/*jslint forin: true, maxerr: 50, indent: 4 */
/*global Ti */

// encapsulate all db interaction

var db = (function () { 
	"use strict";

    var my = {}, conn; 
     
    function myConnection() {
		if (conn === undefined) {
			conn = Ti.Database.open('mydb');
		} 
        return conn;
    } 
	function ensureMemberRowExists () {
		var row;
		row = myConnection().execute('select * from member');
		if (!row.isValidRow()) {
			myConnection().execute('insert into member (member_id) values (0)');
		}
	}
	
	my.initialize = function () {
		//test for member table
		//players(player_id, name)
		myConnection().execute('Create table if not exists ' +
			' Member(' +
			' 	Member_ID integer, ' +
			' 	Phone_Number text, ' +
			' 	Password text)');

		//test for service_requests table
	};
	
	my.getMember = function () {
		var row, member;
		
		ensureMemberRowExists();
		row = myConnection().execute('select * from member');
		member = {
			memberID : rows.fieldByName('member_id'),
			phoneNumber : rows.fieldByName('phone_number'),
			password : rows.fieldByName('password')
		};
		return member;
	};     

	my.saveMember = function (m) {
		var rows, result;
		
		ensureMemberRowExists();

		myConnection().execute('update member set member_id = ?, set phone_number = ?, set password = ?',
			m.memberID || 0, m.phoneNumber || '', m.password || '');
	};     

    return my; 
     
}());