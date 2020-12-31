const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

function showhide () {
	const dataId = this.getAttribute("data-index");
	console.log(this);
	const div = document.getElementById(dataId);
	console.log(div);
	div.classList.toggle('hidden');
	var className = document.getElementsByClassName('data');
    var classnameCount = className.length;
    var IdStore = new Array();
    for(var j = 0; j < classnameCount; j++){
		IdStore.push(className[j].id);
	}
	console.log(IdStore);
	for(var j = 0; j < IdStore.length; j++)
	{
		const hideData = document.getElementById(j);
		console.log(hideData);
		if( j != dataId){
			hideData.classList.add('hidden');
		}
	}

	


}
