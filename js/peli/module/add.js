import storage from "./storage.js";
import list from "./list.js";

export default class Add {
    constructor() {

        this.storage= new storage();
        this.list= new list()

       console.log(this.storage.getdata());


        this.title = document.querySelector("#title");
        this.description = document.querySelector("#description");
        this.save_btn = document.querySelector("#save");
       
    }

    pelisave() {
        this.save_btn.onclick =(e) => {
            e.preventDefault();

            let pelis= this.storage.getdata();
            let lastid = this.storage.getlastid();

            // console.log(pelis,lastid);


            let title = this.title.value;
            let description = this.description.value;

            // pequena validacion 

            if(title !="" || description !=""){
                

            
                    // crea objeto a guardar 
                    let peli={
                        id:lastid++,
                        title,
                        description
                    }
    
                    pelis.push(peli);

                   
            
            

                //  guardar en el localstorage

                this.storage.save(pelis)

                // this.list.addtolist(peli,pelis)

                this.list.show(pelis)




            }else{
                alert("introduci bien los datos ")
            }
            return false;
        };
    }
}




// const save_btn = document.querySelector("#save");

// function pelisave() {
//     save_btn.addEventListener("click", (e) => {
//         e.preventDefault();
//         alert("¡Acabas de enviar el formulario!");
//         return false;
//     });
// }

// pelisave();
