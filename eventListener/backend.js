let checkboxElems = document.querySelectorAll(".brand");
console.log(checkboxElems);
for (let checkbox of checkboxElems) {
    
    checkbox.addEventListener("change", function() {
        if (this.checked) {
            console.log(`Checkbox ${this.name} zaznaczony!`);
        } else {
            console.log(`Checkbox ${this.name} odznaczony!`);
        }
        

    if(this.name == "audi"){
        if(this.checked){
             const audiDir = "./AUDI";
                const gallery = document.getElementById('gallery');
                const images = [
                '1.webp',
                '2.webp',
                '3.webp',
                '4.webp',
                '5.webp',
                '6.webp'
                ];

                images.forEach(image => {
                const img = document.createElement('img');
                img.src = `${audiDir}/${image}`;
                img.alt = 'Gallery Image';
                img.classList.add('gallery-img');
                gallery.appendChild(img);
                });
        } else {

        }
    }

    if(this.name == "mercedes"){
        if(this.checked){
            const MercedesDir = "eventListener\\Mercedes";
            if(MercedesDir.length){
               console.log(MercedesDir.length);
            }
        } else {

        }
    }

    if(this.name == "bmw"){
        if(this.checked){
            const bmwDir = "eventListener\\BMW";
            if(bmwDir.length){
               console.log(bmwDir.length);
            }
        } else {

        }
    }
    });
}

