alert('Hi! Welcome to the Grocery Shoplist!');

let button = document.getElementById('add btn');

//button.addEventListener ('click' , function(){
//    console.log("added to the list");    
//
//})


function addToList(){
    let tag = document.createElement('tr');
    let tagg = document.createElement('td');
    tag.appendChild(tagg)
    let text = document.createTextNode(document.getElementById('input-grocery').value);
    tagg.appendChild(text);
    let element = document.getElementById("list");
    element.appendChild(tag);
}
function emp(){
    document.getElementById('list').replaceChildren('')
}