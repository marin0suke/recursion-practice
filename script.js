function fibs(num) {
	let fibNumbers = [];
	
	for (let i = 0; i <= num; i++) {
		if (i === 0 || i === 1) {
			fibNumbers[i] = i; 
		} else {
			fibNumbers[i] = fibNumbers[i - 1] + fibNumbers[i - 2];
		}
	} 
	return fibNumbers;
}


function fibsRec(num) {
    if (num === 0 || num === 1) return num;

    // return a single fib number.
    //to get there, we need to calc each [i] of fibNumbers.
    return (fibsRec(num - 1) + fibsRec(num - 2));
}

