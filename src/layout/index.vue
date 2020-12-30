<!--首页-->
<template>
  <div class="app-wrapper">
    <Header class="stickyHead" @triedModal="triedModal"></Header>
    <Banner @triedModal="triedModal"></Banner>
    <!--content top-->
    <div class="content margin-auto">
      <AppMain @triedModal="triedModal"></AppMain>
      <Theme @triedModal="triedModal"></Theme>
    </div>

    <Footer></Footer>

    <!--移动端显示 顶部固定电话-->
    <div class="foot-phone">
      <ul class="foot-link flex-center">
        <li class="link-tel"><img src="../assets/img/footer-phone.png" alt="">
          400电话
          <a class="to-tel" href="tel: 400-800-1990"></a>
        </li>
        <li class="link-free" @click="triedModal">
          <img src="../assets/img/free.png" alt="">
          免费体验
        </li>
      </ul>
    </div>

    <!--在线咨询-->
    <div class="online-service" :class="{ 'service-fixed' : isFixedService }">
      <div class="service-icon-wrap" @mouseenter="mouseenter" @mouseleave="mouseleave">
        <div class="service-icon">
          <i class="el-icon-edit"></i>
          <ul class="service-type" v-show="isService">
            <template v-for="(item, index) in onlineType">
              <!--:class="index === onlineType.length - 1 ? 'last-item-style' : '' "-->
              <li class=""
                  @click="StrToFunc(item.funcName)"
              >{{item.txt}}</li>
            </template>
          </ul>
        </div>
      </div>

      <!--一键回到顶部-->
      <div class="service-icon-wrap" @mouseenter="mouseenter1" @mouseleave="mouseleave1" :class="isFixedService ? '' : 'is-hide'">
        <div class="service-icon to-top mt-35" @click="goTop">
          <i class="el-icon-share"></i>
          <ul class="service-type service-type1" v-show="isTop">
            <template v-for="(item, index) in toTop">
              <li class="">{{item.txt}}</li>
            </template>
          </ul>
        </div>
      </div>

    </div>

    <!--免费试用弹窗-->
    <TryModal ref="tryModalChild"></TryModal>

    <!--客服-->
    <Consult ref="consult"></Consult>
  </div>
</template>

<script>
import Header from '../components/header'
import Banner from '../components/Banner'
import Consult from '../components/Consult'
import TryModal from '../components/TryModal'
import Theme from '../components/Theme'
import Footer from '../components/Footer'
import AppMain from "./AppMain";
import Plan from '../views/plan'

import { checkTel } from '../utils/validator'
import VDistpicker from 'v-distpicker'

export default {
  name: "Layout",
  components: { Header, Banner, Consult, TryModal, Theme, Footer, AppMain, VDistpicker , Plan},
  data() {
    return {
      onlineType: [
        // {
        //   txt: "体验咨询",
        //   funcName: "triedModal"
        // },
        {
          txt: "体验咨询",
          funcName: "clickConsult"
        },{
          txt: "收费咨询",
          funcName: "clickConsult"
        },{
          txt: "案例咨询",
          funcName: "clickConsult"
        }
      ],
      toTop: [
        {
          txt: "返回顶部"
        }
      ],
      isFixedService: false,
      clientHeight: 0,
      isService: false,
      isTop: false,
    }
  },

  created() {},
  mounted() {
    window.addEventListener('scroll', this.initHeight)
    this.$nextTick(() => {
      this.clientHeight = document.documentElement.clientHeight
    })
  },

  methods: {
    //吸顶效果
    initHeight() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.isFixedService = scrollTop > this.clientHeight-100 ? true : false;
    },
    // 客服咨询
    clickConsult() {
      this.$refs.consult.$emit('childMethod', 'false')
    },
    // 免费试用
    triedModal() {
      this.$refs.tryModalChild.triedModal()
    },
    // 在线咨询弹窗
    StrToFunc(funcName) {
      this[funcName]();
    },
    mouseenter() {this.isService = true},
    mouseleave() {this.isService = false},
    mouseenter1() {this.isTop = true},
    mouseleave1() {this.isTop = false},
    // 返回顶部
    goTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 100
        if (top <= 0) {
          clearInterval(timeTop)
        }
      }, 10)
    }
  }
}
</script>

<style scoped>
.app-wrapper {}

/*_____在线咨询______*/
.online-service {
  position: fixed;
  top: 85%;
  right: 0;
  z-index: 1001;
}
.service-icon-wrap {
  padding: 0 50px;
}
.service-icon {
  width: 65px!important;
  height: 65px!important;
  border-radius: 50%;
  -webkit-box-shadow: 0 0 10px -5px #005AF7;
  background-color: #FFFFFF;
  box-shadow: 0 0 10px -5px #005AF7;
  border: 2px solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  color: #409EFF;
  font-weight: bold;
}
.service-type {
  position: absolute;
  width: 110px;
  right: 140px;
  font-weight: normal;
  background: #081533;
  border-radius: 8px;
  color: #FFFFFF;
  line-height: 23px;
  font-size: 14px;
  text-align: center;
  padding: 8px 4px 8px 15px;
}
.service-type:before {
  content: "";
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid rgba(8, 21, 51, 1);
  position: absolute;
  top: 40%;
  right: -8px;
}

