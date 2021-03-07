const router = require("express").Router();
const booksController = require("../../controller/bookController");

// match to books in /api
router.route("/")
    .get(booksController.findAll)
    .post(booksController.create);

// match to :id in api folder
router.route("/:id")
    .get(booksController.findById)
    .put(booksController.findById)
    .delete(booksController.remove);

module.exports = router;