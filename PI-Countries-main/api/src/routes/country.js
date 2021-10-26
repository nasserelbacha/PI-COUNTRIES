const axios = require('axios');
const router = ('.');
const {Country, Activity} = require ('../db')
const server = require('express').Router()


server.get("/countries/:id", async function (req, res){
    const id = req.params.id.toUpperCase()
    if (id){
        try{
            const resulApi = await axios.get("https://restcountries.com/v3/all");
            const result = resulApi.data.filter(e => e.cca3 == id)
            console.log(result)
            result.length === 0 ? res.send('id no encontrado'): res.send(result)

        }
        catch(err){
            res.status(400).send('no se encontro el id')
        }
    }
    else {
        try{
            const resultDb = await Country.findbyPk(id, {include: [Activity]});
            
            res.send(resultDb)
        }
        catch(err){
            res.status(400).send('id no encontrado')
        }
    }
})

server.get("/countries", async function (req, res){
    const {name} = req.query;
    var ax = await axios('https://restcountries.com/v3/all');
    var paises = ax.data;
    var pai = paises.map((r) => {
        return{
            name : r.name.common,
            continent : r.subregion,
            imagen: r.flags[0]
        }
    })
    // console.log(pai)
    var dbCountry = await Country.findAll({include : [Activity]})
    var dd = [...dbCountry, ...pai]
    if(name){
        const list = dd.filter(e => e.name.toUpperCase().includes(name.toUpperCase()))
        try{
            if(list.length){
                res.json(list)
            } 
        }
        catch (err){
            res.status(400).send('no existe el nombre')
        }
    }
    else {
        res.status(200).json(dd)
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