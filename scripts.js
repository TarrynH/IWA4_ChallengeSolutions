let year = 2050
let status = 'student'
let count = 0

if (year = 2050) {
	console.log("January", 'New Year’s Day')
	console.log("March", 'Human Rights Day')
	console.log("April", 'Family Day')
	console.log("April", 'Freedom Day')
	count = count + 4

	if (status) {
	    console.log('June', 'Youth Day')
		count = count + 1
    } else {count = count}

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	month = 'December'
	console.log("December", 'Day of Reconciliation')
	count = count + 3

	if (!status) {
	    console.log("December", 'Christmas Day')
		count = count + 1
    } else { count = count}

	console.log("December", 'Day of Goodwill')
	count = count + 1
}

console.log('Your status is:', status)
console.log('The year is:', year)
console.log('The total holidays is:', count)