import HttpStatus from 'http-status-codes';
import * as notesService from '../services/notes.service';

/**
 * Controller to create a new notes
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const addNote = async (req, res, next) => {
    try {
        console.log("req.body", req.body)
        const data = await notesService.addNote(req.body);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Notes created successfully'
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to get all notes
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllNotes = async (req, res, next) => {
    try {
        const data = await notesService.getAllNotes(req.body);
        res.status(HttpStatus.ACCEPTED).json({
            code: HttpStatus.ACCEPTED,
            data: data,
            message: 'Get all Notes successfully'
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to get note
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */

export const getANote = async (req, res, next) => {
    try {
        const data = await notesService.getANote(req.params.noteid, req.body.UserId);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'Fetched Note Successfully'
        });
    }
    catch (error) {
        next(error);
    }
};

/**
* Controller to update Notes
* @param  {object} req - request object
* @param {object} res - response object
* @param {Function} next
*/
export const updateNotes = async (req, res, next) => {
    try {
        const data = await notesService.updateNotes(req.params.noteid, req.body);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'Updated Note Details Successfully'
        });
    }
    catch (error) {
        next(error);
    }
};

/**
* Controller to delete notes
* @param  {object} req - request object
* @param {object} res - response object
* @param {Function} next
*/
export const deleteNotes = async (req, res, next) => {
    try {
        const data = await notesService.deleteNotes(req.params.noteid, req.body);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data:data,
            message: 'Deleted Note Successfully'
        });
    }
    catch (error) {
        next(error);
    }
};

/**
* Controller to archive notes
* @param  {object} req - request object
* @param {object} res - response object
* @param {Function} next
*/
export const archiveNotes = async (req, res, next) => {
    try {
        const data = await notesService.archiveNotes(req.params.noteid, req.body);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data:data,
            message: 'Archived Successfully'
        });
    }
    catch (error) {
        next(error);
    }
};

/**
* Controller to trash notes
* @param  {object} req - request object
* @param {object} res - response object
* @param {Function} next
*/
export const trashNotes = async (req, res, next) => {
    try {
        const data = await notesService.trashNotes(req.params.noteid, req.body);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'Trash Note Successfully'
        });
    }
    catch (error) {
        next(error);
    }
};
/**
 * Controller to add label to note
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */

 export const addLabel = async (req, res, next) => {
    try {
        const data = await notesService.addLabel(req.params.noteid, req.body.LabelId);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'label added successfully'
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to delete label from note
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */

 export const removeLabel = async (req, res, next) => {
    try {
        const data = await notesService.removeLabel(req.params.noteid, req.body.LabelId);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'label removed successfully'
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to create a new notes
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
 export const Collaborator = async (req, res, next) => {
    try {
        const data = await notesService.Collaborator(req.params.noteid, req.body.collaborators);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Collaborator done successfully'
        });
    } catch (error) {
        next(error);
    }
};


/**
 * Controller to create a new notes
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
 export const removeCollaborator = async (req, res, next) => {
    try {
        const data = await notesService.removeCollaborator(req.params.noteid, req.body);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Collaborator remove successfully'
        });
    } catch (error) {
        next(error);
    }
};
