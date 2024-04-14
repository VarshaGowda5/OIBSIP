const buttons = Array.from(document.getElementsByClassName('num'));
const operators = Array.from(document.getElementsByClassName('operator'));
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');
const result = document.getElementById('result');

buttons.map( button => {
    button.addEventListener('click', (e) => {
        result.value += e.target.value;
    });
});

operators.map( operator => {
    operator.addEventListener('click', (e) => {
        result.value += ` ${e.target.value} `;
    });
});

equals.addEventListener('click', () => {
    try {
        result.value = eval(result.value);
    } catch {
        alert('Invalid operation');
        result.value = '';
    }
});

clear.addEventListener('click', () => {
    result.value = '';
});