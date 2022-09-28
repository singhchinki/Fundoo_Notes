import Label from '../models/label.model';
import { client } from '../config/redis';

export const addLabel = async (body) => {
    const data = await Label.create(body);
    return data;
};

export const getAllLabel = async (userdetails) => {
    const data = await Label.find({ UserId: userdetails.UserId });
    if (data) {
        await client.set('getAllData', JSON.stringify(data));
        return data;
    }
};

export const getALabel = async (_id, UserId) => {
    const data = await Label.findById({ _id: _id, UserId: UserId });
    return data;
};


export const updateLabel = async (_id, body) => {
    const data = await Label.findByIdAndUpdate(
        {_id: _id},
         body, {new: true})
    return data;
};

export const deleteLabel = async (_id) => {
    await Label.findOneAndDelete(_id)
};