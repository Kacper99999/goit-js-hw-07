import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector(".gallery");

const biblioteka = document.createElement("script");

biblioteka.src ="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js";

gallery.after(biblioteka);


  function createImages(){
    for(let i = 0; i < galleryItems.length; i++){
      //Create div elements-------------------------------
        const divTag = document.createElement("div");
        divTag.classList.add("gallery_item");

        //Create link elements------------------------------
        const linkTag = document.createElement("a");
        linkTag.classList.add("gallery__link");
        linkTag.href = galleryItems[i].original;

        //Create img elements------------------------------
        const imageTag = document.createElement("img");
        imageTag.classList.add("gallery__image");
        imageTag.src = galleryItems[i].preview;
        imageTag.setAttribute("data-source", galleryItems[i].original);
        imageTag.alt = galleryItems[i].description;

        //Including HTML---------------------------------------------------
        gallery.append(divTag);
        divTag.append(linkTag);
        linkTag.append(imageTag);
  }
  
}

function selectImage(event){
  event.preventDefault()

  if(event.target.nodeName !== "IMG"){
    return
  }
  
  const selectedImage = event.target.dataset.source;
  const lightbox = basicLightbox.create(`<img src="${selectedImage}">`);
  
  lightbox.show();
}

createImages();

gallery.addEventListener("click", selectImage);