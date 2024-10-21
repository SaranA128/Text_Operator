$(document).ready(function() {
    $('#textarea').on('input', function() {
        const text = $(this).val();
        const alphabetCount = countAlphabets(text);
        const digitCount = countDigits(text);
        const specialCharCount = countSpecialChars(text);

        $('#output').html(`
            <p>Alphabets: <strong>${alphabetCount}</strong></p>
            <p>Digits: <strong>${digitCount}</strong></p>
            <p>Special Characters: <strong>${specialCharCount}</strong></p>
        `);
    });

    $('#color-picker').on('input', function() {
        const selectedColor = $(this).val();
        $('#textarea').css('color', selectedColor);
    });

    function countAlphabets(str) {
        return str.match(/[a-zA-Z]/g) ? str.match(/[a-zA-Z]/g).length : 0;
    }

    function countDigits(str) {
        return str.match(/[0-9]/g) ? str.match(/[0-9]/g).length : 0;
    }

    function countSpecialChars(str) {
        return str.match(/[^a-zA-Z0-9]/g) ? str.match(/[^a-zA-Z0-9]/g).length : 0;
    }
});