.service-type1:before {
  top: 30% !important;
}
.service-type li {
  width: 88%;
  padding: 2px 0;
  text-align: center;
  cursor: pointer;
}

.service-type li:hover {
  text-align: center;
  background-color: #FFFFFF;
  color: rgba(0, 90, 247, 1);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}

/*___在线咨询固定在第二屏幕____*/
.service-fixed {
  position: fixed!important;
  animation: mymove .5s forwards;
  -webkit-animation: mymove .5s forwards; /*Safari and Chrome*/
}

@keyframes mymove {
  from { top: 73%; }
  to { top: 73%;; }
}
@-webkit-keyframes mymove { /*Safari and Chrome*/
  from { top: 73%;; }
  to { top: 73%;; }
}

.is-hide{
  display: none;
}

/*____侧边咨询固定___*/
.online-type li:first-child {
  margin-top: 20px;
}

.online-type li:last-child {
  margin-top: 11.5px;
}

.online-type li {
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  padding: 10px 0;
  margin: 10px auto 0;
}
.last-item-style {
  background-color: rgba(255, 167, 0, 1)!important;
  color: #ffffff!important;
}
/*_____在线咨询结束______*/

/*____移动端显示 bottom_____*/
.foot-phone {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  z-index: 1999;
}
.foot-link {
  color: #ffffff;
  z-index: 99!important;
}
.foot-link li {
  line-height: 3.7rem;
  text-align: center;
  width: 50%;
}
.foot-link img {
  width: 30px;
  height: 30px;
  margin-right: 5px;
}
.link-tel,
.link-free {
  background-color: #FBBC45;
  position: relative;
}

.link-tel {
  background-color: #3A8FFE;
}
.to-tel {
  position: absolute;
  left: 0;
  top: 0;
  display: inline-block;
  width: 100%;
  height: 100%;
}
/*___________*/
</style>
<style>
/*————回到顶部样式修改——————*/
.el-backtop {
  width: 65px!important;
  height: 65px!important;
  box-shadow: 0 0 10px -5px #005AF7;
  border: 2px solid transparent;
}
.el-backtop:hover,
.service-icon:hover {
  width: 65px!important;
  height: 65px!important;
  border: 2px solid rgba(0, 90, 247, 1);
}

.el-icon-caret-top:before {
  font-family: "iconfont";
  content: "\e658" !important;
  font-weight: bold!important;
  font-size: 26px!important;
}
/*——————————*/

/*———免费试用弹窗开始———————*/
.try-modal {}
.try-modal .el-dialog__header {
  padding-top: 43.5px!important;
}
.try-modal .el-dialog {
  max-width: 700px!important;
  height: 500px;
  background-color: transparent;
  background-image: url("../assets/img/try-modal.png");
  background-size: 100% 100%;
  position: absolute!important;
  top: 50%!important;
  left: 50%!important;
  transform: translate(-50%, -50%)!important;
  margin-top: 0!important;
  overflow: hidden;
  border-radius: 18px;
}
.try-modal .el-form {
  width: 340px;
}
.try-modal .try-modal-title {
  margin-bottom: 20px;
  padding-left: 35px;
}

.disabled-bg {
  background-color: #c8c9cc!important;
  position: absolute;
  top: 51%;
  left: 82%;
  transform: translate(-50%, -50%);
  padding: 8px 10px;
  border: none!important;
}

.disabled-bg:hover {
  background-color: #c8c9cc!important;
}
.active-bg {
  background-color: rgba(251, 188, 69, 1) !important;
}
.try-modal .apply-btn {
  background-color: rgba(251, 188, 69, 1);
  margin-left: 35px;
  width: 305px;
  border: none!important;
  font-size: 16px;
}

.apply-btn:hover {
  background-color: rgba(251, 188, 69, 1) !important;
}

.try-modal .get-code-btn{
  text-align: center;
  background-color: rgba(251, 188, 69, 1);
  position: absolute;
  width: 90px;
  top: 51%;
  left: 82%;
  transform: translate(-50%, -50%);
  padding: 8px 0;
  border: none!important;
}

.try-modal .el-dialog__close {
  color: rgba(255, 255, 255, .6)!important;
  font-size: 30px!important;
}
.try-modal .el-form-item {
  margin-bottom: 18px!important;
}
/*____免费试用弹窗结束_____*/

.try-modal .distpicker-address-wrapper select {
  width: 49.3% !important;
}

.distpicker-address-wrapper select,
.try-modal input::-webkit-input-placeholder {
  color: #A5A6AB!important;
}
</style>

<style>
.service-icon .el-icon-edit:before {
  font-family: "iconfont";
  content: "\E68d" !important;
}

.service-icon .el-icon-share:before {
  font-family: "iconfont";
  content: "\E658" !important
}
</style>
