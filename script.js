// Dark Mode Toggle
const toggleDarkMode = () => {
	document.body.classList.toggle("dark-mode");
};

document.body.innerHTML += `
  <button onclick="toggleDarkMode()" style="
    position: fixed; 
    bottom: 10px; 
    right: 10px;
  ">Toggle Dark Mode</button>
`;
