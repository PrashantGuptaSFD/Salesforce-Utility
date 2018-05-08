getData(); 

function refreshOrgList(items){
	orgDetails = items;
	console.log(items);
	var tableDev = document.getElementById('orgTable');
	for(var un in orgDetails ){
		console.log(un);
		console.log(orgDetails[un]);
		username = orgDetails[un]['username'];
		password = orgDetails[un]['password'];
		var tr = document.createElement('tr');
		tr.innerHTML = `	<td class="tg-b7b8"><a href="https://login.salesforce.com?un=`+username+`&pw=`+ password +`" target="_blank"><i class="far fa-window-restore"></i></a></td>
					    	<td class="tg-yw4l"><button class="sUtil-popup-button" ><i class="fas fa-user-secret"></i></button></td>
					    	<td class="tg-b7b8"><button class="sUtil-popup-button">`+ username+`</button></td>`;
		
		var tdEdit = document.createElement('td', {class : 'tg-b7b8' });
		tdDelete.innerHTML=`<button class="sUtil-popup-button-editOrgId" datavalue= "`+un+`" ><i class="fas fa-pencil-alt"></i></button>`;
		tdDelete.addEventListener('click', function(){editOrgEntry(this)}, false);
		tr.appendChild(tdDelete);
		
		var tdDelete = document.createElement('td', {class : 'tg-b7b8' });
		tdDelete.innerHTML=`<button class="sUtil-popup-button-deleteOrgId" datavalue= "`+un+`" ><i class="fas fa-trash-alt"></i></button>`;
		tdDelete.addEventListener('click', function(){removeOrgEntry(this)}, false);
		tr.appendChild(tdDelete);
		
		tableDev.appendChild(tr);
	}
}


function getData(){
	chrome.storage.sync.get(null, function(items){
		orgDetails = items;
		console.log(items);
		refreshOrgList(items);
	});
	//download('build.xml','this is a test file');
}




function download(filename, text) {
  var pom = document.createElement('a');
  pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + 

encodeURIComponent(text));
  pom.setAttribute('download', filename);

  pom.style.display = 'none';
  document.body.appendChild(pom);

  pom.click();

  document.body.removeChild(pom);
}