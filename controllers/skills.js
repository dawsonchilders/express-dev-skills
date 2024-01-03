const Skill = require('../models/skills');

module.exports = {
    index,
    show
};

function show(req, res) {
    const skill = Skill.getOne(req.params.id);
  res.render('Skills/show', { skill });
}

// controllers/todos.js

function index(req, res) {
    // do not use a leading / when rendering
    res.render('skills/index', {
      skills: Skills.getAll()
    });
  }