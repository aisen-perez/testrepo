const express = require('express');
const {
  registerUser,
  loginUser,
  getUserById,
  updateUser,
  deleteUser
} = require('../controllers/userController');
const authenticate = require('../middlewares/authMiddleware');

const router = express.Router();

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected routes (authentication required)
router.get('/:id', authenticate, getUserById);  // Get user by ID
router.put('/:id', authenticate, updateUser);   // Update user
router.delete('/:id', authenticate, deleteUser); // Delete user

module.exports = router;
