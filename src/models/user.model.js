import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    FirstName: {
      type: String,require:true
    },
    LastName: {
      type: String,require:true
    },
  
    
      Email_Id: {
        type:String,
        unique: true,
        require:true
    },
   
   
    Password: {type:String,require:true},
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
