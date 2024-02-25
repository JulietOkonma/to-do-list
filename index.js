let inputBox = document.getElementById("input-box");
let list = document.querySelector(".list");
function addTask(){
    if (inputBox.value === ''){
    alert('you must write something here!');
    
}
else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    list.appendChild(li);
    let span = document.createElement("span")
    span.innerHTML = "<img src = 'images/cancel-icon-2048x2048-milcunum.png'>";
    li.appendChild(span);
    

    inputBox.value = '';
    
}
Data()
}
list.addEventListener("click", function(e) {
    console.log("clicked:", e.target)
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");

        Data();
    }
    
    
    else if(e.target.tagName === "IMG") {
        
        e.target.parentElement.parentElement.remove();

        Data()
        
    }
}, false)



function Data(){
    localStorage.setItem("data", list.innerHTML)
}
function displayData(){
    list.innerHTML = localStorage.getItem("data")
}
displayData()
