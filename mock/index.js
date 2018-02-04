import Mock from 'mockjs';

const axiosData = [];
const cgData = [];
const count = 20;

for(let i = 0; i < count; i++) {
	axiosData.push({
		id:'@id',
		title:'@ctitle(10,20)',
		'status|1':['published','draft'],
		author:'@cname',
		display_time:'@datetime',
		pageviews:'@integer(300,500)'
	})

	cgData.push({
		id:'@id',
		title:'@ctitle(10,20)',
		'status|1':['published','draft'],
		author:'@cname',
		display_time:'@datetime',
		pageviews:'@integer(300,500)'
	})
}

// const axiosPage = {
// 	"errcode":"0",
// 	"errmsg":"success",
// 	"data":{
// 		"expo_audience":"@integer(100,500)",
// 	}
// }

// const cgPage= {
// 	"errcode":"0",
// 	"errmsg":"success",
// 	"data":{
// 		"desk_num": 24, 
// 		"desk_duration": 105.50, 
// 		"per_desk_duration": 25.20
// 	}
// }

// export let axiosPageDate = Mock.mock('/api/axios?parma=123',axiosData);
// export let cgPageData = Mock.mock('/api/cg', cgData);

let axiosPageDate = Mock.mock('/api/axios',axiosData),
	cgPageData = Mock.mock('/api/cg', cgData)

export {
	axiosPageDate
}