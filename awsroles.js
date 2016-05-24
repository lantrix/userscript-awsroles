// ==UserScript==
// @name         awsroles
// @namespace    http://github.com/lantrix/userscript-awsroles
// @version      0.1
// @description  Filter non admin roles in AWS SAML page
// @author       Lantrix
// @match        https://signin.aws.amazon.com/saml
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
	var labels = document.querySelectorAll(".saml-role-description");
	for (var i = 0 ; i != labels.length ; i++)
	{
	    var label = labels[i];
	    if (!label.innerHTML.match(/-Admin/g)) {
	    	$(document).find(label).hide();
		}
	}
})();
