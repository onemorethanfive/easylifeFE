var vm = new Vue({
	el:'#app',
	data: function(){
		return {
			loginform:{
				account:'',
				password:''
			}
		}
	},

	methods: {
		login: function(){
			var _self = this;
			var loginform=_self.loginform;
			$.ajax({
				type: "post",
				url: 'http://localhost:6060/user/signUp',
				async: false,
				dataType: 'json',
				data:JSON.stringify(loginform),
				success: function (data) {
					
					window.location.href='index.html';
				}
			});
		}
	},
	created: function(){
		
	}
});