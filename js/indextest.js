var vm = new Vue({
	el:'#app',
	data: function(){
		return {
			activeIndex: '1',
        activeIndex2: '1',
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
		url: 'images/cardbag.jpg',
		currentMoney: {
			money: ''
		  }
		}
	},

	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		  },
		getCurrentMoney: function(){
			var _self = this;
			$.ajax({
				type: "get",
				url: 'localhost:6060/open/metamodel/tenant/all',
				async: false,
				dataType: 'json',
				success: function (data) {
					_self.tenantList = [];
					if (data) {
						for (var i in data) {
							var obj = new Object();
							obj.label = data[i].label;
							obj.value = data[i].tenantName;
							_self.tenantList.push(obj);
						}
					}
				}
			});
		}
	},
	created: function(){
		
	}
});