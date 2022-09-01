import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//create new user
export const newUser = async (body) => {
  const SearchData = await User.findOne({ Email_Id: body.Email_Id });
  if (SearchData != null) {
    throw new Error("User is already Exist")
  } else {
    const saltRounds = 10;
    console.log("user details in service=====> ", body)
    console.log("user Password in service=====> ", body.Password)

    const hashPassword = bcrypt.hashSync(body.Password, saltRounds);
    console.log("Hash Password in service=====> ", hashPassword)
    body.Password = hashPassword
    console.log("user details in after password hashing=====> ", body)
    const data = await User.create(body);
    return data;
  }
};
//Checks whether login details are valid
export const checkLogin = async (userdetails) => {
  const data = await User.findOne({ Email_Id: userdetails.Email_Id })
  if (data != null) {
    console.log("user credential service======>", userdetails)
    console.log("user Email ======>", userdetails.Email_Id)
  
  const checkPwdMatch = bcrypt.compareSync(userdetails.Password, data.Password); // true
  console.log("user deatails", checkPwdMatch)
  // console.log("Login Response ========>", data)
  if (checkPwdMatch) {
    var token = jwt.sign({ FirstName:data.FirstName,LastName:data.LastName,Email_Id:data.Email_Id},process.env.SECRET_KEY);
    return token;
  } else {
    throw new Error("Invalid Password");
  }
}else {
    throw new Error("Invalid Email_Id")
  }

};
