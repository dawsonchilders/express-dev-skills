
const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    edit,
    update,
    delete: deleteSkill
};

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}

function update(req, res) {
  Skill.update(req.params.id, req.body);
  res.redirect(`/skills/${req.params.id}`);
}

function edit(req, res) {
  const skill = Skill.getOne(req.params.id);
  res.render('skills/edit', {
    title: 'Edit Skill',
    skill
  });
}

function create(req, res) {
  Skill.create(req.body);
  res.redirect('/skills');
}

function newSkill(req, res) {
  res.render('skills/new', { title: 'Add New Skill' });
}

function show(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/show', {
      title: 'About My Skills',
      skill
    });
}

function index(req, res) {
    res.render('skills/index', {
      title: 'My Skills', 
      skills: Skill.getAll()
    });
  }