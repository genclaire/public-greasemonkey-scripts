// ==UserScript==
// @name        Change Page Titles Properly
// @namespace   nexon.net
// @description Changes the page title for tab clarity
// @include     /https?:\/\/[^\.]+\.nexon\.net\/community(\/(forums)?)?(#.*)?/
// @run-at      document-idle
// @version     1
// @grant       none
// ==/UserScript==

var siteName = getMetaContentByName("og:site_name");

function setTitle() {
	var hash = window.location.hash,
		title = hash.match(/.*?-([^%]+)(%|$)/);
	//if(title == null) title = "";
	//else title = title[1].replace(/-/g, " ") + " - ";
	title = (title == null) ? "" : title[1].replace(/-/g, " ") + " - "; 
	document.title = title + siteName;
}

function getMetaContentByName(name, content) {
   content = (content == null) ? 'content' : content;
   var element = document.querySelector("meta[property='" + name + "']");
   return (element == null) ? document.title : element.getAttribute(content).replace(" - ", " Forum - ");
}

setTitle();

window.addEventListener("hashchange", setTitle, false);

//document.getElementById("forum-frame").onload = function () { setTitle(); };

/*
document.getElementById("forum-frame").onload = function () {
  document.title = window.location.hash.match(/.*?-(.*?)%/)[1];
};
*/
