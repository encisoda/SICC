import User from "../models/User";
import Role from "../models/Role";

export const createUser = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;

    const rolesFound = await Role.find({ name: { $in: roles } });

    // creating a new User
    const user = new User({
      username,
      email,
      password,
      roles: rolesFound.map((role) => role._id),
    });

    // encrypting password
    user.password = await User.encryptPassword(user.password);

    // saving the new user
    const savedUser = await user.save();

    return res.status(200).json({
      _id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email,
      roles: savedUser.roles,
    });
  } catch (error) {
    console.error(error);
  }
}

export const getUsers = async (req, res) => {
  const users = await User.find()
  return res.json(users)
}

export const getUser = async (req, res) => {
  const user = await User.findById(req.params.userId)
  return res.status(200).json(user)
}

export const updateUserById = async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body,{
    new: true
  })
  return res.status(204).json(updatedUser)
}

export const deleteUserById = async (req, res) => {
  const {userId} = req.params;
  await User.findByIdAndDelete(userId)
  return res.status(204).json()
}
