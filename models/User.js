import mongoose, { Schema } from 'mongoose'

const UserSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    profileImage: {
      type: String,
      required: false,
      default: 'https://media.istockphoto.com/id/1352063475/photo/concentrated-young-business-woman-working-with-computer-in-the-office.jpg?s=612x612&w=0&k=20&c=4VPpgNnVwZP2sJs7INTYbs-LgiBr4DfamgT5dtvRP7A='
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
    roles: {
      type: [Schema.Types.ObjectId],
      required: true,
      ref: 'Role'
    }

  },
  {
    timestamps: true
  }
)

export default mongoose.model('User', UserSchema)
