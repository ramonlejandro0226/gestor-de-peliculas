import storage from "./storage.js";
import list from "./list.js";


export default function(){

    const storage1 = new storage();
    const list1 = new list();


    let pelis_stored = storage1.getdata();
    let pelis_viewed = document.querySelectorAll(".peli-item")


    pelis_viewed.forEach(peli =>{
         let edit_btn = peli.querySelector(".edit");

         edit_btn.onclick= function(){

            const id = this.getAttribute("data-id")

            edit_btn.remove();
            peli.querySelector(".delete").remove();

            let peli_id_html = `
            <div class="edit_form">
                <hr>
                <h3 class="title">Editar película</h3>
                <form>
                    <input type="text" class="edited_title" value="${peli.querySelector(".title").innerHTML}"/>
                    <textarea class="edited_description">${peli.querySelector(".description").innerHTML}</textarea>
                    <input type="submit" class="update" value="Actualizar"/>
                </form>
            </div>`;


            peli.innerHTML += peli_id_html;

           
         }
    })

}