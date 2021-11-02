
export default function validater (obj){
    
    const { name , season, difficulty, duration, idCountry} = obj
    if(duration < 1){
    return  (false,  "duration has to be positive")
    }
   if(difficulty === "")
   return false, "select a difficulty"
   if( season ===  ""){
       return false, "select a season"
   }
   if(idCountry.length === 0)
   return false, "select a countrie"
   if (name ===  ""){
       return false, "name has to be a text"
   }
} 
