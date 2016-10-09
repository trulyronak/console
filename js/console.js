var former = console.log;
console.log = function(msg){
    former(msg);
    
   // if(msg.indexOf("Brackets") >= 0 || msg.indexOf("Runtime") >= 0) {
        
    //}
    var ul = document.getElementById("log");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(msg));
    ul.appendChild(li)

}
function clearLog() {
    console.log("we are clearing");
    document.getElementById("log").innerHTML = "";
}

function reloadPage() {
    location.reload();
}