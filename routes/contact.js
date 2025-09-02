import express from 'express'
import { submitContact, getAllContacts } from '../controller/contactController.js'
import { verifyToken } from '../middleware/verifyUser.js'

const app = express.Router()

// Submit contact form
app.post('/', submitContact)

// Get all contacts
app.get('/', verifyToken, getAllContacts)

export default app
