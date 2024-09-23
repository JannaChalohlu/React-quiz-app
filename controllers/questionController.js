import Question from '../models/questionModel.js'

export const createQuestion = async (req, res) =>{
    const question = await Question.create(req.body);
    res.status(200).json({msg: `Question has successfully created`})
}

export const getAll = async (req, res) => {
    const questions = await Question.find({})
    res.status(200).json(questions)
}