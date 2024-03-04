import User from "../models/User.js";
import HttpError from "../helpers/HttpError.js";

export const findUser = (filter) => User.findOne(filter);

export const findUserById = (id) => User.findById(id);

export const updateUser = async (userId, updateData) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
    });

    if (!updatedUser) {
      throw HttpError(404, "User not found");
    }

    return updatedUser;
  } catch (error) {
    throw HttpError(500, "Failed to update user");
  }
};
