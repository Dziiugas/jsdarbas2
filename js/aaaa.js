document.addEventListener("DOMContentLoaded", function () {
    const imagesli = document.querySelector(".gallery");
    const revealButton = document.querySelector(".rodyti");
    revealButton.addEventListener("click", function () {
      revealButton.style.display = "show";
      mixButton.style.display = "block";
      createImages(imagesli);
    });
  
    const mixButton = document.querySelector(".mix");
    mixButton.style.display = "show";
    mixButton.addEventListener("click", function () {
      mix(imagesli);
    });
  });
  
  function createImages(container) {
    container.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
      const li = document.createElement("li");
      const img = document.createElement("img");
      img.src = `img/image${i}.jpg`;
      img.alt = `Image ${i}`;
      img.addEventListener("dblclick", function () {
        img.src = "img/vienas.jpg";
      });
  
      li.appendChild(img);
      container.appendChild(li);
    }
  }
  
  function mix(container) {
    for (let i = container.children.length; i >= 0; i--) {
      container.appendChild(container.children[(Math.random() * i) | 0]);
    }
  }