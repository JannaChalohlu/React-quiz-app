import {Schema, model} from 'mongoose'

const questionSchema = new Schema(
    {
        question: {
            type: String
        },
        options: [
            {type: String}
        ],
        correctOption: {
            type: Number
        },
        points: {
            type: Number
        }
    }
);

const Question = model("Question", questionSchema)

export default Question;