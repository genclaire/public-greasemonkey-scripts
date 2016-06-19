// ==UserScript==
// @name        Change Page Titles Properly
// @namespace   nexon.net
// @description Changes the page title for tab clarity
// @include     /https?:\/\/[^\.]+\.nexon\.net\/community(\/(forums)?)?(#.*)?/
// @exclude     /https?:\/\/forum2\.nexon\.net\/.*?/
// @run-at      document-idle
// @version     1
// @grant       none
// ==/UserScript==

function setTitle() {
	var hash = window.location.hash,
		title = hash.match(/.*?-([^%]+)(%|$)/);
	title = (title == null) ? "" : title[1].replace(/-/g, " ") + " - "; 
	document.title = title + siteName;
}

function getMetaContentByName(name, content) {
	content = (typeof content === 'undefined') ? 'content' : content;
	var element = document.querySelector("metameta[property='" + name + "'], meta[name='" + name + "']");
	return (element == null) ? document.title : element.getAttribute(content).replace(" - ", " Forum - ");
}

var siteName = getMetaContentByName("og:site_name");

setTitle();

window.addEventListener("hashchange", setTitle, false);

/*
function init() {
	var scriptElement = document.createElement("script");
    scriptElement.type = "text/javascript";
    scriptElement.id = "mainScript";
	scriptElement.appendChild(document.createTextNode('function setTitle(callback) {alert(callback.query.results.title);}'));
	(document.body || document.head || document.documentElement).appendChild(scriptElement);
	getTitle();
	window.addEventListener("hashchange", getTitle, false);
}
function getTitle() {
	var scriptElement = document.getElementById("getTitle");
	if(document.getElementById("getTitle")) scriptElement.remove();
    scriptElement = document.createElement("script");
    scriptElement.type = "text/javascript";
    scriptElement.id = "getTitle";
    scriptElement.src = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22http%3A%2F%2Fforum2.nexon.net%2F" + window.location.hash.match(/%2F(.*?)-/)[1] + "%22%20and%20xpath%3D'%2F%2Fhead%2Ftitle'&format=json&callback=setTitle";
    //scriptElement.src = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22http%3A%2F%2Fforum2.nexon.net%2Fshowthread.php%3F1539474%22%20and%20xpath%3D'%2F%2Fhead%2Ftitle'&format=json&callback=setTitle";
    (document.body || document.head || document.documentElement).appendChild(scriptElement);
}
init();
*/
//document.getElementById("forum-frame").onload = function () { setTitle(); };

/*
document.getElementById("forum-frame").onload = function () {
  document.title = window.location.hash.match(/.*?-(.*?)%/)[1];
};
*/
