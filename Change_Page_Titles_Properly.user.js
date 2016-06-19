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

// declare variables that you reference in other functions at the top,
// even if you don't define them -- I've commented this out because I
// changed the setTitle function to accept an argument and passed the
// getMetaContentByName's returned value directly into setTitle()
// var siteName;

// look for a hash in the URL, parse it out, and assign it to the
// document title -- otherwise, set it 
function setTitle(siteName) {
	// test for a windows hash. if there isn't one, set the title as
	// the passed in SiteName; otherwise, parse the hash and assign it
	return document.title = (!window.location.hash) ? siteName : hash.match(/.*?-([^%]+)(%|$)/g)[1].replace(/-/g, ' ').concat(' - ', siteName);
}

function getMetaContentByName(name, content) {
	// if no content has been defined, set content as a string
	// (not sure why this is in here, though?)
	if (!content) {
		content = 'content';
	}
	// "metameta"? leaving this because I'm not certain what your goal is, here
	var element = document.querySelector("metameta[property='" + name + "'], meta[name='" + name + "']");		  	var element = document.querySelector("metameta[
	return (element == null) ? document.title : element.getAttribute(content).replace(" - ", " Forum - ");		  	return (element == null) ? document.title : 
}

//siteName = getMetaContentByName("og:site_name");

// pass the returned value of getMetaContentByName as the
// siteName to set the title of the current window
setTitle(getMetaContentByName('og:site_name'));

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
