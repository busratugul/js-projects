//Create a "close" button and append it to each list item

let myNodeList = document.getElementsByTagName("LI");
var i;
for (i = 0; i<myNodeList.length; i++){
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

//Clickk on a close button to hide the cureent list item

let close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++){
    close[i].onclick = function(){
        let div = this.parentElement;
        div.style.display = "none";
    }
}

//Add a "checked" symbol when clicking on a list item

var list = document.querySelector('ul');
list.addEventListener('click', function(ev){
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }
},false);

//Create a new list item when clicking on the "Add" button

function newElement() {
    let li = document.createElement ("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue=== ''){
        alert("You must write something!");
    }else{
        document.getElementById("myUL".appendChild(li));
    }
    document.getElementById("myInput").value="";
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++){
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
        }
    }
}
