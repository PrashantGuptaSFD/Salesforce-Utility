/*function getData(){
	chrome.storage.sync.get(null, function(items){
		orgDetails = items;
		console.log(items);
		return items;
	});
	return null;
}*/
function removeOrgEntry(ele){
	var mapid = ele.childNodes[0].getAttribute("datavalue");
	/*if(mapid!=null){
		chrome.storage.sync.remove(mapid, function(Items) {
			refreshOrgList();
		});
	}*/
}
function editOrgEntry(ele){	
	var mapid = ele.childNodes[0].getAttribute("datavalue");
	
}