const {
    login,
    register,
    getAllUsers,
    setAvatar,
    logOut,
  } = require("../controllers/user.controller");
  
  const router = require("express").Router();
  /**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Login user
 *     description: Login a user with email and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 user: huyvo
 *               password:
 *                 type: string
 *                 password: 12345678
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       401:
 *         description: Invalid credentials
 */
  router.post("/login", login);
  router.post("/register", register);
  router.get("/allusers/:id", getAllUsers);
  router.post("/setavatar/:id", setAvatar);
  router.get("/logout/:id", logOut);
  
  module.exports = router;
  