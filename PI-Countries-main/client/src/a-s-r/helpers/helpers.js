 export  function  compareAz(a, b)  {
    if (a.name > b.name) {
        return 1;
       
    }
    if (a.name < b.name) {
        return -1;
    }
    return 0;
}
export function compareZa( a, b){
    if (a.name > b.name) {
        return -1;
    }
    if (a.name < b.name) {
        return 1;
    }
    return 0;
}
export function MayPoblacion (a,b){
    if (a.poblation > b.poblation){
        return -1
    }
    if (a.poblation < b.poblation){
        return 1
    }
    return 0
}

export function MenPoblacion (a,b){
    if (a.poblation > b.poblation){
        return 1
       }
       if (a.poblation < b.poblation){
           return -1
    }
    return 0
   
}
