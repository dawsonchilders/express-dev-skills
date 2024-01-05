const skills = [
  {id: 1234, skill: 'HTML', desc: 'HTML defines the structure of a web page'},
  {id: 1235, skill: 'CSS', desc: 'CSS styles a web page'},
  {id: 1236, skill: 'JavaScript', desc: 'JavaScript allows you to implement dynamic features on web pages'}  
];

module.exports = {
    getAll,
    getOne,
    create,
    update,
    deleteOne
  };

  function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }

  function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skills.push(skill);
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id);
  }
	
  function getAll() {
    return skills;
  }