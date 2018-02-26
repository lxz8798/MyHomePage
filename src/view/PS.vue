<template>
	<div id="PsComp">
		<header-nav></header-nav>
		<div class="PSBanner"><img :src="img" /></div>
		<div class="PsCompBox">
			<img-txt-temp class="p1">
				<span slot="bigt">PS-神器不解释，各种各样的工具和效果都能实现，插件也很强大。</span>
				<span slot="ITT_t1">这张合成图是原创的，看到宝宝的一张照片绝对挺有意思，就拿来练习合成了。</span>
				<span slot="ITT_t2">先放一份素材图</span>
				<span slot="ITT_t3">有点不如意的地方，背景图是来自网上的素材，清晰度不是很高。</span>
				<span slot="ITT_t4"></span>
				<span class="ITTr" slot="ITTr">
					<img :src="img2" />
				</span>
			</img-txt-temp>

			<img-txt-temp  class="p2">
				<span slot="bigt">大概的分层，基础合成以后使用盖印调色。</span>
				<span slot="ITT_t1">合成相对而方还算简单，不是太难。。大致就是素材，蒙版，调光，调色，有想法使用PS基本上什么都做得出来。</span>
				<span slot="ITT_t2">这个合成片子并不算很成功，毕竟只是练习作，需要达到高手的水平还需要长时间的磨练。</span>
				<span slot="ITT_t3"></span>
				<span slot="ITT_t4"></span>
				<span class="ITTr" slot="ITTr">
				<img :src="img3" />
				</span>
			</img-txt-temp>
		</div>
		<my-footer></my-footer>
	</div>
</template>

<script>
import HeaderNav from '../components/MyHeaderNav.vue';
import MyFooter from '../components/MyFooter.vue';
import ImgTxtTemp from '../components/ImgTxtTemp.vue';
export default {
	components:{HeaderNav,MyFooter,ImgTxtTemp},
	data () {
		return {
			img:require('./../assets/img/ts.jpg'),
			img2:require('./..//assets/ps/1.jpg'),
			img3:require('./..//assets/ps/2.jpg'),
		}
	}
}
</script>

<style lang="scss">
@import '../style/scss/Ps.scss';
</style>

