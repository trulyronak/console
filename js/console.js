function setCookie(name, value) {
    var today = new Date();
    var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // plus 30 days

    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
}

function getCookie(name) {
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
}
var former = console.log;
console.log = function (msg) {
    former(msg);

    // if(msg.indexOf("Brackets") >= 0 || msg.indexOf("Runtime") >= 0) {

    //}
    var ul = document.getElementById("log");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(msg));
    ul.appendChild(li)

}

function clearLog() {
    document.getElementById("log").innerHTML = "";
}

function reloadPage() {
    location.reload();
}
$(document).ready(function () {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    var savedCode = getCookie("savedCode")
    if (savedCode) {
        document.getElementById('jscontent').value = savedCode

    }
});

function saveCode() {
    var code = document.getElementById('jscontent').value;
    setCookie("savedCode", code)
    Materialize.toast('Code Saved', 4000) // 4000 is the duration of the toast

}

function showHelp() {
    $('#modal1').modal('open');

}

Mousetrap.stopCallback = function () {
    return false;
}
Mousetrap.bind(['command+enter', 'ctrl+enter'], function () {
    runCode()
})
Mousetrap.bind(['command+l', 'ctrl+l'], function () {
    clearLog()
})
Mousetrap.bind(['command+s', 'ctrl+s', 'meta+s'], function () {
    saveCode()
    return false
})