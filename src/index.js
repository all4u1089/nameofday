
var daysInMonth = function (year, month, callback) {
	if (isNaN(year)) {
		var err = new Error('year must be a number');
		return callback(err);
	}
	if (year < 0) {
		var err = new Error('year must be positive');
		return callback(err);
	}
	if (isNaN(month)) {
		var err = new Error('month must be a number');
		return callback(err);
	}	
	if (month < 0) {
		var err = new Error('month must be positive');
		return callback(err);
	}
	if (month > 12) {
		var err = new Error('month must be lower than or equal to 12');
		return callback(err);
	}
	var days = 0;
	switch(month) {
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			days = 31;
			break;
		case 4:
		case 6:
		case 9:
		case 11:
			days = 30;
			break;
		case 2:
			if (year % 100 != 0 && year % 4 ==0) {
				days = 29;
			} else {
				days = 28;
			}
			break;
		default:
			days = 0;
	}
	callback(null, days);
}

var nameOfDay = function (year, month, day, callback) {
	if (isNaN(day)) {
		var err = new Error('day must be a number');
		return callback(err);
	}
	if (day < 0) {
		var err = new Error('day must be positive');
		return callback(err);
	}
	/* LAM SAO DE GOI DUOC HAM daysInMonth? */
	console.log("lam sao de goi duoc ham callback");
	console.log(daysInMonth(year, month, callback));
	if (day > daysInMonth(year, month, callback)) {
		var err = new Error('day must be lower than or equal to days of month');
		return callback(err);
	}	
	//S = Year - 1 + ((Year - 1) / 4) - ((Year - 1) / 100) + ((Year - 1) / 400) + khoangNgay;
	var khoangNgay = day;
	for (var i = 1; i <= month-1; i++) {
		khoangNgay +=daysInMonth(year, i);
	}
	var s = year - 1 + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) 
		+ Math.floor((year - 1) / 400) + khoangNgay;
	var x = s%7;
	var name = "";
	switch (x) {
		case 0:
			name = "Sunday";
			break;
		case 1:
			name = "Monday";
			break;
		case 2:
			name = "Tuesday";
			break;
		case 3:
			name = "Wednesday";
			break;
		case 4:
			ngay = "Thursday";
			break;
		case 5:
			name = "Friday";
			break;
		default:
			name = "Saturday";
	}
	callback(null, name);
}

module.exports = {
	daysInMonth: daysInMonth,
	nameOfDay: nameOfDay
}