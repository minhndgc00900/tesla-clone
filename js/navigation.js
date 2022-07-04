// on handle open menu
const openMenu = () => {
	document.querySelector(".backdrop").className = "backdrop active";
	document.querySelector("aside").className = "active";
};

// on handle close menu
const closeMenu = () => {
	document.querySelector(".backdrop").className = "backdrop";
	document.querySelector("aside").className = "";
};

// add event onClick for the element to open 
document.getElementById("menuBtn").onclick = (e) => {
	e.preventDefault();
	openMenu();
};

// add event onClick for the element to close nav
document.querySelector("aside button.close").onclick = (e) => {
	closeMenu();
};

document.querySelector(".backdrop").onclick = (e) => {
	closeMenu();
};
