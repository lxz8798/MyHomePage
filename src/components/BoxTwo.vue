<template>
<div id="BoxTwo">
  <scale-module></scale-module>
  
</div>
</template>

<script>
import ScaleModule from '../components/S3D.vue';
export default {
	name:'boxtwo',
  components:{ScaleModule}
}
</script>

<style lang="scss" scoped>
@import './src/style/scss/BoxTwo.scss';
</style>