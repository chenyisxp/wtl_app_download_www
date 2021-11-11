<template>
  <div class="mainBox">
    <span class="head1">iwtl下载</span>
    <img src="../assets/images/bgMini1.jpg">
    <div class="detailWord">Designed for WTL welding machine, a new era of intelligent weld</div>
    <div class="btnBox" @click="downloadFile('android')"><span class="dBox">安卓应用下载</span></div>
    <div class="btnBox_ios" @click="downloadFile('ios')"><span class="dBox">苹果应用下载</span></div>
  </div>
</template>

<script>
//引入远程访问service
import { MessageBox ,Popup,Toast ,Indicator } from 'mint-ui'
export default {
  name: 'register',
  components: {
   MessageBox
  },
  data () {
    return {
    
     } 
  },

  methods: {
    downloadFile(type){
      if(type == 'ios'){
        // window.open("http://begin.shwtl.net:3000/download/ios/")
        window.open("https://itunes.apple.com/app/apple-store/id1557474403")
      }else{
        window.open("http://begin.shwtl.net:3000/download/android/")
      }
    },
    testAndroidset(){
      var aa=  window.android.setSettingInfo("unit","MM");
      Toast({
            message: '成功!'+aa,
            position: 'middle',
            iconClass: 'icon icon-success',
            duration: 2500
        });
    },
    testAndroidget(){
      var aa=  window.android.getSettingInfo("unit");
      Toast({
            message: '成功!'+aa,
            position: 'middle',
            iconClass: 'icon icon-success',
            duration: 2500
        });
    },
    testSqliteset(){
      //设值
       var aa=  window.android.testSqliteset("chenyi",10);
    },
    testSqliteget(){
      //取值
       var aa=  window.android.testSqliteget();
       this.returnmsg=aa;
      Toast({
            message: '成功!npm'+aa,
            position: 'middle',
            iconClass: 'icon icon-success',
            duration: 2500
        });
    },
    //更新
    testSqliteupdate(){
      window.android.testSqliteupdate();
    },
     //删除
    testSqlitedelete(){
      window.android.testSqlitedelete();
    }
  },
  mounted: function () {
    
  },
  created () {
   
  },
  computed:{
       
  }
}
</script>

<style scoped lang="scss">
.mainBox{
  background: #fff;
  height: 100vh;
  position: relative;
  text-align: center;
  .head1{
    font-size: 18px;
    position: absolute;
    left: 50%;
    top:2rem;
    margin-left: -32px;
    color: #fff;

  }
  .detailWord{
    text-align: center;
    padding: 0 20px;
    color: #000;
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 2rem;
  }
  img{
    width: 100%;
  }
  .btnBox{
    margin: 0 auto;
    background: #07c160;
    width: 80%;
    height: 3rem;
    line-height: 3rem;
    color: #fff;
    border-radius: 5px;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 1rem;
    .dBox{
      display: inline-block;
      position: relative;
      &::before{
        top:50%;
        left: -30px;
        transform: translate(0,-50%);
        position: absolute;
        content: '';
        display: inline-block;
        background: url(../assets/images/androidIcon.png);
        background-repeat: no-repeat;
        background-size: contain;
        width: 25px;
        height: 25px;
      }
    }
    
  }
  .btnBox_ios{
    background: #07c160;
    width: 80%;
    margin: 0 auto;
    height: 3rem;
    line-height: 3rem;
    color: #fff;
    border-radius: 5px;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    .dBox{
      display: inline-block;
      position: relative;
      &::before{
        top:50%;
        left: -30px;
        transform: translate(0,-50%);
        position: absolute;
        content: '';
        display: inline-block;
        background: url(../assets/images/iosIcon.png);
        background-repeat: no-repeat;
        background-size: contain;
        width: 25px;
        height: 25px;
      }
    }
    
  }
}
 /*iPhone6/7/8*/
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-device-pixel-ratio: 2) {
    /* .属性名{
      ...样式
    } */
  }

  /*iPhone6/7/8 Plus*/
  @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-device-pixel-ratio: 3) {
    /* .属性名{
      ...样式
    } */
  }

  /*iPhone X*/
  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-device-pixel-ratio: 3) {
    /* .属性名{
      ...样式
    } */
  }

  /*移动端竖屏 css*/
  @media only screen and (orientation: portrait) {
    /* .属性名{
      ...样式
    } */
  }

  /*移动端横屏 css*/
  @media only screen and (orientation: landscape) {
    /* .属性名{
      ...样式
    } */
  }

  /* 判断ipad */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    /* .属性名{
      ...样式
    } */
  }

  /* ipad横屏 */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
    /* .属性名{
      ...样式
    } */
  }

  /* ipad竖屏 */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    /* .属性名{
      ...样式
    } */
  }

  /* 判断iphone5 */ /* 横屏竖屏判断方法与ipad一样 */
  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
    /* .属性名{
      ...样式
    } */
  }

  /* 判断iphone4-iphone4s */ /* 横屏竖屏判断方法与ipad一样 */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    /* .属性名{
      ...样式
    } */
  }
</style>
