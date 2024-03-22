import express from 'express'
// import Role from '../models/Role.js';
import { createRole, deleteRoles, getAllRoles, updateRole } from '../controllers/role.controller.js'

const router = express.Router()

// Cerate Role
router.post('/create', createRole)

// Update Role
router.put('/update/:id', updateRole)

// Read Role
router.get('/getAll', getAllRoles)

// Delete Role
router.delete('/deleteRole/:id', deleteRoles)

export default router
