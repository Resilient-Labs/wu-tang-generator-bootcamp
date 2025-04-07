document.getElementById('name-generator-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const color = document.getElementById('color').value;
  const number = document.getElementById('number').value;
  const day = document.getElementById('day').value;
  const animal = document.getElementById('animal').value;
  const adjective = document.getElementById('adjective').value;

  const wuTangNames = [
      `${adjective} ${color}`,
      `${animal} ${number}`,
      `${day} ${color}`,
      `${adjective} ${animal}`,
      `${color} ${day}`,
  ];

  const randomName = wuTangNames[Math.floor(Math.random() * wuTangNames.length)];

  document.getElementById('result').textContent = randomName;
});
