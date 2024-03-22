import Express from 'express'
import { deleteUsers, getAllUsers, getById } from '../controllers/user.controller.js'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'

const router = Express.Router()
// User getAll
router.get('/getAll', getAllUsers)
// admin  getAll
router.get('/', verifyAdmin, getAllUsers)
// getById
router.get('/:id', verifyUser, getById)
// Delete User
router.delete('/deleteUser/:id', deleteUsers)
export default router
