import HttpStatus from 'http-status-codes';
import * as labelService from '../services/label.service';

/**
 * Controller to create a label
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const addLabel = async (req, res, next) => {
  try {
    const data = await labelService.addLabel(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'label User created successfully'
    });
  } catch (error) {
    //next(error);
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};

/**
 * Controller to create a label
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllLabel = async (req, res, next) => {
    try {
        const data = await labelService.getAllLabel(req.body);
        res.status(HttpStatus.ACCEPTED).json({
            code: HttpStatus.ACCEPTED,
            data: data,
            message: 'Get all label'
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

export const getALabel = async (req, res, next) => {
    try {
        const data = await labelService.getALabel(req.params._id, req.body.UserId);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'Label Note Successfully'
        });
    }
    catch (error) {
        next(error);
    }
};

/** 
* Controller to update label
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateLabel = async (req, res, next) => {
    try {
        const data = await labelService.updateLabel(req.params._id, req.body);
        res.status(HttpStatus.ACCEPTED).json({
            code: HttpStatus.ACCEPTED,
            data: data,
            message: 'Label updated successfully'
        });
    } catch (error) {
        next(error);
    }
};
/** 
* Controller to delete label
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deleteLabel = async (req, res, next) => {
    try {
        const data = await labelService.deleteLabel(req.params._id);
        res.status(HttpStatus.ACCEPTED).json({
            code: HttpStatus.ACCEPTED,
            data: data,
            message: 'Label deleted successfully'
        });
    } catch (error) {
        next(error);
    }
};

