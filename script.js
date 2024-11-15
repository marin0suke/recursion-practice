function fibs(num) {
	let fibNumbers = [];
	
	for (let i = 0; i < num; i++) {
		if (i === 0 || i === 1) {
			fibNumbers[i] = i; 
		} else {
			fibNumbers[i] = fibNumbers[i - 1] + fibNumbers[i - 2];
		}
	} 
	return fibNumbers;
}

