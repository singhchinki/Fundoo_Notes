import express from 'express';
import * as notesController from '../controllers/notes.controller';
import { NotesValidator } from '../validators/notes.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route To create new note
router.post('',userAuth,notesController.addNote);

//route To get all Notes 
router.get('',userAuth,notesController.getAllNotes);

// route To get a Note for the give id
 router.get('/:note_id',userAuth,notesController.getANote);

//route To update details of Notes
router.put('/:note_id',userAuth,notesController.updateNotes);

//route To delete a note
router.delete('/:note_id',userAuth,notesController.deleteNotes);

//route To archive note
router.put('/:noteid/isarchive' ,userAuth, notesController.archiveNotes);

//route To trash note
router.put('/:noteid/istrash' ,userAuth, notesController.trashNotes);

export default router;