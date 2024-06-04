import deleteoflist from "./delete.js";
import edit from "./edit.js";
export default class list{
constructor(){
    this.content=document.querySelector("#content")
}

pelitemplate(peli){

    return `

    <article class="peli-item" id ="peli-${peli.id}">
                <h3 class="title">
                    ${peli.title}
                </h3>
                <p class="descripcion">${peli.description}</p>

                <button class="edit" data-id="${peli.id}"> editar</button>
                <button class="delete"  data-id="${peli.id}">borrar</button>
            </article>
    
    `

}




 show(pelis){

    this.content.innerHTML="";

    pelis.forEach(peli =>{

        this.content.innerHTML += this.pelitemplate(peli);

    });

    deleteoflist();

    edit();





 }
}