var hostName = '';
var hostNameMap = null;
window.onbeforeunload = function() {
	hostName = window.location.host;
	if(hostName == 'login.salesforce.com' || hostName == 'test.salesforce.com'){
		var username = document.getElementById('username').value;
		var password = document.getElementById('password').value;
		if(username!=null && username!='' && password!=null && password!=''){
			var data = {'hostname' : hostName,
								'username' : username,
						 		'password' : password,
						 		'hide' : 'false',
					 			'orgtype' : getOrgType(hostName),
								'nick' : 'test Nick'};
			console.log(data);
			var mapid = username.toLowerCase();
			chrome.storage.sync.set({ [mapid] : data }, function(){
				chrome.storage.sync.get(null, function(items){
				});
			});
		}
	}
}
window.onload = function() {
	/*var div = document.createElement('div');
    div.setAttribute('id', 'SavePasswordContainer');
    div.innerHTML = `<div id="savePassword" style="font: 150 16.00px Adamina; border:3px solid #5d5d5d; background-color: grey; width: max-content; text-align: center;">
		Do you want to add this password ? </br>
		<button style="background-color:  transparent;
	    border: none; color:white">Save</button>
		<button style="background-color:  transparent;
	    border: none; color:red">Cancel</button>
		</div>`;

    document.body.appendChild(div);
    document.createElement('Login');
    document.querySelectorAll('[id^=hint_]');
*/
};
function getOrgType(hostname){
	if(hostname.toLowerCase() == 'login.salesforce.com'){
		return 'Production';
	}else if(hostname.toLowerCase() == 'test.salesforce.com'){
		return 'Sandbox';
	}
}
