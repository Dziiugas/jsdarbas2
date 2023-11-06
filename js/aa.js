
document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault(); //Pakeicia standartine formos elgsena
   const task = document.querySelector("input").value;
   const ul = document.createElement("ul");
   const li = document.createElement("li");

   document.querySelector('section').appendChild(ul);
   document.querySelector('ul').appendChild(li)
   li.textContent = `${task}`;
   
   document.querySelector('form').addEventListener('reset',(e)=>{
    e.preventDefault();

    const remove = ul.lastChild
    if (remove){
        ul.removeChild(remove);
    }

})
})
