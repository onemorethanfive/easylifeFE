var vm = new Vue({
	el:'#app',
	data: function(){
		return {
			activeIndex: '1',
			activeIndex2: '1',
			fit: 'fill',
			url: 'images/cardbag.jpg',
			currentMoney: {
				money: ''
			},
			activeNames: '',
			userId:'user01',
			cardDialog:false,
			activeNames: [''],
			cards:[]
		}
	},

	methods: {
		handleChange(){

		},
		closeCards(){
			this.cardDialog=false;
			this.activeNames=[];
			this.activeNames[0]=this.cards.length-1;
		},
		onclick: function(){
			this.cardDialog=true;	
			this.getCards();
		},
		getCards: function(){
			var _self = this;
			var userId = this.userId;
			$.ajax({
				type: "get",
				url: 'http://localhost:6060/card/getCardByUser/'+userId,
				async: false,
				dataType: 'json',
				success: function (data) {
					_self.cards=data;
					_self.activeNames[0]=data.length-1;
				}
			});
		},
		handleClose(done) {
			this.$confirm('确认关闭？')
			  .then(_ => {
				done();
			  })
			  .catch(_ => {});
		  },
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		  },
		getCurrentMoney: function(){
			var _self = this;
			var userId = this.userId;
			$.ajax({
				type: "get",
				url: 'http://localhost:6060/card/getMoneyByUser/'+userId,
				async: false,
				dataType: 'json',
				success: function (data) {
					_self.currentMoney.money=_self.returnFloat(data);
				}
			});
		},
		returnFloat: function (value) {
 
           var value = Math.round(parseFloat(value) * 100) / 100;
           var xsd = value.toString().split(".");
           if (xsd.length == 1) {
               value = value.toString() + ".00";
               return value;
           }
           if (xsd.length > 1) {
               if (xsd[1].length < 2) {
                   value = value.toString() + "0";
               }
               return value;
           }
       }
	},
	created: function(){
		this.getCurrentMoney();
	}
});