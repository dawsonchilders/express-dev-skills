const skills = [
  {id: 1234, skill: 'HTML', desc: 'HTML defines the structure of a web page'},
  {id: 1235, skill: 'CSS', desc: 'CSS styles a web page'},
  {id: 1236, skill: 'JavaScript', desc: 'JavaScript allows you to implement dynamic features on web pages'}  
];

module.exports = {
    getAll,
    getOne
  };

  function getOne(id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id);
  }
	
  function getAll() {
    return skills;
  }