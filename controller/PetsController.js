const pets = require('../Pets.json')
const breeds = require('../Breeds.json')
const express = require('express')



class Pets{

    static getPetsData(req,res){
        try{
            res.status(200).json(pets)
        }
        catch(e){
            res.status(404).json(`No Member yet`)
        }
    }

    static getAllData(req,res){
        try{
            const result = []
            pets.forEach((pet)=>{
                const breed = breeds.filter((val)=>val['id'] == pet['id'] )
                pet['breed'] = breed[0]["breed"]
                result.push(pet)
            })
            return res.status(200).json(result)
        }catch(e){
            res.status(400).json({msg : `error has been occured !`})
        }
        
    }

    static getPetById(req,res){
        const found = pets.some(pet=> pet.id == req.params.id)
        try{
            return res.status(200).json(pets.filter(pet=> pet["id"] === req.params.id))
        }catch(e){
            res.status(400).json({msg : `No id founded`})
        }
        
    }

    static createNewMember(req,res){
       const newMember = {
            "id"    :"0006",
            "name"  :"Devil",
            "type"  : "Cat",
            "age"   : 5,
            "color" : "black"
        }
        try{
        pets.push(newMember)
        res.status(200).json(pets)
        }catch(e){
            res.status(400).json(`new Member is not defined`)
        }
        
    }

    static delMemberById (req,res){
        
        try{
            const petById = pets.findIndex((pet)=>pet.id == req.params.id)
            delete pets[petById]
            res.status(200).json(pets.filter(pet => pet))   
        }
        catch(e){
            res.status(400).json({msg : `Id is not found`})
        }
       
    }

    static updateMember(req, res){
        let newUpdate = {
            "name" : "baileyM",
            "age" : 8
        }
        try{    
            const findIndex = pets.findIndex(pet => pet.id == req.params.id)
            pets[findIndex].name = newUpdate.name ? newUpdate.name : pets[findIndex].name
            pets[findIndex].age = newUpdate.name ? newUpdate.age : pets[findIndex].age
            pets[findIndex].type = newUpdate.type ? newUpdate.type : pets[findIndex].type
            pets[findIndex].color = newUpdate.color ? newUpdate.color : pets[findIndex].color
            res.status(200).json(pets[findIndex])
        }catch(e){
            res.status(400).json(`Error has been occured`)
        }
    }

    static createNewMemberBody(req,res){
        pets.push(req.body)
        return res.status(200).json(pets)
    }

    static updateMemberByBody(req,res){
        const {id =null ,name=null,type=null,age=null,color=null}= req.body
      
        try{
            const findIndex = pets.findIndex(pet => pet.id == req.params.id)
            id ? pets[findIndex].id = id : pets[findIndex].id
            name ? pets[findIndex].name = name : pets[findIndex].name
            type ? pets[findIndex].type = type : pets[findIndex].type
            age ? pets[findIndex].age = age : pets[findIndex].age
            color ? pets[findIndex].color = color : pets[findIndex].color
            res.status(200).json(pets)
        }
        catch(e){
            res.status(400).json("Error has occured")
        }
      

        
    }
}
module.exports = Pets