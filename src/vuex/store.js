import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/*state组件映射*/
// import {mapState} from 'vuex'
// export default {
//   computed: mapState({
//     count: state => state.count
//   })
// }


/*mutations组件映射*/
// import {mapMutations} from 'vuex'
// export default {
//   methods: mapMutations([
//     'mutationName'
//   ])
// }

/*getters组件映射，二次处理用*/
// import {mapActions} from 'vuex'

// export default {
//   methods: mapActions([
//     'actionName',
//   ])
// }

/*actions组件映射*/
// import {mapGetters} from 'vuex'

// export default {
//   computed: mapGetters([
//     'strLength'
//   ])
// }

//同步，使用 this.$store.commit(object)出发
// const mutations = {};
//异步
// const actions = {};
//状态
const state = {	
	defalueComp:'Carousel',
	tl:{}
}
const mutations = {
	isShow (state,currentview) {
		return state.defalueComp = currentview;
	}
}
const actions = {
	isShow ({context}) {
		commit('isShow')
	}
}
export default new Vuex.Store({
	state,
	mutations,
	actions
});
