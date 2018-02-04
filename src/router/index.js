import Vue from 'vue';
import Router from 'vue-router';
import Home from '../view/Home.vue';
import SvgComp from '../view/Svgcomp.vue';
import PSComp from '../view/PS.vue';
import AEComp from '../view/AE.vue';
import CGComp from '../view/CG.vue';
import AIComp from '../view/AI.vue';
import ThreeDComp from '../view/3D.vue';
import PhotoGRComp from '../view/PhotoGR.vue';
import VueHTML from '../view/VueHTML.vue';
import SCSSComp from '../view/SCSS.vue';
import JSComp from '../view/JS.vue';
import CSS3Comp from '../view/CSS3.vue';
import MGComp from '../view/MG.vue';
import SVGComp from '../view/SVG.vue';
import AnimaJSComp from '../view/AnimaJS.vue';
import AnimaThreeDComp from '../view/Anima3D.vue';
import NodeJSComp from '../view/NodeJS.vue';
import TempLateComp from '../view/TempLate.vue';
import LinksComp from '../view/Links.vue';
import AxiosComp from '../view/Axios.vue';

import BoxOne from '../components/BoxOne.vue';
import BoxTwo from '../components/BoxTwo.vue';
import BoxThree from '../components/BoxThree.vue';
import Card from '../components/Card.vue';
import Links from '../components/Links.vue';
Vue.use(Router);

export default new Router({
	// mode:'hash',
	base: __dirname,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
          keepAlive: false, //此组件不需要被缓存
      }
    },
  	{
      path: '/ps',
      name: 'ps',
      component: PSComp,
         
    },
    {
      path: '/ae',
      name: 'ae',
      component: AEComp,
         
    },
    {
      path: '/ai',
      name: 'ai',
      component: AIComp,
         
    },
    {
      path: '/3d',
      name: '3d',
      component: ThreeDComp,
         
    },
    {
      path: '/photogr',
      name: 'photogr',
      component: PhotoGRComp,
         
    },
    {
      path: '/cg',
      name: 'cgcomp',
      component: CGComp,
      
    },
    {
      path: '/vuehtml',
      name: 'vuehtml',
      component: VueHTML,
      
    },
    {
      path: '/axios',
      name: 'axios',
      component: AxiosComp,
      
    },
    {
      path: '/scss',
      name: 'scss',
      component: SCSSComp,
      
    },
    {
      path: '/js',
      name: 'js',
      component: JSComp,
      
    },
    
    {
      path: '/animecss3',
      name: 'animecss3',
      component: CSS3Comp,
      
    },
    {
      path: '/animemg',
      name: 'animemg',
      component: MGComp,
      
    },
    {
      path: '/animesvg',
      name: 'animesvg',
      component: SvgComp,
      
    },
    {
      path: '/animejs',
      name: 'animejs',
      component: AnimaJSComp,
    },
    {
      path: '/anime3d',
      name: 'anime3d',
      component: AnimaThreeDComp,
    },
    {
      path: '/nodejs',
      name: 'nodejs',
      component: NodeJSComp,
    },
    {
      path: '/template',
      name: 'template',
      component: TempLateComp,
    },
    {
      path: '/links',
      name: 'links',
      component: LinksComp,
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
