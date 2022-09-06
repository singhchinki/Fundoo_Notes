import jwt  from 'jsonwebtoken';
import Notes from '../models/notes.model';


//create new note
export const addNote = async (body) => {
    const data = await Notes.create(body);
    return data;
};

//get all notes
export const getAllNotes = async (body) => {
    const data = await Notes.find();
    return data;

};

//get single note
export const getANote = async (id) => {
    const data = await Notes.findById(id);
    return data;
};
//update single note
export const updateNotes = async (_id, body) => {
    const data = await Notes.findByIdAndUpdate(
        { _id
        },
        body,{ new: true }
    );
    return data;
};

//delete single user
export const deleteNotes = async (id) => {
    await Notes.findByIdAndDelete(id);
    return ' ';
};