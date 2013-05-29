// ==UserScript==
// @name        Facebook Unclutter
// @namespace   com.userscript.facebook.bhaavanmerchant.cleaner
// @include     https://www.facebook.com/
// @include     *.facebook.*
// @include     facebook.com/*
// @include     htt*://*.facebook.com/*
// @grant 		metadata
// @version     1
// ==/UserScript==

function cleanUp() {
    
    var nodes = document.body.getElementsByClassName('clearfix storyContent');
    if (nodes != null && typeof nodes !== "undefined" ) 
	{        
		for (var i = 0; i < nodes.length; i++) {            
            if (nodes[i].innerHTML.indexOf("href=\"/about/ads\"") != -1)
            {
                nodes[i].style.display = 'none';           
            }
		}
	}
    document.getElementById('pagelet_ego_pane_w').style.display = 'none';
    document.getElementById('pagelet_navigation').style.display = 'none';
    var nodesU = document.body.getElementsByClassName('storyUnconnectedPost');
    if (nodesU != null && typeof nodesU !== "undefined" ) 
	{
        for (var i = 0; i < nodesU.length; i++) {
            nodesU[i].style.display = "none";
        }
    }
}

document.addEventListener("DOMNodeInserted", cleanUp, true);