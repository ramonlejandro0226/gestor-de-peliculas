export default class storage{
constructor(params) {
    this.id=1;
    
}

getdata(){
 let pelis = JSON.parse(localStorage.getItem('pelis'))

  if(!pelis || pelis.length <1){
    pelis= [
        {
            id: 0,
            title : "desarrollo",
            description :" ramon"
        }
    ]
    
    this.id= 1;

  } else{
   
    this.id= pelis[pelis.length -1].id + 1;
    
  }
  return pelis
}

getlastid(){
    return this.id;
}

save(data){
    localStorage.setItem('pelis',JSON.stringify(data));
}

}