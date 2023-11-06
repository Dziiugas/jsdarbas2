document.querySelector('#vip').addEventListener('click', ()=>{
    alert("paspaudziau")
})

document.querySelector(".adsss").onclick = ()=>{
    alert("kitas")
}
for(const article of document.querySelectorAll('article p')){
    article.addEventListener('click',(e)=>{
        e.target.style.backgroundColor="aqua";
    })
    
}
for(const article of document.querySelectorAll('article ')){
    article.addEventListener('click',()=>{
        article.style.fontSize="2em";
    })
}
document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault(); //Pakeicia standartine formos elgsena
    console.log(e.target);
    const bgColor = (document.querySelector('input').value)
    document.querySelector('body').style.backgroundColor = bgColor
})

//paspaudus ant pastraipos teksto, srifto dydis padideja du kartus


//sukurti todo list aplikacija
//Vartojojas iveda i formosinput lauka darba pavadinima
//paspaudzia mygtuka prideti
//ivesti darbas pridedamas i ul lista
//kai vartotojas paspaudzia mygtuka pasalinti, pasalinimas paskutinis darbas, su li
//elementu
//darbo sukurimo metu i ul sukuriamas li. o i li idedamas darba aprasantis tektas