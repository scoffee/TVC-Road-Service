/*global Ti */

function createAppSingleWindow(url) {
	"use strict";

    var win = Ti.UI.createWindow({
        url: url
	});

    if (Ti.Platform.osname !== 'android') {
    	win.hideTabBar();
		var tab = Ti.UI.createTab({
		    title: 'tab',
		    window: win
		});
		
		var tabGroup = Ti.UI.createTabGroup();
		tabGroup.addTab(tab);
		
		tabGroup.open();
    }
    else
    {
        win.open();
    }
}


function openWindow(url, anim) {
	"use strict";

    var win= Ti.UI.createWindow({  
        url: url,
        fullscreen: false
        });

    if (Ti.UI.currentTab != null)
    {
        Ti.UI.currentTab.open(win,{animated:anim});
    }
    else
    {
        win.open({animated:anim || true});
    }
}	
