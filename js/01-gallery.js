import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const head = document.querySelector("head");

const link = document.createElement("link");

link.href = "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js";

head.append(link);

const biblioteka = document.createElement("script");

biblioteka.src ="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js";

gallery.after(biblioteka);


  function createImages(){
    for(let i = 0; i < galleryItems.length; i++){
        const divTag = document.createElement("div");
        
        const linkTag = document.createElement("a");

         const imageTag = document.createElement("img");
        
        divTag.classList.add("gallery_item");

        linkTag.classList.add("gallery__link");
        //linkTag.href = galleryItems[i].original;
        
        imageTag.classList.add("gallery__image");
        imageTag.src = galleryItems[i].preview;
        imageTag.setAttribute("data-source", galleryItems[i].original);
        imageTag.alt = galleryItems[i].description;
        
        gallery.append(divTag);
        divTag.append(linkTag);
        linkTag.append(imageTag);
  }
  
}
createImages();

function selectImage(event){

  const selectedImage = event.target.dataset.source;
  const lightbox = basicLightbox.create(`<img src="${selectedImage}">`);
      lightbox.show();

}

gallery.addEventListener("click", selectImage);

