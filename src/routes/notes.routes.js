import express from 'express';
import * as notesController from '../controllers/notes.controller';
import { NotesValidator } from '../validators/notes.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//To create new note
router.post('',userAuth,notesController.addNote);

//To get all Notes 
router.get('',userAuth,notesController.getAllNotes);

// //To get a Note for the give id
 router.get('/:noteid/getAnote',userAuth,notesController.getANote);

//To update details of Notes
router.put('/:noteid',userAuth,notesController.updateNotes);

//To delete a note
router.delete('/:noteid/delete',userAuth,notesController.deleteNotes);

//route To archive note
router.put('/:noteid/isarchive' ,userAuth, notesController.archiveNotes);

//route To trash note

router.put('/:noteid/istrash' ,userAuth, notesController.trashNotes);



export default router;