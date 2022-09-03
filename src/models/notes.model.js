import { Schema, model } from 'mongoose';

const noteSchema = new Schema(
  {
    Title: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    Colour: {
      type: String
    },
    IsArchived: {
        type: Boolean
    },
    userId: {
        type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('Notes', noteSchema);