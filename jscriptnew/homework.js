var addCloseButton = document.getElementsByTagName("LI");
for (var i = 0; i < addCloseButton.length; i++) {
    var addtext = document.createElement("SPAN");
    var txt = document.createTextNode("\u005B\u00D7\u005D");
    addtext.className = "close";
    addtext.appendChild(txt);
    addCloseButton[i].appendChild(addtext);
}
var clickClose = document.getElementsByClassName("close");
for (var i = 0; i < clickClose.length; i++) {
    clickClose[i].onclick = function() {

        var div = this.parentElement;
        div.style.display = "none";
    }
}