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

        } else {

        }
    }

    if(this.name == "mercedes"){
        if(this.checked){

        } else {

        }
    }

    if(this.name == "bmw"){
        if(this.checked){

        } else {

        }
    }
    });
}

