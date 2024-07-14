const { Router } = require('express');
const router = Router();
const authMiddleware =require("../middleware/authMiddleware")
const {createPost,getPosts,getPost,getCatPosts,getUserPosts,editPost,deletePost}=require('../controllers/postController')

router.post('/',authMiddleware,createPost)
router.get('/',getPosts)
router.get('/:id',getPost)
router.get('/categories/:category',getCatPosts)
router.get('/users/:id',getUserPosts)
router.patch('/:id',authMiddleware,editPost)
router.delete('/:id',authMiddleware,deletePost)


module.exports = router;
