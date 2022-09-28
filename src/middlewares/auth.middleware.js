import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';

/**
 * Middleware to authenticate if user has a valid Authorization token
 * Authorization: Bearer <token>
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export const userAuth = async (req, res, next) => {
  let bearerToken = req.header('Authorization');
  if (!bearerToken)
    throw {
      code: HttpStatus.BAD_REQUEST,
      message: 'Authorization token is required'
    };
  bearerToken = bearerToken.split(' ')[1];
  await jwt.verify(bearerToken, process.env.SECRET_kEY, function (err, data) {
    if (err) {
      res.status(HttpStatus.UNAUTHORIZED).json({
        code: HttpStatus.UNAUTHORIZED,
        message: 'Authorization token is Incorrect'
      });
    } else {
      console.log("data------------------->", data);
      req.body.UserId = data.Email_Id

      next();
    }
  });
};

/**
* Middleware to authenticate if user has a valid Authorization token
* Authorization: Bearer <token>
*
* @param {Object} req
* @param {Object} res
* @param {Function} next
*/
export const resetAuth = async (req, res, next) => {
  let bearerToken = req.params.token;
  if (!bearerToken)
    throw {
      code: HttpStatus.BAD_REQUEST,
      message: 'Authorization token is required'
    };
  await jwt.verify(bearerToken, process.env.NEW_SECRET_KEY, function (err, data) {
    if (err) {
      res.status(HttpStatus.UNAUTHORIZED).json({
        code: HttpStatus.UNAUTHORIZED,
        message: 'Authorization token is Incorrect'
      });
    } else {
      console.log("data------------------->", data);
      req.body.Email_Id = data.Email_Id

      next();
    }
  });
};



/**
* Middleware to authenticate if user has a valid Authorization token
* Authorization: Bearer <token>
*
* @param {Object} req
* @param {Object} res
* @param {Function} next
*/

export const labelAuth = async (req, res, next) => {
  let bearerToken = req.header('Authorization');
  if (!bearerToken)
    throw {
      code: HttpStatus.BAD_REQUEST,
      message: 'Authorization token is required'
    };
  bearerToken = bearerToken.split(' ')[1];
  await jwt.verify(bearerToken, process.env.SECRET_kEY, function (err, data) {
    if (err) {
      res.status(HttpStatus.UNAUTHORIZED).json({
        code: HttpStatus.UNAUTHORIZED,
        message: 'Authorization token is Incorrect'
      });
    } else {
      console.log("data------------------->", data);
      req.body.UserId = data.Email_Id

      next();
    }
  });
};

