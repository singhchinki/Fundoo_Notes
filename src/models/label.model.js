import { string } from '@hapi/joi';
import { Schema, model } from 'mongoose';

const labelSchema = new Schema(
    {
        label: { type: String, 
            required: true 
        },
         UserId: { type: String }
      },
      {
        timestamps: true,
      }
    );

export default model('Label', labelSchema);