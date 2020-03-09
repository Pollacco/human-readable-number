module.exports = function toReadable (number) {
    let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	let tens = [ '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];
    let firstPart;
    let remainder;
    let digitsRemainder;
    let secondPart;
    if (number == 0) return 'zero';
	if (number < 20) {
		return ones[number];
	}
	let digitsNumber = number.toString().split('');
	if (number >= 20 && number < 100) {
		return `${tens[digitsNumber[0]]} ${ones[digitsNumber[1]]}`.trim();
	}
	if (number >= 100) {
		firstPart = ones[digitsNumber[0]] + ' hundred';
		remainder = parseInt(digitsNumber[1] + digitsNumber[2], 10);
		digitsRemainder = remainder.toString().split('');
		secondPart = parseInt(digitsNumber[1] + digitsNumber[2]) < 20 ? ones[remainder] : tens[digitsRemainder[0]] + ' ' + ones[digitsRemainder[1]];
		return `${firstPart} ${secondPart}`.trim();
	}
}
