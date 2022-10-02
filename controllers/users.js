import Users from "../models/Users.js";

// update a user
export const updateUser = async (req, res) => {
  // checking params id and user id
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await Users.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      console.log(err);
    }
  } else {
    return res.status(403).status("You only can update your profile");
  }
};

// Delete a user
export const deleteUser = async (req, res) => {
  // check params id and userid
  if (req.params.id === req.user.id) {
    try {
      await Users.findByIdAndDelete(req.params.id);
      res.status(200).json("Account deleted");
    } catch (err) {
      console.log(err);
    }
  } else {
    return res.status(200).json("You only can update your account");
  }
};

// get all users
export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await Users.find();
    res.status(200).json(allUsers);
  } catch (err) {
    console.log(err);
  }
};
// Get a User
export const getUser = async (req, res) => {
    try {
      const user = await Users.findById(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
    }
  };
