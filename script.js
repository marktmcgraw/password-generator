// Elements to retrieve from HTML page

const lengthEl= document.getElementById('length');
const uppercaseEl= document.getElementById('uppercase');
const lowercaseEl= document.getElementById('lowercase');
const numericEl= document.getElementById('numeric');
const specialEl= document.getElementById('special'); 
const createEl= document.getElementById('create');
const resultEl= document.getElementById('result');

randomFunc ={
   
    upper: getRandomUpper,
    lower: getRandomLower,
	number: getRandomNumeric,
	special: getRandomSpecial
 };

createEl.addEventListener('click', () => {

    const length = +lengthEl.value;
	const hasUpper = uppercaseEl.checked;
	const hasLower = lowercaseEl.checked;
	const hasNumeric = numericEl.checked;
	const hasSpecial = specialEl.checked;



resultEl.innerHTML = createPassword(
    hasUpper, hasLower, hasNumeric, hasSpecial,length);
});


function createPassword(upper, lower, number, special, length){

   
    let newPassword = '';

    const modifiers = upper + lower + number + special;

    const modifiersArray = [{upper}+{lower}+{number}+{symbol}].filter

(item => Object.values(item)[0]);

if (modifiers === 0){
    alert ("You must select at least one character type");

    return '';
}

for (let i = 0; i<length; i+= modifiers) {

    modifiersArray.forEach(type =>{

        const funcName = Object.keys(type)[0];

        newPassword += randomFunc[funcName]();
    });

}
    const finalPassword = newPassword;

    return finalPassword;

}
