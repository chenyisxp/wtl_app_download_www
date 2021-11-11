<template>
  <div class="app" ref="allPage">
     
       <!-- 部分页面缓存控制 -->
      <transition :name="transitionName">
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>
      </transition>
      <transition :name="transitionName">
            <router-view  v-if="!$route.meta.keepAlive"></router-view>
      </transition>
      
      
      <!-- <div style="position:fixed;top:100px;background:rgba(0,0,0,0.4);color:#fff;padding:5px 5px;height:200px;overflow:auto;z-index:999;">
        {{envType}}
          <div v-for="(item,index) in postDataList" :key="index">
              <span>{{index+1}}、</span>
              <span v-if="item.type=='send'">发送</span>
              <span v-if="item.type=='receive'">接收</span>
              <span>{{item.data}}</span>
          </div>
      </div> -->
  </div>
</template>

<script>
import VUpModal from "@/components/base/versionUpdateModal";
import Vue from 'vue'
import { Toast } from 'mint-ui'
import Loading from "@/components/base/Loading";
import Connecting from "@/components/base/connectingPage";

import { InterfaceService } from '../lib/service'
export default {
  components: {
    Loading,
    Connecting,
    VUpModal
  },
  data: function () {
    return {
     transitionName:'',
      
    }
  },
  methods: {
  },
  mounted () {
  },
  destroyed: function () {
     
  },
  computed: {
     
    },
  watch: {
    //使用watch 监听$router的变化memoryManage
    $route(to, from) {
      //设置不参与动画的路由---页面有个奇怪的bug
      // if(to.path&&to.path=='/memoryManage'){
      //   console.log(333333)
      //   return;
      // }else {
           //如果to索引大于from索引,判断为前进状态,反之则为后退状态
          if(to.meta.index > from.meta.index){
            //前进时
            // if(from.name=='cityListByBoss'){
            //     to.meta.keepAlive = false;  // 让 A 缓存，即不刷新
            // }
          //设置动画名称
          this.transitionName = 'slide-left';
          }else{
            //后退时
            // if(to.name=='cityListByBoss'){
            //     to.meta.keepAlive = false;  // 让 A 缓存，即不刷新
            // }
            this.transitionName = 'slide-right';
          }
      // }
     
    }
  },beforeCreate(){
  }
}
</script>

<style>
@import '../assets/style.css';
@import '../assets/mint-ui.css';
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
    will-change: transform;
    transition: all 500ms;
    position: absolute;
}
.slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
    /*opacity: 0;*/
    display: none;
    transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
    /*opacity: 0;*/
    display: none;
    transform: translate3d(-100%, 0, 0);
}
* {
-webkit-touch-callout:none;
-webkit-user-select:none;
-khtml-user-select:none;
-moz-user-select:none;
-ms-user-select:none;
user-select:none;
}
.app{
  /* opacity: 0.2; */
  background: #01303e
}
</style>
