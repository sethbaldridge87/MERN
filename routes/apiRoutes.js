const axios = require("axios");
const router = require("express").Router();
const destination = axios.default.baseURL = "https://www.googleapis.com/books/v1/volumes/"
router.get("/books", (req, res) => {
    // console.log("begin request");
    // console.log({ req });
axios
    .get(destination, { params: req.query })
    // .then(({data}) => console.log(data))
    .then(({ data: { items } }) => res.json(items))
    .catch(err => console.log(err));
});

module.exports = router;

// http://www.recipepuppy.com/api/
// http://www.recipepuppy.com/api?q=cookies
// https://www.googleapis.com/books/v1/volumes?q=harrypotter
// https://www.googleapis.com/books/v1/volumes/