import express from 'express';
import * as labelController from '../controllers/label.controller';
import { labelValidator } from '../validators/label.validator';
import { labelAuth,userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to add label for the note
router.post('', labelValidator, labelAuth, labelController.addLabel);
//To get all label 
router.get('',userAuth, labelController.getAllLabel);

// //To get a label for the give id
 router.get('/:_id',userAuth,labelController.getALabel);

//route to update the label
router.put('/:_id', labelAuth, labelController.updateLabel);

//route to delete label
router.delete('/:_id', userAuth, labelController.deleteLabel);

export default router;