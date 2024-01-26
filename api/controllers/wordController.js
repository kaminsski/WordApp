const { WordModel } = require("../models/Word");

const getWord = async(req,res) =>{
    try {
        const wordId = req.params.id
        const word = await WordModel.findById(wordId)
        if(word){
            res.json({
                word
            })
        }
    } catch (error) {
        
    }
}

const postWord = async(req,res) =>{
    try {
        const {turkish,english,sentence,userId} = req.body
        const word = await WordModel.create({
            english,
            turkish,
            sentence,
            user:userId
        })
        if(word){
            res.json({
                word
            })
        }
    } catch (error) {
        console.log(error);
    }
}

const getAllWords = async(req,res) =>{
    try {
        const words = await WordModel.find()
        if(words){
            res.json({
                words
            })
        }
    } catch (error) {
        
    }
}

const getUserWords = async(req,res) =>{
    try {
        const userId = req.params.id
        const words = await WordModel.find({ user: userId });
        if(words){
            res.json({
                words
            })
        }
    } catch (error) {
        console.log(error);
    }
}

const deleteWord = async(req,res) =>{
    try {
        const wordId = req.params.id
        const deleted = await WordModel.findByIdAndDelete(
            wordId
        )
        if(deleted){
            res.json({
                deleted
            })
        }
    } catch (error) {
        console.log(error);
    }
}
module.exports={
    getAllWords,
    getWord,
    postWord,
    deleteWord,
    getUserWords
}