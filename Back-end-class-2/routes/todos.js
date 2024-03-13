const express = require("express");
const router = express.Router();

// import controller
const{creareTodo} = require("../controllers/createTodo");

//define API routes
router.post("/createTodo", createTodo);

module.exports = router;