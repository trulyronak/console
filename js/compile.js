document.body.onload = function(){
	if(localStorage.getItem("htmlcode") != null){
		textEditor.value = localStorage.getItem("htmlcode");
	}
}

var textEditor = document.getElementById("jscontent");
	textEditor.onkeydown = function(e){
		if(e.keyCode == 9){
			e.preventDefault();
			var s = this.selectionStart;
			this.value = this.value.substring(0, s) + "\t" + this.value.substring(this.selectionEnd);
			this.selectionEnd = s + 1;
		}
	};

var textClr = "";

var display = document.getElementById("display");
var runButton = document.getElementById("runButton");
	

function runCode() {
    var el = document.getElementById('jscontent');
    var scriptText = el.value;
    var oldScript = document.getElementById('scriptContainer');
    var newScript;

    if (oldScript) {
      oldScript.parentNode.removeChild(oldScript);
    }

    newScript = document.createElement('script');
    newScript.id = 'scriptContainer';
    newScript.text = el.value;
    document.body.appendChild(newScript);
} 