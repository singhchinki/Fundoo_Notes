import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';

/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newUser = async (req, res, next) => {
  try {
    const data = await UserService.newUser(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User created successfully'
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
* Controller to check login credentials
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getLogin = async(req, res, next) => {
  try {
    console.log("user credential controller=====>" ,req.body)
    const data = await UserService.checkLogin(req.body);
    console.log("login Response in controller====>" ,data)
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Login sucessfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};
/** 
* Controller to check login credentials
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const forgetPassword = async(req, res, next) => {
  try {
    console.log("user credential controller=====>" ,req.body)
    const data = await UserService.forgetPassword(req.body);
    //console.log("login Response in controller====>" ,data)
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
     // data: data,
      message: 'Reset password URL sent sucessfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};

/** 
* Controller to check login credentials
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const resetPassword = async(req, res, next) => {
  try {
    console.log("user credential controller=====>" ,req.body)
    const data = await UserService.resetPassword(req.body);
    //console.log("login Response in controller====>" ,data)
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
     // data: data,
      message: 'find user and password update sucessfully--!'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};
