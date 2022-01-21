function removesomeone(){
    var unlist = document.getElementById('unorder');
    var children = unlist.childNodes;
    console.log(children);
    unlist.removeChild(unlist.firstElementChild);
}