/*global Ti */

// setup window

//	Enter phone number or member ID
//	Enter password
//	password retrieval
//		via text to all SMS enabled phone numbers on account
//		via email to address on account

(function () { 
	"use strict";

	//retrieve current setup info (properties)
	
	//build entry form
	
	//handle input
	
	var win = Titanium.UI.currentWindow;
	
	var btnClose = Titanium.UI.createButton({
		title:'Close',height:40,width:145,left:10,top:210});
	btnClose.addEventListener('click', function(){win.close();});
	win.add(btnClose);

}());
