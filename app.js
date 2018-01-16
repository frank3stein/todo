
var ul = document.querySelector("ul");
function addTodo(){
    var todoValue = document.getElementById("todoValue").value;
    var li = document.createElement("li");
    li.setAttribute('done', 'false');
    li.onclick = todoDone;
    li.innerText = todoValue;
    ul.appendChild(li);
    document.getElementById("todoValue").value = "";
}

function clearAllTodo(){
    ul.innerHTML = "";
}

function clearAllDone(){
    var li = document.getElementsByTagName("LI");
    console.log(li);
    for (var i = li.length-1; i>=0; i--){ 
        //using reverse iteration as if not used, once an element is removed the HTMLCollection (not an array) changes,
        //so if the first and second element are done, only the first element is removed as 
        //iteration moves already to second element and skips the now first element which was the second done element 
        //to begin with. 
        if (li[i].attributes.getNamedItem('done').value === 'done'){
            li[i].parentNode.removeChild(li[i]);
            console.log(`${i} item is removed`)
        }
    }
}

function todoDone(){
    var done = this.attributes.getNamedItem('done').value;
    if (done === "false") {
        this.style.textDecoration = "line-through";
        this.attributes.getNamedItem('done').value = "done";
    } else if (done === "done"){
        this.attributes.getNamedItem('done').value = "false";
        this.style.textDecoration = "";
    }
}