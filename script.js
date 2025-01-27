const teamMembers = [
    {
      name: "Giuseppe ",
      role: "Designer",
      email: "giuseppe25@team.com",
      img: "img7male1.png"
    },
    {
      name: "Smith",
      role: "Front-end Developer",
      email: "Smith@team.com",
      img: "img/female1.png"
    },
    {
      name: "Flavio",
      role: "Back-end Developer",
      email: "Flavio99@team.com",
      img: "img/male2.png"
    },
    {
      name: "Elisa",
      role: "Back-end Developer",
      email: "Elisa@team.com",
      img: "img/female2.png"
    },
    {
      name: "Mario",
      role: "Front-end Developer",
      email: "Mario2@team.com",
      img: "img/male3.png"
    },
    {
      name: "Fabio",
      role: "Analyst",
      email: "Fabio@team.com",
      img: "img/female3.png"
    }
  ];
  
  
   
  
  const personalCard = (member) => {
  
  const {name, role, email, img} = member;
   console.log(name, role, email, img)
    
    const card = `<div id="card" class="col d-flex bg-grey text-light ">
                    <img src="${img}" alt="${name} class="m-5">
                    <div class="dati m-3">
                      <h3 id="name">${name}</h3>
                      <span id="role">${role}</span> <br>
                      <a href="#" id="email" >${email}</a>
                    </div>
                  </div>`
  
    return card;
           
  }
  
  
  
  const printTeam = (array) => {
  
    const membersContainer = document.getElementById('members-container');
    let cards = '';
    for (let member of teamMembers){
    cards += personalCard(member)
    }
   
    membersContainer.innerHTML = cards;
  
  
  }
  
  
  printTeam(teamMembers)
  
  
  
  const form = document.querySelector('form');
  
  
  const resetFields = () => {
    document.getElementById('name').value = '';
    document.getElementById('role').value = '';
    document.getElementById('email').value = '';
    document.getElementById('img').value = '';
  }
  
  
  
  form.addEventListener('submit', e => {
    e.preventDefault();
  
  
  
    form.classList.add('d-none')
  
    document.querySelector('.loader').classList.remove('d-none')
    setTimeout(() => {
      document.querySelector('.loader').classList.add('d-none')
      addMember();
    }, 3000)
    
  })
  
  function addMember () {
      const name = document.getElementById('name-input').value;
      const role = document.getElementById('role-input').value;
      const email = document.getElementById('email-input').value;
      const img = document.getElementById('img').value;
  
      console.log(document.getElementById('name-input'))
      console.log(name, role, email, img)
      
      const newMember = {
        name,
        role,
        email,
        img
      }
  
      console.log(newMember)
      teamMembers.push(newMember)
  
  
      printTeam(teamMembers)
  
      resetFields()
      
      form.classList.add('d-none')
  
      document.getElementById('messaggio').classList.remove('d-none')
  }