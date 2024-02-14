const members = [
  { name: 'Janna', id: 'janna' },
  { name: 'Lulu', id: 'lulu' },
  { name: 'Milio', id: 'milio' },
  { name: 'Nami', id: 'nami' },
  { name: 'Seraphine', id: 'seraphine' },
  { name: 'Yuumi', id: 'yuumi' },
];

let activeMember = 0;
const images = document.getElementById('images');
const backButton = document.getElementById('backButton');
const nextButton = document.getElementById('nextButton');
const menu = document.getElementById('menu');
const navigation = document.getElementById('navigation');
const memberName = document.getElementById('member_name');

function changeMember(memberId) {
  const nextMember = memberId;

  if (nextMember < 0 || nextMember >= members.length) {
    return; 
  }

  activeMember = nextMember;
  images.style.transform = `translateY(${-100 * activeMember}vh)`;

  changeName(members[activeMember].name);

  memberName.classList.remove('janna', 'lulu', 'milio', 'nami', 'seraphine', 'yuumi');

  memberName.classList.add(members[activeMember].id);

  backButton.disabled = activeMember === 0;
  nextButton.disabled = activeMember === members.length - 1;
}

backButton.disabled = true;

function navigationMember(direction) {
  const nextMember = activeMember + direction;

  if (nextMember < 0 || nextMember >= members.length) {
    return;
  }

  activeMember = nextMember;
  images.style.transform = `translateY(${-100 * activeMember}vh)`;
}

function changeMenu() {
  menu.classList.toggle('active');
  navigation.classList.toggle('active');
}

function setMember(memberId) {
  changeMember(memberId);
  changeMenu(); // Adiciona essa linha para fechar o menu após clicar na imagem
}
