import express from 'express'
import { addComment, deleteComment, getComments } from '../controllers/comment.js'
import { verifyToken } from '../verifyToken.js'
const router = express.Router()

// router.post('/', addComment)
router.post('/', verifyToken, addComment)

// router.delete('/:id', deleteComment)
router.delete('/:id', verifyToken, deleteComment)

// router.get('/:blogid', getComments)
router.get('/:blogid', verifyToken, getComments)

export default router