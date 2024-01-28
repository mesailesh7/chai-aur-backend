import { asyncHandler } from "../utils/asyncHandler.js";
const registerUser = asyncHandler(async (req, res, error, next) => {
  // get user details from front end
  // from form or json data can be fetched from body but for url its different
  const { fullName, email, username, password } = req.body;
  console.log("email", email);
  // validation-- not empty
  // check if user already exists:username and email
  // check for images, check for avatar
  // upload them to cloudinary,avatar
  // create user object - create entry in db
  // remove password and refresh token field from response
  // check for user creation
  // return res
});

export { registerUser };
