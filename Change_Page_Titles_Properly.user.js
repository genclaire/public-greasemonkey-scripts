// ==UserScript==
// @name        Change Page Titles Properly
// @namespace   nexon.net
// @description Changes the page title for tab clarity
// @include     /https?:\/\/[^\.]+\.nexon\.net\/community(\/(forums)?)?(#.*)?/
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

//document.getElementById("forum-frame").onload = function () { setTitle(); };

/*
document.getElementById("forum-frame").onload = function () {
  document.title = window.location.hash.match(/.*?-(.*?)%/)[1];
};
*/
