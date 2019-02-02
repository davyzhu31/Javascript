// JavaScript Document
const hotKeys = (e) => {
	let windowEvent = window.event ? event : e;

	if (windowEvent.keyCode === 90 && windowEvent.shiftKey) {// key Shift+Z
		const previous = document.querySelector('#previous');
		previous.click();
	}
	if (windowEvent.keyCode === 88 && windowEvent.shiftKey) {// key Shift+X
		const next = document.querySelector('#next');
		next.click();
	}
	if (windowEvent.keyCode === 27) {// key ESC
		const exit = document.querySelector('#exit-');
		exit.click();
	}
	if (windowEvent.keyCode === 65 && windowEvent.shiftKey) {// key Shift+A
		const plan = document.querySelector('#plan');
		plan.click();
	}
}
document.onkeyup = hotKeys;
/*
id="searchBar1" == '#searchBar1'
const [searchBar1] == [searchBar1].click()
*/