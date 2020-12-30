<template>
  <!--foot 了解我们-->
  <div class="footer flex align-center">
    <div class="foot-link-details flex-center">
      <div class="foot-logo fl relative">
        <div class="foot-logo-img">
          <img src="../assets/logo.png" alt="">
        </div>
        <p class="foot-logo-title font-14 bold">集客云</p>
        <div class="heng-line"></div>
      </div>
      <ul class="foot-item foot-item-phone inline-block none">
        <li class="font-20 bold white">了解我们</li>
        <li class="pointer" @click="">关于我们</li>
        <li class="pointer" @click="">媒体报道</li>
        <li class="pointer" @click="">加入我们</li>
      </ul>
      <ul class="foot-item foot-item-phone inline-block none">
        <li class="font-20 bold white">帮助中心</li>
        <li class="pointer" @click="">常见问题</li>
        <li class="pointer" @click="">如何购买</li>
        <li class="pointer" @click="">产品价格</li>
      </ul>
      <ul class="foot-item flex-center fr foot-item-phone-pc">
        <li class="">联系我们</li>
        <li class="pr-20 pl-20 bold">客服电话：400-800-1990</li>
        <li>周一至周日9:00～19:00</li>
        <li class="hidden">空占位</li>
      </ul>
      <ul class="foot-item foot-item-phone-link">
        <li class="">联系我们</li>
        <li class="pr-20 pl-20 bold">客服电话：400-800-1990</li>
        <li class="foot-item-work-time">周一至周日9:00～19:00</li>
        <li class="hidden">空占位</li>
      </ul>
    </div>
    <div class="footer-line"></div>
    <p class="footer-txt font-14">北京集客科技有限公司&nbsp;&nbsp;©2014-2020&nbsp;&nbsp;京ICP备15028404号-1</p>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
/*_____foot______*/
.footer {
  width: 100%;
  background-color: #2B303B;
  color: #ffffff;
  position: relative;
  padding: 15px 0 60px 0;
}
.foot-link-details {
  margin: 0 auto;
  padding-left: 75px;
}
.foot-logo {
  position: relative;
}
.foot-logo-title {
  line-height: 40px;
  margin-right: 50px;
  margin-left: 22px;
}
.foot-logo-img {
  width: 36px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: -30%;
  transform: translate(-50%, -50%);
  margin-left: 30px;
}

.foot-logo-img img {
  vertical-align: top;
}

.foot-item li {
  font-size: 14px;
  line-height: 40px;
  color: #A5A6AB;
}

.foot-item-phone-link {
  display: none;
}
.footer-line {
  display: block;
  position: absolute;
  content: "";
  width: 621px;
  height: 1px;
  bottom: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #4D525D;
  margin: 0 10px;
}
.heng-line {
  display: block;
  position: absolute;
  content: "";
  width: 1px;
  height: 15px;
  bottom: 30%;
  left: 78%;
  background-color: #4D525D;
}
.footer-txt {
  position: absolute;
  bottom: 12%;
  width: 100%;
  text-align: center;
  color: #A5A6AB;
}
</style>
