const skills = [
  {id: 1234, skill: 'HTML', desc: 'code that makes things show on internet'},
  {id: 1235, skill: 'CSS', desc: 'code that styles the page'},
  {id: 1236, skill: 'JavaScript', desc: 'code that makes things happen'}  
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