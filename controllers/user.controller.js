import User from '../models/User.js'
import { CreateError } from '../utils/error.js'
import { CreateSuccess } from '../utils/success.js'

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({})
    return next(CreateSuccess(200, 'Users Received', users))
  } catch (error) {
    return next(CreateError(500, 'Internal Server Error'))
  }
}

export const getById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) { return next(CreateError(404, 'User Not Found')) }
    return next(CreateSuccess(200, 'Single User', user))
  } catch (error) {
    return next(CreateError(500, 'Internal Server Error'))
  }
}

export const deleteUsers = async (req, res, next) => {
  try {
    const userId = req.params.id
    const user = await User.findById({ _id: userId })
    if (user) {
      await User.findByIdAndDelete(userId)
      return next(CreateSuccess(200, 'User Deleted'))
    } else {
      return next(CreateError(404, 'User Not Found'))
    }
  } catch (error) {
    return next(CreateError(500, 'Internal Server Error'))
  }
}
