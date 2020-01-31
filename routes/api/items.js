const express = require('express');
const router = express.Router();

// (1) Item Model
const Item = require('../../models/Item');

// (2) Create GET REQ
// @route GET api/items
router.get('/', (req, res) => {
  Item.find()
    .sort({
      date: -1
    })
    .then(items => res.json(items));
});

// (3) Create POST REQ
// @route POST api/items
router.post('/', (req, res) => {
  const newItem = new Item({
    // we dont need to input the date
    name: req.body.name
  });

  // save it JSON format
  newItem.save().then(item => res.json(item));
});

// (3) Create DELETE REQ
// @route Delete api/items
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json)({ success: true }))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
