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
    console.log("this was printed recursively");
    if (num === 0 || num === 1) return num;

    return (fibsRec(num - 1) + fibsRec(num - 2));
}

function mergeSort(arr) {
    //splits array into halves. 
    //sorts each half - by merging them. (compare then place.)

    console.log("this was printed recursively");

    if (arr.length <= 1) return arr; // if array is 1, we have a single element, so it is sorted. return the element. 

    let mid = Math.floor(arr.length / 2); // how to get index of the middle of the array? will be a #. 
    let left = arr.slice(0, mid);
    let right = arr.slice(mid); // no need for second param - this will slice at mid and get the rest of the array.

    let sortedLeft = mergeSort(left); // this part keeps splitting them until singles - (does this happen even if it doesn't need to? (if the elements are already sorted)) ??
    let sortedRight = mergeSort(right); 

    return merge(sortedLeft, sortedRight); // new function that completes the merge step (where the elements are compared).

    function merge(left, right) {
        // here we have both halves, we want to compare the first element of each half to then be placed into a new sorted array.
        const sorted = []; // init new array.
        let i = 0; // pointer for left array.
        let j = 0;  // pointer for right array.

        while(i < left.length && j < right.length) { // while there are remaining elements in BOTH arrays. (so there is a point making a comparison)
            if (left[i] <= right[j]) { // if left element is smaller than right, add left to sorted list.
                sorted.push(left[i]);
                i++;
            } else {
                sorted.push(right[j]);
                j++;
            }
        }

        sorted.push(...left.slice(i)); // (i) bc we are accessing which # loop we are at to match it to where in the array we want to slice. i isn't an array index - its the loop # we have saved each iteration.
        sorted.push(...right.slice(j));

        return sorted;
    }
}