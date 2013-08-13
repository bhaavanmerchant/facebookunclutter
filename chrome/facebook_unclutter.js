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
        for (var i = 0; i < nodes.length; i++)
        {
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
    
    nodesU = document.body.getElementsByClassName('uiStreamShareLikePageBox');
    if (nodesU != null && typeof nodesU !== "undefined" ) 
	{
        for (var i = 0; i < nodesU.length; i++) {
            removeNode(nodesU[i]);
        }
    }
	
	var itemsSpon = document.body.getElementsByClassName('uiStreamHeadlineWithLikeButton');
	var sponParentNumber = 4;
	if (itemsSpon != null && typeof itemsSpon !== "undefined" ) 
	{
        for (var i = 0; i < itemsSpon.length; i++) {
			var itemSpon = itemsSpon[i];
			for (var j = 0; j < sponParentNumber; j++ ) {
			itemSpon = itemSpon.parentNode;
			}
            removeNode(itemSpon);
        }
		
    }
    
}

//document.addEventListener("DOMNodeInserted", cleanUp, true);
cleanUp();
setInterval(cleanUp, 2000);