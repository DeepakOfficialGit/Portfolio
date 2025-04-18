function toggleBgColorSelector() {
    const bgColorSelector = document.getElementById('bgColorSelector');
    bgColorSelector.classList.toggle('hidden');
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.bg-white.p-6.rounded-lg.shadow-lg.mb-8');
    sections.forEach(section => section.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
}

function changeBgColor(colorClass) {
    document.body.className = colorClass + ' font-roboto';
}

function calculateAge() {
    const day = parseInt(document.getElementById('birthDay').value);
    const month = parseInt(document.getElementById('birthMonth').value) - 1; // JavaScript months are 0-based
    const year = parseInt(document.getElementById('birthYear').value);
    const birthdate = new Date(year, month, day);
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    document.getElementById('ageResult').innerText = `Your age is ${age} years.`;
}

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const weightUnit = document.getElementById('weightUnit').value;
    const height = parseFloat(document.getElementById('height').value);
    const heightUnit = document.getElementById('heightUnit').value;
    let weightInKg;
    let heightInMeters;

    if (weightUnit === 'kg') {
        weightInKg = weight;
    } else if (weightUnit === 'gram') {
        weightInKg = weight / 1000;
    } else if (weightUnit === 'pound') {
        weightInKg = weight * 0.453592;
    }

    if (heightUnit === 'cm') {
        heightInMeters = height / 100;
    } else if (heightUnit === 'feet') {
        heightInMeters = height * 0.3048;
    } else if (heightUnit === 'meter') {
        heightInMeters = height;
    }

    const bmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
    document.getElementById('bmiResult').innerText = `Your BMI is ${bmi}.`;
}

function convertData() {
    const data = parseFloat(document.getElementById('dataInput').value);
    const dataUnit = document.getElementById('dataUnit').value;
    const convertTo = document.getElementById('convertTo').value;
    let result;

    if (dataUnit === 'bytes') {
        if (convertTo === 'kb') {
            result = (data / 1024).toFixed(2) + ' KB';
        } else if (convertTo === 'mb') {
            result = (data / (1024 * 1024)).toFixed(2) + ' MB';
        } else if (convertTo === 'gb') {
            result = (data / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
        } else {
            result = data + ' Bytes';
        }
    } else if (dataUnit === 'kb') {
        if (convertTo === 'bytes') {
            result = (data * 1024).toFixed(2) + ' Bytes';
        } else if (convertTo === 'mb') {
            result = (data / 1024).toFixed(2) + ' MB';
        } else if (convertTo === 'gb') {
            result = (data / (1024 * 1024)).toFixed(2) + ' GB';
        } else {
            result = data + ' KB';
        }
    } else if (dataUnit === 'mb') {
        if (convertTo === 'bytes') {
            result = (data * 1024 * 1024).toFixed(2) + ' Bytes';
        } else if (convertTo === 'kb') {
            result = (data * 1024).toFixed(2) + ' KB';
        } else if (convertTo === 'gb') {
            result = (data / 1024).toFixed(2) + ' GB';
        } else {
            result = data + ' MB';
        }
    } else if (dataUnit === 'gb') {
        if (convertTo === 'bytes') {
            result = (data * 1024 * 1024 * 1024).toFixed(2) + ' Bytes';
        } else if (convertTo === 'kb') {
            result = (data * 1024 * 1024).toFixed(2) + ' KB';
        } else if (convertTo === 'mb') {
            result = (data * 1024).toFixed(2) + ' MB';
        } else {
            result = data + ' GB';
        }
    }

    document.getElementById('dataResult').innerText = result;
}

function convertTemperature() {
    const temp = parseFloat(document.getElementById('tempInput').value);
    const tempUnit = document.getElementById('tempUnit').value;
    let celsius, fahrenheit, kelvin;

    if (tempUnit === 'celsius') {
        celsius = temp;
        fahrenheit = (celsius * 9/5 + 32).toFixed(2);
        kelvin = (celsius + 273.15).toFixed(2);
    } else if (tempUnit === 'fahrenheit') {
        fahrenheit = temp;
        celsius = ((fahrenheit - 32) * 5/9).toFixed(2);
        kelvin = (parseFloat(celsius) + 273.15).toFixed(2);
    } else if (tempUnit === 'kelvin') {
        kelvin = temp;
        celsius = (kelvin - 273.15).toFixed(2);
        fahrenheit = (celsius * 9/5 + 32).toFixed(2);
    }

    document.getElementById('tempResult').innerText = `Celsius: ${celsius}°C, Fahrenheit: ${fahrenheit}°F, Kelvin: ${kelvin}K`;
}

function convertNumeralSystem() {
    const number = document.getElementById('decimalInput').value;
    const numeralSystem = document.getElementById('numeralSystem').value;
    let result;

    if (numeralSystem === 'decimal') {
        result = `Decimal: ${number}`;
    } else if (numeralSystem === 'binary') {
        result = `Binary: ${parseInt(number, 10).toString(2)}`;
    } else if (numeralSystem === 'octal') {
        result = `Octal: ${parseInt(number, 10).toString(8)}`;
    } else if (numeralSystem === 'hexadecimal') {
        result = `Hexadecimal: ${parseInt(number, 10).toString(16).toUpperCase()}`;
    }

    document.getElementById('numeralResult').innerText = result;
}