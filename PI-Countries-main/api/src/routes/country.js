const axios = require('axios');
const router = ('.');
const {Country, Activity} = require ('../db')
const server = require('express').Router()

const getApiInfo = async () =>{
    const { data } = await axios('https://restcountries.com/v3/all');
    const api = await data.map(country => { 
        
        return {
           id: country.cca3,
           name: country.name.common,
           flag: country.flags[0],
           continent: country.continents[0],
           capital: country.capital?.[0] ,
        //    subregion: country.subregion, 
           area: country.area,
           poblation: country.population,
        }
    });
    const result = await Country.bulkCreate(api)
    return result;
}
const getDbInfo = async() => { 
    return await Country.findAll({
        include: {
            model: Activity,
            attribute: ['name', 'difficulty', 'duration', 'season'],
            through: {
                attributes: []
            }
        }
    })
}


server.get("/countries/:id", async function (req, res){
    const id = req.params.id.toUpperCase()
    console.log(id)
    const allCountries = await getDbInfo();
    if ( id ) {
        const idCountries = allCountries.filter( i => i.id === id )
        idCountries.length?
        res.status(200).send(idCountries) :
        res.status(404).send('id no valido')
    }
})

server.get("/countries", async function (req, res){
    const {name} = req.query;
    let countries;
    const countryDB = await Country.count(); //aqui cuento los registros de countries
    countries = countryDB === 0 ?
    await getApiInfo() :// asi que si la db esta bacia llamo a la api
    await getDbInfo() // si no saco de la bd 
if ( name ) {
    const byName = countries.filter(n => n.name.toLowerCase().includes(name.toLowerCase()));
    byName.length ? 
    res.status(200).send(byName) :
    res.status(404).send('no se encontro ningun pais')
}  else {
   res.status(200).send(countries)  
}
})
server.post("/activity", async function (req,res){
    const {
        name,
        season,
        duration,
        difficulty, 
        idCountry
    } = req.body;
    // console.log(req.body)
    try{
        const actCreada = await Activity.create({
            name,
            season,
            duration,
            difficulty
        })
        console.log(actCreada)
        if(idCountry){
         actCreada.addCountry(idCountry)
        }
        res.send('actividad creada') 
        
    }
    catch(err){
        console.log('no se creo la actividad')
    }
})

module.exports = server