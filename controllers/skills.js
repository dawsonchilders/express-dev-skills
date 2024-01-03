
const Skill = require('../models/skill');

module.exports = {
    index,
};


// controllers/todos.js

function index(req, res) {
    // do not use a leading / when rendering
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }