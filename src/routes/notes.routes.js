import express from 'express';
import * as notesController from '../controllers/notes.controller';
import { NotesValidator } from '../validators/notes.validator';
import { userAuth } from '../middlewares/auth.middleware';
import { redisCheck } from '../middlewares/redis.middleware';

const router = express.Router();

//To create new note
router.post('',userAuth,notesController.addNote);

//To get all Notes 
router.get('',userAuth,redisCheck, notesController.getAllNotes);

// //To get a Note for the give id
 router.get('/:noteid',userAuth,notesController.getANote);

//To update details of Notes
router.put('/:noteid',userAuth,notesController.updateNotes);

//To delete a note
router.delete('/:noteid',userAuth,notesController.deleteNotes);

//route To archive note
router.put('/:noteid/isarchive' ,userAuth, notesController.archiveNotes);

//route To trash note
router.put('/:noteid/istrash' ,userAuth, notesController.trashNotes);

//route To addLabel
router.put('/:noteid/addLabel', notesController.addLabel);

//route to remove label from note
router.delete('/:noteid/removeLabel', notesController.removeLabel);

//route to Collaborator
router.post('/:noteid/addPeople', notesController.Collaborator);

//route to remove Collaborator
router.delete('/:noteid/removePeople', notesController.removeCollaborator);


export default router;