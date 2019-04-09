const axios = require("axios");
const router = require("express").Router();
const destination = axios.default.baseURL = "https://www.googleapis.com/books/v1/volumes/";
const db = require("../models");
router.get("/books", (req, res) => {
    // console.log("begin request");
    // console.log({ req });
axios
    .get(destination, { params: req.query })
    // .then(({data}) => console.log(data))
    .then(({ data: { items } }) => res.json(items))
    .catch(err => console.log(err));
});
router.post("/books", (req, res) => {
    console.log(req.body.entry);
    db.Book.create(req.body.entry)
        .then(function(result) {
            // return db.findOneAndUpdate(
            //     { $push: {book: result._id} },
            //     { new: true }
            // )
        })
        .catch(err => console.log(err));
});
router.get("/booksDB", (req, res) => {
    // console.log(req.body);
    db.Book.find(req.query)
        .then(allResult => res.json(allResult)
        
        )
        .catch(err => console.log(err));
});
router.delete("/books/:id", (req,res) => {
    console.log("Request at apiRoutes*********************");
    console.log(req.params.id);
    db.Book.findByIdAndDelete(req.params.id)
        .then(

        )
        .catch(err => console.log(err));
});

module.exports = router;

// http://www.recipepuppy.com/api/
// http://www.recipepuppy.com/api?q=cookies
// https://www.googleapis.com/books/v1/volumes?q=harrypotter
// https://www.googleapis.com/books/v1/volumes/