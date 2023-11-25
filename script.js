const item = document.querySelector("#item");
const box = document.querySelector("#box1");

item.addEventListener(
    "keyup",
     function(event){
        if(event.key == "Enter"){
            addData(this.value);
            this.value="";
            saveData()
            
        }
    }
)
const addData = (item) =>{
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    ${item}
    <i class="fas fa-times"></i>
    `;
    listItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("final");
            saveData()
          
        }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function(){
            listItem.remove();
            saveData()
           
        }
    )    
    box.appendChild(listItem)
}

function saveData(){
    localStorage.setItem("list", box1.innerHTML);
}
function showList(){
    box1.innerHTML = localStorage.getItem("list");
}
showList();