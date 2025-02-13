// Menangani halaman awal
document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('main-menu').style.display = 'block';
});
// Mengambil elemen form dan tombol
const form = document.getElementById('temp-form');
const input = document.getElementById('main-input');
const result = document.getElementById('main-result');
const conversionExplanation = document.getElementById('cara-konversi');
const reverseButton = document.getElementById('reverse');

// Fungsi untuk mengonversi suhu antar satuan
function convertTemperature() {
    const inputUnit = document.getElementById('input-unit').value;
    const outputUnit = document.getElementById('output-unit').value;
    const value = parseFloat(input.value);

    if (isNaN(value)) {
        alert("Masukkan suhu yang valid!");
        return;
    }

    let resultValue;
    let formula;

    // Konversi dari Celsius
    if (inputUnit === "Celsius") {
        if (outputUnit === "Fahrenheit") {
            resultValue = (value * 9 / 5) + 32;
            formula = `S(°F) = (S(°C) * 9/5) + 32`;
        } else if (outputUnit === "Kelvin") {
            resultValue = value + 273.15;
            formula = `S(K) = S(°C) + 273.15`;
        } else if (outputUnit === "Rankine") {
            resultValue = (value + 273.15) * 9 / 5;
            formula = `S(°R) = (S(°C) + 273.15) * 9/5`;
        } else if (outputUnit === "Delisle") {
            resultValue = (100 - value) * 3 / 2;
            formula = `S(°De) = (100 - S(°C)) * 3/2`;
        } else if (outputUnit === "Newton") {
            resultValue = value * 33 / 100;
            formula = `S(°N) = S(°C) * 33/100`;
        } else if (outputUnit === "Réaumur") {
            resultValue = value * 4 / 5;
            formula = `S(°Ré) = S(°C) * 4/5`;
        } else if (outputUnit === "Rømer") {
            resultValue = value * 40 / 21 + 7.5;
            formula = `S(°Rø) = S(°C) * 40/21 + 7.5`;
        }
    }

    // Konversi dari Fahrenheit
    if (inputUnit === "Fahrenheit") {
        if (outputUnit === "Celsius") {
            resultValue = (value - 32) * 5 / 9;
            formula = `S(°C) = (S(°F) - 32) * 5/9`;
        } else if (outputUnit === "Kelvin") {
            resultValue = (value - 32) * 5 / 9 + 273.15;
            formula = `S(K) = (S(°F) - 32) * 5/9 + 273.15`;
        } else if (outputUnit === "Rankine") {
            resultValue = value + 459.67;
            formula = `S(°R) = S(°F) + 459.67`;
        } else if (outputUnit === "Delisle") {
            resultValue = (212 - value) * 5 / 9;
            formula = `S(°De) = (212 - S(°F)) * 5/9`;
        } else if (outputUnit === "Newton") {
            resultValue = (value - 32) * 11 / 60;
            formula = `S(°N) = (S(°F) - 32) * 11/60`;
        } else if (outputUnit === "Réaumur") {
            resultValue = (value - 32) * 4 / 9;
            formula = `S(°Ré) = (S(°F) - 32) * 4/9`;
        } else if (outputUnit === "Rømer") {
            resultValue = (value - 32) * 7 / 24 + 7.5;
            formula = `S(°Rø) = (S(°F) - 32) * 7/24 + 7.5`;
        }
    }

    // Konversi dari Kelvin
    if (inputUnit === "Kelvin") {
        if (outputUnit === "Celsius") {
            resultValue = value - 273.15;
            formula = `S(°C) = S(K) - 273.15`;
        } else if (outputUnit === "Fahrenheit") {
            resultValue = (value - 273.15) * 9 / 5 + 32;
            formula = `S(°F) = (S(K) - 273.15) * 9/5 + 32`;
        } else if (outputUnit === "Rankine") {
            resultValue = value * 9 / 5;
            formula = `S(°R) = S(K) * 9/5`;
        } else if (outputUnit === "Delisle") {
            resultValue = (373.15 - value) * 3 / 2;
            formula = `S(°De) = (373.15 - S(K)) * 3/2`;
        } else if (outputUnit === "Newton") {
            resultValue = (value - 273.15) * 33 / 100;
            formula = `S(°N) = (S(K) - 273.15) * 33/100`;
        } else if (outputUnit === "Réaumur") {
            resultValue = (value - 273.15) * 4 / 5;
            formula = `S(°Ré) = (S(K) - 273.15) * 4/5`;
        } else if (outputUnit === "Rømer") {
            resultValue = (value - 273.15) * 7 / 40 + 7.5;
            formula = `S(°Rø) = (S(K) - 273.15) * 7/40 + 7.5`;
        }
    }

    // Konversi dari Rankine
    if (inputUnit === "Rankine") {
        if (outputUnit === "Celsius") {
            resultValue = (value - 491.67) * 5 / 9;
            formula = `S(°C) = (S(°R) - 491.67) * 5/9`;
        } else if (outputUnit === "Fahrenheit") {
            resultValue = value - 459.67;
            formula = `S(°F) = S(°R) - 459.67`;
        } else if (outputUnit === "Kelvin") {
            resultValue = value * 5 / 9;
            formula = `S(K) = S(°R) * 5/9`;
        } else if (outputUnit === "Delisle") {
            resultValue = (671.67 - value) * 3 / 2;
            formula = `S(°De) = (671.67 - S(°R)) * 3/2`;
        } else if (outputUnit === "Newton") {
            resultValue = (value - 491.67) * 33 / 100;
            formula = `S(°N) = (S(°R) - 491.67) * 33/100`;
        } else if (outputUnit === "Réaumur") {
            resultValue = (value - 491.67) * 4 / 9;
            formula = `S(°Ré) = (S(°R) - 491.67) * 4/9`;
        } else if (outputUnit === "Rømer") {
            resultValue = (value - 491.67) * 7 / 24 + 7.5;
            formula = `S(°Rø) = (S(°R) - 491.67) * 7/24 + 7.5`;
        }
    }

    // Mengisi hasil konversi dan rumus
    result.value = resultValue.toFixed(2);
    conversionExplanation.value = formula;
}

// Menangani konversi suhu ketika form disubmit
form.addEventListener('submit', function(event) {
    event.preventDefault();
    convertTemperature();
});

// Menangani Reverse (menukar satuan)
reverseButton.addEventListener('click', function() {
    const inputUnit = document.getElementById('input-unit');
    const outputUnit = document.getElementById('output-unit');
    
    const temp = inputUnit.value;
    inputUnit.value = outputUnit.value;
    outputUnit.value = temp;

    convertTemperature();
});
// Menangani tombol untuk menampilkan/menyembunyikan rumus
document.getElementById('toggle-rumus').addEventListener('click', function() {
    const table = document.getElementById('rumus-table');
    if (table.style.display === "none") {
        table.style.display = "table";
        this.textContent = "Sembunyikan Rumus Konversi Suhu";
    } else {
        table.style.display = "none";
        this.textContent = "Tampilkan Rumus Konversi Suhu";
    }
});