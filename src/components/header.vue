<template>
  <div class="header header-phone relative" id="boxFixed"><!--:class="{ 'is-fixed' : isFixed }"-->
    <!--移动端顶部改版V2-->
    <div class="h5-top-bg-v2"></div>
    <div class="h5-top-header-v2"></div>
    <div class="header-main margin-auto">
      <div class="head-title head-title-flex">
        <div class="head-title-logo flex-center z-index-99">
          <img src="../assets/logo.png" class="logo mt-5" alt="">
          <span class="head-title-txt flex-center font-16 bold pl-10 z-index-99">集客云</span>
        </div>
        <div class="header-tel-img z-index-99">
          <img src="../assets/img/telephone-num.png" alt="">
        </div>
        <div class="head-title-tip z-index-99">
          在线教育创业一体化解决方案
        </div>
      </div>
<!--          <Menu></Menu>-->
      <!--head右侧-->
      <div class="head-oper font-14 z-index-99">
        <div class="login-btn mr-15 hidden" @click="modalShow">用户登录</div>
        <div class="tried-btn" @click="modalShow">免费试用</div>
      </div>
    </div>

  </div>
</template>

<script>
import Menu from './Menu'

export default {
  name: "Header",
  components: { Menu },
  data() {
    return {
      isFixed: false,
      offsetTop: 0,
      clientHeight: 0
    }
  },
  computed: {},
  mounted() {
    // window.addEventListener('scroll', this.initHeight)
    // this.$nextTick(() => {
    //   let header = document.getElementById('boxFixed');
    //   this.offsetHeight = header.offsetHeight // 顶部高度
    //   this.clientHeight = document.documentElement.clientHeight
    // })
  },
  destroyed() {
    // window.removeEventListener('scroll', this.initHeight)
  },
  methods: {
    initHeight() {
      // var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 当滚动超过 50 时，实现吸顶效果 if (scrollTop > 49) { this.navBarFixed = true } else { this.navBarFixed = false } } }
      // this.isFixed = scrollTop > this.clientHeight-this.offsetHeight ? true : false;
    },
    modalShow() {
      this.$emit('triedModal')
    },
  }
}
</script>

<style scoped>
  @keyframes mymove {
    from { top: -70px; }
    to { top: 0; }
  }
  @-webkit-keyframes mymove {
    from { top: -70px; }
    to { top: 0; }
  }

  .header {
    width: 100vw;
    min-width: 1100px;
    background-size: 99.5% 100%;
    padding: 13px 0;

    display: inline-block;
    content: "";
    background-color: rgba(255, 255, 255, 1) !important;
    color: #002A5F;
    box-shadow: 0 2px 4px 0 #EAECF8;
    position: fixed;
    top: 0;
    z-index: 999;
    overflow-x: hidden;

  }
  .is-fixed {
    width: 100%;
    background-color: rgba(255, 255, 255, 1);
    color: #002A5F;
    position: sticky;
    top: 0;
    box-shadow: 0 2px 4px 0 #EAECF8;
    z-index: 999;
    animation: mymove .3s forwards;
    -webkit-animation: mymove .3s forwards;
  }

  .header-flex-center {
    display: flex;
    justify-content: space-around;
    align-content: center;
  }

  .header-main {
    /*background-color: red;*/
  }
  .head-title-flex {
    display: flex;
    /*justify-content: center;*/
    align-content: center;
  }
  .head-title {
    line-height: 34px;
  }
  .head-title-txt:after {
    display: inline-block;
    position: relative;
    content: "";
    width: 2px;
    height: 16px;
    top: 9px;
    background-color: #002A5F;
    margin: 0 10px;
  }
  .margin-auto {
    width: 1100px;
  }

  .head-title{
    float: left;
  }

  .head-oper {
    display: flex;
    justify-content: flex-end;
    align-content: center;
    width: auto;
    float: right;
    /*margin-top: -34px;*/
  }
  .header-tel-img {
    width: 120px;
    height: 13px;
    margin-left: 50px;
    display: none;
  }
  .head-oper div{
    display: inline-block;
    width: 84px;
    height: 34px;
    line-height: 34px;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
  }
  .login-btn {
    border: 1px solid #FFFFFF;
  }
  .tried-btn {
    background-color: #3C90FF;
    color: #ffffff!important;
    font-size: 14px;
    font-family: SourceHanSansCN-Normal, SourceHanSansCN;
    font-weight: 400;
  }

  .head-title-logo .logo{
    width: 50px;
    height: 23px;
  }
</style>
