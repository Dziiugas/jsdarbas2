document.querySelector('form').addEventListener('button',(e)=>{
    e.preventDefault();
        function shuffleGallery(){
            const images = Array.from(gallery.children);
            images.sort(() => Math.random() - 0.5);
            images.forEach((img)=> gallery.appendChild(img));
        
    }   
        return shuffleGallery 
})