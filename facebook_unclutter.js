// ==UserScript==
// @name        Facebook Unclutter
// @namespace   com.userscript.facebook.bhaavanmerchant.cleaner
// @include     https://www.facebook.com/
// @include     *.facebook.*
// @include     facebook.com/*
// @include     htt*://*.facebook.com/*
// @grant 		metadata
// @version     1
// @exclude     htt*://*channel*.facebook.com*
// @exclude     htt*://*static*.facebook.com*
// @exclude     htt*://upload.facebook.com/*
// @exclude     htt*://*.facebook.com/ajax/*
// ==/UserScript==
var counter = 0;
function removeNode(node) {
    node.style.display = 'none';
}

function cleanse(node) {
    if (node != null && typeof node !== "undefined" ) 
	{
	   removeNode(node);
	}
}

function cleanUp() {
    
    var nodes = document.body.getElementsByClassName('clearfix storyContent');
    if (nodes != null && typeof nodes !== "undefined" ) 
	{        
		for (var i = 0; i < nodes.length; i++) {            
            if (nodes[i].innerHTML.indexOf("href=\"/about/ads\"") != -1)
            {
                removeNode(nodes[i]);
            }
		}
	}
    var nodeSide = document.getElementById('pagelet_ego_pane_w');
    cleanse(nodeSide);
    counter = counter +1;
/*        if (counter % 10 == 0 ) {
        alert (counter);
        } */
    nodeSide = document.getElementById('pagelet_ego_pane');
    cleanse(nodeSide);
    
    nodeSide = document.getElementById('pagelet_navigation');
    cleanse(nodeSide);
    
    var nodesU = document.body.getElementsByClassName('storyUnconnectedPost');
    if (nodesU != null && typeof nodesU !== "undefined" ) 
	{
        for (var i = 0; i < nodesU.length; i++) {
            removeNode(nodesU[i]);
        }
    }
}

//document.addEventListener("DOMNodeInserted", cleanUp, true);
setInterval(cleanUp, 2000);