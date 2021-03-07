const router = require("express").Router();
const bookRoutes = require("./books");

// routes for Book
router.use("/books", bookRoutes);

module.exports = router;