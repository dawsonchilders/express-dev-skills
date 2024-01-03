
const Skill = require('../models/skill');

module.exports = {
    index,
    show
};


// controllers/todos.js

function show(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/show', { skill });
}

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }