// ==UserScript==
// @name        Change Page Titles Properly
// @namespace   nexon.net
// @description Changes the page title for tab clarity
// @include     /https?:\/\/[^\.]+\.nexon\.net\/community\/?(#.*)?/
// @run-at      document-idle
// @version     1
// @grant       none
// ==/UserScript==

function setTitle() {
	var hash = window.location.hash,
		siteName = getMetaContentByName("og:site_name").replace(" - ", " Forum - ");
		title = hash.match(/.*?-([^%]+)%/);
	if(title == null) title = "";
	else title = title[1].replace(/-/g, " ") + " - ";
	document.title = title + siteName;
}

function getMetaContentByName(name, content) {
   content = (content == null) ? 'content' : content;
   return document.querySelector("meta[property='" + name + "']").getAttribute(content);
}

setTitle();

window.addEventListener("hashchange", setTitle, false);

//document.getElementById("forum-frame").onload = function () { setTitle(); };

/*
document.getElementById("forum-frame").onload = function () {
  document.title = window.location.hash.match(/.*?-(.*?)%/)[1];
};
*/
