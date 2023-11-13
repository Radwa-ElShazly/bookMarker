let siteName=document.getElementById("siteName");
let webURL=document.getElementById("webURL");
let tbody=document.getElementById("tbody");
let addBtn=document.getElementById("addBtn")
let searchInput=document.getElementById("searchInput");
bookMarker=[];
let myIndex;

function setToLocalStorage(){
    localStorage.setItem("bookMarker",JSON.stringify(bookMarker));
}
if(localStorage.getItem("bookMarker")!=null){
 bookMarker = JSON.parse(localStorage.getItem("bookMarker"));
 displaySite();
}

addBtn.onclick =function(){
if(siteName.value!="" && webURL.value!=""){
    if(addBtn.innerText == "submit"){
        let site={
            name:siteName.value,
            url:webURL.value
        };
    bookMarker.push(site);
    setToLocalStorage();
    clearElement();
    displaySite();    
   }
else{
    addBtn.innerText="submit";
    bookMarker[myIndex].name=siteName.value;
    bookMarker[myIndex].url=webURL.value;
    setToLocalStorage();
    clearElement(); 
    displaySite(); 
}
}
}

function clearElement(){
    siteName.value="";
    webURL.value="";
}

function displaySite(){
let cartoona="";
for(let i=0;i<bookMarker.length;i++){
    cartoona+=`
    <tr>
    <td class="px-3">${bookMarker[i].name}</td>
    <td class="text-end">
        <button onclick="visit(${i})" class="bg-primary text-white border-0 py-2 px-3 rounded-2">visit</button>
     </td>
     <td class="text-end">
        <button onclick="updateElement(${i})" class="bg-warning text-white border-0 py-2 px-3 rounded-2">update</button>
        
     </td>
     <td class="text-end px-3">
        <button onclick="deleteElement(${i})" class="bg-danger text-white border-0 py-2 px-3 rounded-2">delete</button>
     </td>
 </tr> 
    `
}
tbody.innerHTML=cartoona;
}

function visit(index){
    window.open(bookMarker[index].url,'_blank');
}


function updateElement(index){
    myIndex=index;
    setToLocalStorage();
    addBtn.innerText="update";
    siteName.value=bookMarker[index].name;
    webURL.value=bookMarker[index].url;
}

function deleteElement(index){
    bookMarker.splice(index,1);
    setToLocalStorage()
    displaySite();
}

function search(term){
let cartoona="";

for(let i=0;i<bookMarker.length;i++){
    if(bookMarker[i].name.toLowerCase().indexOf(term) == 0){
    cartoona+=
    `    <tr>
    <td class="px-3">${bookMarker[i].name}</td>
    <td class="text-end">
        <button onclick="visit(${i})" class="bg-primary text-white border-0 py-2 px-3 rounded-2">visit</button>
     </td>
     <td class="text-end">
        <button onclick="updateElement(${i})" class="bg-warning text-white border-0 py-2 px-3 rounded-2">update</button>
        
     </td>
     <td class="text-end px-3">
        <button onclick="deleteElement(${i})" class="bg-danger text-white border-0 py-2 px-3 rounded-2">delete</button>
     </td>
 </tr>`
}
}
tbody.innerHTML=cartoona;
}

console.log(addBtn.innerText);