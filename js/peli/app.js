import Add from "./module/add.js";
import list from "./module/list.js";
import storage from "./module/storage.js";
 // Assuming 'Add' is the correct name for the class in the 'add' module

export default class App { // Capitalized class name convention
    constructor() {
        this.add = new Add();
        this.list=new list();
        this.storage = new storage();
        // Instantiate the 'Add' class from the imported module
    }

    load() {
        this.add.pelisave();

        const pelis = this.storage.getdata();


        this.list.show(pelis)

      
    }
}

export { Add }; // Named export for the Add class


