//Constants Class to hold all constant Values
var TRAILHEADSHOSTNAME = 'https://trailhead.salesforce.com';
var APPIRIOHOSTNAME = 'https://appirio.my.salesforce.com';
var TRAILHEADSSEARCHURL = '/en/search?keywords=';
var SALESFORCESEARCHURL = '/_ui/search/ui/UnifiedSearchResults?str=';
//Global Variables 
var searchSalesforce = {
    "id": "searchSalesforce",
    "title": "Search in Salesforce",
    "contexts": ["selection"],
    "documentUrlPatterns":[ "https://*.force.com/*",
                            "https://*.salesforce.com/*",
                            "https://*.cloudforce.com/*"]
};
var searchCMC = {
    "id": "searchCMC",
    "title": "Search in Appirio CMC",
    "contexts": ["selection"]
};
var searchTrailheads = {
    "id": "searchTrailheads",
    "title": "Search Trailheads",
    "contexts": ["selection"]
};

chrome.contextMenus.create(searchSalesforce);
chrome.contextMenus.create(searchCMC);
chrome.contextMenus.create(searchTrailheads);

chrome.contextMenus.onClicked.addListener(function(clickData){   
  var hostName = '';
  var url ='';
  if (clickData.menuItemId == "searchSalesforce" && clickData.selectionText && clickData.pageUrl){
    hostName = clickData.pageUrl.match(/^[\w-]+:\/{2,}\[?[\w\.:-]+\]?(?::[0-9]*)?/)[0];
    url = hostName + SALESFORCESEARCHURL;
  }
  else if (clickData.menuItemId == "searchCMC" && clickData.selectionText && clickData.pageUrl){
    url = APPIRIOHOSTNAME + SALESFORCESEARCHURL;
  }else if(clickData.menuItemId == "searchTrailheads" && clickData.selectionText && clickData.pageUrl){
    url = TRAILHEADSHOSTNAME + TRAILHEADSSEARCHURL;
  }
  if(url!=null && url!=''){
    url = url+ clickData.selectionText;
    window.open(url, '_blank');
  }
});
