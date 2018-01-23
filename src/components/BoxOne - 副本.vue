<template>
	<div id="BoxOne" @mousemove="Count">
    <header-nav></header-nav>
    <keep-alive>
      <transition name="fade" mode="out-in">
        <c-arousel :is="currentView"></c-arousel>
      </transition>
    </keep-alive>
	</div>
</template>

<script>
import HeaderNav from '../components/MyHeaderNav.vue';
import SvgIco from '../components/SvgIco.vue';
import Carousel from '../components/Carousel.vue';
export default { 
  components:{
    Carousel,
    SvgIco,
    HeaderNav
  },
  data () {
  	return {
      currentView: 'Carousel',
    }
  },
  methods: {
    Count() {
      let me = this;
      let interval = setInterval(function(){
        if (me.currentView == '') {
          me.currentView = 'Carousel';
          clearInterval(interval);
        } else {
          me.currentView = 'SvgIco';
        }
      },1000);
    }
  }
}

</script>

<style lang="scss" scoped>
@import '../style/scss/BoxOne.scss';

</style>