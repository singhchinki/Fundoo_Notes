import { string } from '@hapi/joi';
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
    LabelId: [{
      type: String,
  }],
  collaborators: [{
    type: String,
  }],
    
    UserId: { 
      type: String
      
    },
    IsArchived: {
      type: Boolean,
      default: false
  },
  IsTrashed: {
    type: Boolean,
    default: false
  }
  },
  {
    timestamps: true
  }
);

export default model('Notes', noteSchema);