Ti.include('../modules/window_handler.js');

(function () { 
	var data, tableview;

	data = [
		{title:'Set Up', hasChild:true, test:'setup.js'},
		{title:'Find Me', hasChild:true, test:'find_me.js'},
		{title:'Get Road Service', hasChild:true, test:'get_service.js'},
		{title:'Service History', hasChild:true, test:'service_requests.js'}
	];
	
	tableview = Ti.UI.createTableView({data:data});

	tableview.addEventListener('click', function(e)
	{
		if (e.rowData.test)
		{
			openWindow(e.rowData.test);
		}
	});

	Ti.UI.currentWindow.add(tableview);

}());