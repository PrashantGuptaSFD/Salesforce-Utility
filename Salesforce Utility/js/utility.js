function removeOrgEntry(ele){
	var mapid = ele.childNodes[0].getAttribute("datavalue");
	if(mapid!=null){
		chrome.storage.sync.remove(mapid, function(Items) {
		refreshOrgList();
	});
	}
}
function editOrgEntry(ele){
	var mapid = ele.childNodes[0].getAttribute("datavalue");
	var entryDetail;
	chrome.storage.sync.get(mapid, function(items){
		entryDetail = items;
		var editEntryDiv = document.getElementById('sUtil-Body-editBox');
		var elements = editEntryDiv.getElementsByTagName('input');
		for(var i = 0; i < elements.length; i++){
			elements[i].value= entryDetail[mapid][elements[i].getAttribute("datatag")];
		}
		editEntryDiv.style.display= 'table';
	});
}
function editOrgUndo(){
	var editEntryDiv = document.getElementById('sUtil-Body-editBox').style.display = 'none';
}
function editOrgSave(){
	var editEntryDiv = document.getElementById('sUtil-Body-editBox');
	var elements = editEntryDiv.getElementsByTagName('input');
	var data = [];
	for(var i = 0; i < elements.length; i++){
		data['']
		elements[i].value= entryDetail[mapid][elements[i].getAttribute("datatag")];
	}
	var data = {'hostname' : hostName,
						'username' : username,
						'password' : password,
						'hide' : 'false',
						'orgtype' : getOrgType(hostName),
						'nick' : 'test Nick'};
}
