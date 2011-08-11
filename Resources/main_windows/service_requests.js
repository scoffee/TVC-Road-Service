//show list of service requests, indicating if any are still active
//include provider contact info, in case member needs to contact the provider later

/*global Ti */

(function () { 
	"use strict";
	
	var win = Titanium.UI.currentWindow;
	
	var btnClose = Titanium.UI.createButton({
		title:'Close',height:40,width:145,left:10,top:210});
	btnClose.addEventListener('click', function(){win.close();});
	win.add(btnClose);

}());
