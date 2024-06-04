import storage from "./storage.js";
import list from "./list.js";






export default function(){

    const storage1 = new storage();
    const list1 = new list();

    

    let pelis_stored = storage1.getdata();
    let pelis_viewed = document.querySelectorAll("#content .peli-item")

    console.log("prueba")

    pelis_viewed.forEach(peli=>{
      
        let delete_btn = peli.querySelector('.delete')

        delete_btn.onclick = function(){
           const peli_id = this.getAttribute('data-id');

        //    console.log(peli_id);


            const new_pelis_stored = pelis_stored.filter((peli)=> peli.id !==parseInt(peli_id));
            

            storage1.save(new_pelis_stored)

            list1.show(new_pelis_stored);



        }
    })
    
}