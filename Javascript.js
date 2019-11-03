/*jslint devel: true */

function clearForm(arg) {

//do not clear clicked element ++ focus	
	switch (arg) {
	case "FormStartPage":
		//alert("value is {" + arg + "}");
		document.getElementById("InputStartPage").focus();
		document.getElementById("FormGoogle").reset();
		document.getElementById("FormGoogleI").reset();
		break;
		
	case "FormGoogle":
		//alert("value is {" + arg + "}");
		document.getElementById("InputGoogle").focus();
		document.getElementById("FormStartPage").reset();
		document.getElementById("FormGoogleI").reset();
		break;
		
	case "FormGoogleI":
		//alert("value is {" + arg + "}");
		document.getElementById("InputGoogleI").focus();
		document.getElementById("FormStartPage").reset();
		document.getElementById("FormGoogle").reset();
		break;
		
	default:
		//alert("value is { default }");
	}
}

function focusonload() {
    
	document.getElementById("InputStartPage").focus();
}

window.onload = function () {
	alert("ff");
	document.getElementById("InputStartPage").focus();
};
