function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        let result = eval(display.value.replace('^', '**').replace('pi', Math.PI).replace('e', Math.E));
        addToHistory(display.value + ' = ' + result);
        display.value = result;
    } catch (e) {
        display.value = 'Error';
    }
}

function addToHistory(entry) {
    let history = document.getElementById('history');
    let listItem = document.createElement('li');
    listItem.textContent = entry;
    history.appendChild(listItem);
}

function toggleHistory() {
    let historyPanel = document.getElementById('historyPanel');
    historyPanel.classList.toggle('open');
}

function toggleLeftPanel() {
    let leftPanel = document.getElementById('leftPanel');
    leftPanel.classList.toggle('open');
}

function changeCalculatorColor() {
    let colors = ['bg-white', 'bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-red-100'];
    let calculator = document.getElementById('calculator');
    let currentColor = calculator.className.split(' ').find(cls => cls.startsWith('bg-'));
    let currentIndex = colors.indexOf(currentColor);
    let nextIndex = (currentIndex + 1) % colors.length;
    calculator.classList.remove(currentColor);
    calculator.classList.add(colors[nextIndex]);
}

function changeButtonColor() {
    let colors = ['bg-gray-200', 'bg-blue-200', 'bg-green-200', 'bg-yellow-200', 'bg-red-200'];
    let buttons = document.querySelectorAll('#calculator button:not(.text-gray-600)');
    let currentColor = buttons[0].className.split(' ').find(cls => cls.startsWith('bg-'));
    let currentIndex = colors.indexOf(currentColor);
    let nextIndex = (currentIndex + 1) % colors.length;
    buttons.forEach(button => {
        button.classList.remove(currentColor);
        button.classList.add(colors[nextIndex]);
    });
}

function toggleCalculationPanel(type) {
    let calculationPanel = document.getElementById('calculationPanel');
    let calculationTitle = document.getElementById('calculationTitle');
    let calculationContent = document.getElementById('calculationContent');
    calculationContent.innerHTML = '';

    if (type === 'area') {
        calculationTitle.textContent = 'Calculate Area';
        calculationContent.innerHTML = `
            <label for="length" class="block text-gray-700">Length:</label>
            <input type="number" id="length" class="w-full p-2 border border-gray-300 rounded mb-2">
            <label for="width" class="block text-gray-700">Width:</label>
            <input type="number" id="width" class="w-full p-2 border border-gray-300 rounded mb-2">
            <button class="bg-blue-500 text-white p-2 rounded w-full" onclick="calculateArea()">Calculate</button>
        `;
    } else if (type === 'length') {
        calculationTitle.textContent = 'Calculate Length';
        calculationContent.innerHTML = `
            <label for="length1" class="block text-gray-700">Length 1:</label>
            <input type="number" id="length1" class="w-full p-2 border border-gray-300 rounded mb-2">
            <label for="length2" class="block text-gray-700">Length 2:</label>
            <input type="number" id="length2" class="w-full p-2 border border-gray-300 rounded mb-2">
            <button class="bg-blue-500 text-white p-2 rounded w-full" onclick="calculateLength()">Calculate</button>
        `;
    } else if (type === 'volume') {
        calculationTitle.textContent = 'Calculate Volume';
        calculationContent.innerHTML = `
            <label for="length" class="block text-gray-700">Length:</label>
            <input type="number" id="length" class="w-full p-2 border border-gray-300 rounded mb-2">
            <label for="width" class="block text-gray-700">Width:</label>
            <input type="number" id="width" class="w-full p-2 border border-gray-300 rounded mb-2">
            <label for="height" class="block text-gray-700">Height:</label>
            <input type="number" id="height" class="w-full p-2 border border-gray-300 rounded mb-2">
            <button class="bg-blue-500 text-white p-2 rounded w-full" onclick="calculateVolume()">Calculate</button>
        `;
    }

    calculationPanel.classList.toggle('open');
}

function calculateArea() {
    let length = document.getElementById('length').value;
    let width = document.getElementById('width').value;
    if (length && width) {
        let area = length * width;
        addToHistory(`Area: ${length} * ${width} = ${area}`);
        alert(`The area is ${area}`);
    }
}

function calculateLength() {
    let length1 = document.getElementById('length1').value;
    let length2 = document.getElementById('length2').value;
    if (length1 && length2) {
        let totalLength = parseFloat(length1) + parseFloat(length2);
        addToHistory(`Length: ${length1} + ${length2} = ${totalLength}`);
        alert(`The total length is ${totalLength}`);
    }
}

function calculateVolume() {
    let length = document.getElementById('length').value;
    let width = document.getElementById('width').value;
    let height = document.getElementById('height').value;
    if (length && width && height) {
        let volume = length * width * height;
        addToHistory(`Volume: ${length} * ${width} * ${height} = ${volume}`);
        alert(`The volume is ${volume}`);
    }
}