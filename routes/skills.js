var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills')


/* GET users listing. */


router.get('/new', skillsCtrl.new);

router.get('/', skillsCtrl.index);

router.get('/:id', skillsCtrl.show);
//POST SKills
router.post('/', skillsCtrl.create);
// GET /:id/edit
router.get('/:id/edit', skillsCtrl.edit);
//PUT /skills/:id
router.put('/:id', skillsCtrl.update);
//Delete /skill/:id
router.delete('/:id', skillsCtrl.delete);

module.exports = router;
