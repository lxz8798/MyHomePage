<template>
	<div id="BoxOne">
    <keep-alive>
      <transition name="fade" mode="out-in">
        <template v-if="$store.state.defalueComp === 'Carousel'">
          <carousel></carousel>
        </template>
        <template v-else-if="$store.state.defalueComp === 'SvgIco'">
          <svg-ico></svg-ico>
        </template>
      </transition>
    </keep-alive>
	</div>
</template>

<script>
import myStore from '../vuex/store.js';
import Carousel from '../components/Carousel.vue';
import SvgIco from '../components/SvgIco.vue';
export default {
  name:'BoxOne', 
  components:{Carousel,SvgIco},
  store: myStore,
  data () {
  	return {
      CountDown:{},
      Count:'5'
      // currentview:'Carousel'
    }
  },
  mounted () {
    
  },
  methods: {
    

  }
}

</script>

<style lang="scss" scoped>
@import '../style/scss/BoxOne.scss';

</style>