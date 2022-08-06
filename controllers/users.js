const User = require("../models/users");
const UserProfile = require("../models/userProfiles");

exports.createuser = async (req, res, next) => {
  try {
    const userData = req.body.userDetails;

    const savedUser = await User.create({
      firstName: userData.firstName,
      lastName: userData.lastName,
    });
    return res.status(200).json({ user: savedUser });
  } catch (error) {
    next(error);
  }
};

exports.createuserProfile = async (req, res, next) => {
  try {
    const userData = req.body.userDetails;

    const savedUserProfile = await UserProfile.create({
      role: userData.role,
      userId: userData._id,
      hospitalId: userData.hospitalId,
    });
    return res.status(200).json({ user: savedUserProfile });
  } catch (error) {
    next(error);
  }
};

exports.getuserProfiles = async (req, res, next) => {
  try {
    let userProfiles = await UserProfile.findAll({
      include: ["user", "hospital"],
    });
    return res.status(200).json({ user: userProfiles });
  } catch (error) {
    next(error);
  }
};
