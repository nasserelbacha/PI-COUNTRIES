
export default function validater (obj, setError, err){
    const objKey = {
        errDuration : false
    }
   let { name , season, difficulty, duration, idCountry} = obj

    if(idCountry.length === 0)
       return  "select a countrie"
    if (name ===  ""){
      return  "name has to be a full"
    }
    if( season ===  ""){
     return  "select a season"
    }
    if(difficulty === "")
   return   "select a difficulty"     
if(duration === null){
    // console.log(200)
    // objKey.errDuration = true
    return  "full duration"
}
// console.log(objKey) 
// return objKey

} 
