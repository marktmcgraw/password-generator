// Elements to retrieve from HTML page

const lengthEl= document.getElementById('length');
const uppercaseEl= document.getElementById('uppercase');
const lowercaseEl= document.getElementById('lowercase');
const numericEl= document.getElementById('numeric');
const specialEl= document.getElementById('special'); 
const createEl= document.getElementById('create');
const resultEl= document.getElementById('result');



createEl.addEventListener('click', () => {

    const length = +lengthEl.value;
	const hasUpper = uppercaseEl.checked;
	const hasLower = lowercaseEl.checked;
	const hasNumeric = numericEl.checked;
	const hasSpecial = specialEl.checked;



resultEl.innerHTML = createPassword(
    hasUpper, hasLower, hasNumeric, hasSpecial,length);
});



