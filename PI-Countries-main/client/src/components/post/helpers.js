
export default function validater (obj, setError, err){
   let { name , season, difficulty, duration, idCountry} = obj
   console.log(name)
   if (idCountry.length === 0){
      return "select a countrie"
   }
    if (name ===  ""){
      return  "name has to be a full"
    }
    if( season ===  ""){
     return  "select a season"
    }
    if(difficulty === "")
   return   "select a difficulty"     
if(duration < 1){
    return  "duration has to be positive"
}

} 
