function sayHello()
{
	alert("Hello there");
}
function confirm()
{
	alert("Confirm");
}
function redirect() 
{
	window.location="http://www.google.com";
}

function getSelectionText() {
    var text="";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    var selectedtext = text
    if(selectedtext)
    {
    	alert(text);
    }
}