export default {
	//储存
	state:{
		tl:""
	},
	//输出
	getters:{

	},
	//提交并修改，同步
	mutations:{
		showTl(state){
			console.log(state.tl);
		}
	},
	//异步
	actions:{
		newTl({commit,state}){

		}
	}
}