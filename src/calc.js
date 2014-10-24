var calc = {
	add: function (text) {
		var res = text ? text : 0;
		if ( res != 0){
			res = this.getSum(text)
		}
		return parseInt(res);
	},
	getSum: function (text) {
		var res = text;
		if (text.indexOf(',') > 0){
			var array = res.split(',');
			res = 0;
			for (var i = 0; i < array.length; i++) {
				res += parseInt(array[i])
			}
		}
		return res;
	}
}

module.exports = calc;