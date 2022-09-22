import { id } from '@hapi/joi/lib/base';
import jwt from 'jsonwebtoken';
import Notes from '../models/notes.model';
import { client } from '../config/redis';


//create new note
export const addNote = async (body) => {
    const data = await Notes.create(body);
    if (data) {
        await client.del('getAllData');
        return data;
    }

};

//get all notes
export const getAllNotes = async (userdetails) => {
    const data = await Notes.find({ UserId: userdetails.UserId });
    if (data) {
        await client.set('getAllData', JSON.stringify(data));
        return data;
    }


};

//get single note
export const getANote = async (id, UserId) => {
    const data = await Notes.findById({ _id: id, UserId: UserId });
    return data;
};
//update single note
export const updateNotes = async (_id, body) => {
    const data = await Notes.findByIdAndUpdate(
        {
            _id: _id, UserId: body.UserId
        },
        { Title: body.Title, Description: body.Description },
        { new: true }
    );
    return data;
};

//delete single user
export const deleteNotes = async (id, body) => {
    await Notes.findByIdAndDelete({ _id: id, UserId: body.UserId });
    return ' ';
};

//archive single note
export const archiveNotes = async (id, body) => {
    console.log("check body -- body", body)
    const data = await Notes.findByIdAndUpdate(
        {
            _id: id, UserId: body.UserId
        },
        { IsArchived: true },
        { new: true },

    );
    console.log("return data--------------->", data);
    return data;

};

//trash single user
export const trashNotes = async (_id, body) => {
    const data = await Notes.findByIdAndUpdate(
        {
            _id: _id, UserId: body.UserId
        },
        { IsTrashed: true },
        { new: true }
    );
    console.log("return  trash data--------------->", data);
    return data;
};