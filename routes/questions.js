var express = require('express');
var router = express.Router();

let {Question} = require('../models');

// RESTful APIs
// Dog, User, Order
// Create
// Read
// Update
// Delete


// GET /dogs
// GET /dogs/1
// POST /dogs
// PUT /dogs/1
// DELETE /dogs/1

// RESTFUL

/*USER
a user has many categories*/

// CATEGORIES
// a category has many questions
//
// QUESTIONS
// a question belongs to a category

// GET /categories
// GET /categories/:id
// POST /categories
// PUT /categories/:id
// DELETE /categories/:id

// GET /categories/:id/questions

// GET /questions?categoryId=1
// GET /questions/:id
// POST /questions
// PUT /questions/:id
// DELETE /categories/:id







// GET /dogs
// GET /dogs/1
// POST /dogs
// PUT /dogs/1
// DELETE /dogs/1


// POSTMAN

/* GET users listing. */
router.get('/', async function(req, res, next) {
    let questions = await Question.findAll();
    console.log(questions)
    res.json(questions);
});

router.get('/:id', async function(req, res, next) {
    console.log(req.params);
    let question = await Question.findOne({where: {id: req.params.id}});
    console.log(question);
    // console.log(dogs)
    res.json(question);
});

router.post('/', async function(req, res, next) {
    console.log(req.body);
    const question = await Question.create(req.body);
    res.json(question);
});

router.put('/:id', async function(req, res, next) {
    console.log(req.body);
    let question = await Question.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    res.json(question);
});

router.delete('/:id', async function(req, res, next) {
    // console.log(req.body);
    const result = await Question.destroy({where: {id: req.params.id}});
    res.json(result);
});

router.get('/profile/:id/name/:name', function(req, res, next) {
    // console.log(req.params);
    // look up the database for user id = 3
    // look up the profile of user
    // manipulations

    res.send('respond with a resource');
});

router.get('/something', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
