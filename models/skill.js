const skills = [
  {id: 1234, skills: 'HTML'},
  {id: 1235, skills: 'CSS'},
  {id: 1236, skills: 'JavaScript'}  
];

module.exports = {
    getAll,
    getOne
  };

  function getOne(id) {
    id = parseInt(id);
    return skills.find((skills) => skills.id === id);
 
  }
	
  function getAll() {
    return skills;
  }