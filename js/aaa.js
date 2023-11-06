for(let i=0;i<=16;i++){
    const div = document.createElement('div');
    div.style.height="300px";
    div.style.width="300px";
    div.style.backgroundColor="tomato";
    document.querySelector('.block').appendChild(div);
}

const randomColor = ()=> {
    red = Math.random() * 256
    green = Math.random() * 256
    blue = Math.random() * 256
    return `rgb(${red}, ${green}, ${blue})`;
}

for(const div of document.querySelectorAll('.block div')){
    div.addEventListener('click',(e)=>{
        e.target.style.backgroundColor = randomColor(); //randomColor()
    })
}