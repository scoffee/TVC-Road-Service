//initialization
Ti.include('modules/window_handler.js');
Ti.include('modules/db.js');

db.initialize();

//Titanium.UI.setBackgroundColor('#000');

createAppSingleWindow('main_windows/main.js');
