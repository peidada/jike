<template>
  <div class="dash-wrap">
    <!--为在线教育客户提供全面一体化解决方案-->
    <div class="main-plan" style="margin-bottom: 150px;">
      <p class="main-plan-tip font-34">为在线教育客户提供全面一体化解决方案</p>
      <div class="plan-img">
        <img v-lazy="pageImg.planImg" alt="解决方案">
      </div>

    </div>
    <!--营销云-->
    <div class="main-type main-type-cloud type-bg no-padt relative">
      <div class="oval-radius"></div>
      <div class="main-type-main main-type-main-200 flex align-center space-between">
        <div class="main-type-txt">
          <p class="main-type-title font-34">营销云</p>
          <p class="line"></p>
          <p class="main-type-detail font-18">在线客服、活动设计、多渠道助推广，完善的分销、返利体系，助你快速拥有客户</p>
          <p class="main-tried-btn flex align-center" @click="modalShow"><img src="../../assets/img/jiao.png" class="jiao" alt=""> 立即免费试用</p>
        </div>
        <div class="main-type-right">
          <img v-lazy="pageImg.yunImg" alt="营销云">
        </div>
      </div>
    </div>
    <!--销售云-->
    <div class="main-type main-type1 main-type-pc flex space-between align-center">
      <div class="main-type-right">
        <img v-lazy="pageImg.salesImg" alt="销售云">
      </div>
      <div class="main-type-txt">
        <p class="main-type-title font-34">智慧销售云</p>
        <p class="line"></p>
        <p class="main-type-detail font-18">自定义销售流程、智能分配线索，一键云呼叫，数据实时掌控，便捷客户管理</p>
        <p class="main-tried-btn" @click="modalShow"> <img src="../../assets/img/jiao.png" class="jiao" alt=""> 立即免费试用</p>
      </div>
    </div>
    <!--销售云 __ 移动端-->
    <div class="main-type main-type-phone flex-center">
      <div class="main-type-txt">
        <p class="main-type-title font-34">智慧销售云</p>
        <p class="line"></p>
        <p class="main-type-detail font-18">自定义销售流程、智能分配线索，一键云呼叫，数据实时掌控，便捷客户管理</p>
        <p class="main-tried-btn" @click="modalShow"> <img src="../../assets/img/jiao.png" class="jiao" alt=""> 立即免费试用</p>
      </div>
      <div class="main-type-right">
        <img v-lazy="pageImg.salesImg" alt="销售云">
      </div>
    </div>
    <!--教务系统-->
    <div class="main-type type-bg">
      <div class="main-type-main flex align-center space-between">
        <div class="main-type-txt">
          <p class="main-type-title font-34">教务系统</p>
          <p class="line"></p>
          <p class="main-type-detail font-18">销售系统自动对接教务系统，精细服务于学生，测评系统智能化满足您的用户需求</p>
          <p class="main-tried-btn" @click="modalShow"> <img src="../../assets/img/jiao.png" class="jiao" alt=""> 立即免费试用</p>
        </div>
        <div class="main-type-right">
          <img v-lazy="pageImg.deanImg" alt="教务系统">
        </div>
      </div>

    </div>
    <!--网校系统-->
    <div class="main-type main-type1 main-type-pc  flex space-between align-center">
      <div class="main-type-right">
        <img v-lazy="pageImg.allImg" alt="网校系统">
      </div>
      <div class="main-type-txt">
        <p class="main-type-title font-34">全体系网校系统</p>
        <p class="line"></p>
        <p class="main-type-detail font-18">PC、H5、APP多端网校，随时开课，CDN加速上课不卡顿海量名师录制精品视频课程 资源，随您需求，为您定制</p>
        <p class="main-tried-btn" @click="modalShow"> <img src="../../assets/img/jiao.png" class="jiao" alt=""> 立即免费试用</p>
      </div>
    </div>
    <!--网校系统 ___ 移动-->
    <div class="main-type main-type-phone flex-center">
      <div class="main-type-txt">
        <p class="main-type-title font-34">全体系网校系统</p>
        <p class="line"></p>
        <p class="main-type-detail font-18">PC、H5、APP多端网校，随时开课，CDN加速上课不卡顿海量名师录制精品视频课程 资源，随您需求，为您定制</p>
        <p class="main-tried-btn" @click="modalShow"> <img src="../../assets/img/jiao.png" class="jiao" alt=""> 立即免费试用</p>
      </div>
      <div class="main-type-right">
        <img v-lazy="pageImg.allImg" alt="网校系统">
      </div>
    </div>
    <!--why choose-->
    <div class="choose-reason choose-reason-pc">
      <p class="main-plan-tip font-34">为什么选择集客云</p>
      <ul class="choose-list main-type1 choose-list-pc flex space-between">
        <li class="choose-item flex-center wrap" v-for="(item, index) in chooseObj">
          <div class="item-img">
            <img v-lazy="item.img" :alt="item.title">
          </div>
          <p class="choose-item-title font-24">{{item.title}}</p>
          <p class="choose-item-tip font-16">{{item.tip}}</p>
          <p class="choose-item-tip font-16">{{item.tip1}}</p>
        </li>
      </ul>
    </div>
    <!--why choose ---- 移动端-->
    <div class="choose-reason choose-reason-phone">
      <p class="main-plan-tip font-34">为什么选择集客云</p>
      <ul class="choose-list-phone flex space-around wrap">
        <li class="choose-item-phone fl"  v-for="(item, index) in chooseObj">
          <div class="choose-item-img-phone fl">
            <img v-lazy="item.img" alt="">
          </div>
          <div class="fr choose-item-phone-txt">
            <p class="choose-item-title-phone">{{item.title}}</p>
            <p class="">{{item.tip}}</p>
            <p class="">{{item.tip1}}</p>
          </div>
        </li>
      </ul>
      <ul class="choose-list flex space-between">
        <li class="choose-item flex-center wrap" v-for="(item, index) in chooseObj">
          <div class="item-img">
            <img v-lazy="item.img" :alt="item.title">
          </div>
          <p class="choose-item-title font-22">{{item.title}}</p>
          <p class="choose-item-tip font-16">{{item.tip}}</p>
          <p class="choose-item-tip font-16">{{item.tip1}}</p>
        </li>
      </ul>
    </div>
    <!--学校类型-->
    <Type></Type>
    <Contact @triedModal="modalShow"></Contact>
  </div>
</template>

<script>
import Type from "../../components/Type";
import Contact from "../../components/Contact";

export default {
  name: "Dashboard",
  components: { Type, Contact },
  data() {
    return {
      pageImg: {
        planImg: require("../../assets/img/plan.png"),
        yunImg: require("../../assets/img/yun.png"),
        salesImg: require("../../assets/img/sales.png"),
        deanImg: require("../../assets/img/dean.png"),
        allImg: require("../../assets/img/all.png"),
      },
      chooseObj: [
        {
          title: "只做教育",
          img: require("../../assets/img/why1.png"),
          tip: "只做教育服务",
          tip1: "更了解教育机构",
        }, {
          title: "产品全面",
          img: require("../../assets/img/why2.png"),
          tip: "获客到复购",
          tip1: "一站全面解决",
        }, {
          title: "技术放心",
          img: require("../../assets/img/why3.png"),
          tip: "产品迭代多年",
          tip1: "系统稳定放心",
        }, {
          title: "专业服务",
          img: require("../../assets/img/why4.png"),
          tip: "客服极速响应",
          tip1: "问题专业解决",
        }
      ],
      chooseType: [
        {
          title: "京华教育",
          img: require("../../assets/img/type1.png"),
          tip: "我们是一家十余年的教育机构，集客云非常了解我们的痛点，根据我们的需求为我们部署了全套的产品服务。帮助我们解决了线上获客、销售、学员上课、报考。\n" +
            "非常感谢集客云的专业云服务，让我们公司去年流水增加1000%，2020年上半年公司线上业绩同比增加500%，在这样的高速增长下，集客云发挥了非常稳定的表现，让我们实现顺利转型。",
        }, {
          title: "胜学教育",
          img: require("../../assets/img/type2.png"),
          tip: "我们是一家十余年的教育机构，集客云非常了解我们的痛点，根据我们的需求为我们部署了全套的产品服务。帮助我们解决了线上获客、销售、学员上课、报考。\n" +
            "非常感谢集客云的专业云服务，让我们公司去年流水增加1000%，2020年上半年公司线上业绩同比增加500%，在这样的高速增长下，集客云发挥了非常稳定的表现，让我们实现顺利转型。",
        }, {
          title: "慧众教育",
          img: require("../../assets/img/type3.png"),
          tip: "我们是一家十余年的教育机构，集客云非常了解我们的痛点，根据我们的需求为我们部署了全套的产品服务。帮助我们解决了线上获客、销售、学员上课、报考。\n" +
            "非常感谢集客云的专业云服务，让我们公司去年流水增加1000%，2020年上半年公司线上业绩同比增加500%，在这样的高速增长下，集客云发挥了非常稳定的表现，让我们实现顺利转型。",
        }
      ],
    }
  },
  methods: {
    modalShow() {
      this.$parent.modalShow()
    }
  }
}
</script>

<style scoped>
/*___主体宽度固定____*/
.main-type,
.choose-list-pc {
  width: 100%;
  margin: 0 auto;
}

.main-type1 {
  width: 1100px;
}
.type-bg {
  padding: 30px 0;
  width: 100% !important;
  display: flex;
  justify-content: center;
  background-color: rgba(247, 249, 255, 1);
}

.main-type-main {
  width: 1100px;
  z-index: 99;
}

.main-type-main-200 {
  margin-top: -143px;
}

.main-type-cloud {
  height: 382px!important;
}

.main-plan {
  width: 100%;
  height: 700px;
  margin-bottom: 60px;
  position: relative;
}

.oval-radius {
  width: 130%;
  padding: 30px 300px;
  height: 260px;
  border: 1px solid #F8FAFC;
  border-radius: 50% 50% 0 0/100% 100% 0 0;
  border-bottom: none;
  position: absolute;
  left: 50%;
  top: -198px;
  transform: translate(-50%, 0);
  bottom: 0;
  background: rgba(247, 249, 255, 1);
  z-index: 1;
}

.main-plan-tip {
  text-align: center;
  position: relative;
  line-height: 90px;
  color: #002A5F;
  margin-bottom: 50px;
  margin-top: 42px;
}
.main-plan-tip:after {
  content: "";
  display: block;
  position: relative;
  width: 64px;
  height: 6px;
  background: #2FCEE3;
  border-radius: 3px;
  left: 48%;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-top-right-radius: 7px;
  border-top-left-radius: 7px;
}
.plan-img {
  width: 867px;
  height: 498px;
  margin: 0 auto;
}

/*________________*/
.main-plan {
  width: 100%;
  height: 700px;
  position: relative;
}

/*___主体宽度固定____*/
.main-type {
  height: 560px;
}

/*————营销云——————*/
.main-type-txt {
  /*width: 550px;*/
  width: 345px;
}
.type-bg .main-type-txt{
  /*margin-right: 5%;*/
}
.main-type-title {
  color: #002A5F;
}
.line {
  width: 197px;
  height: 5px;
  background-color: #E3EFFF;
  border-bottom-right-radius: 7px;
  border-top-right-radius: 7px;
  margin: 23px 0 26px 0;
  position: relative;
}
.line:after {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 13.8%;
  transform: translate(-50%, -50%);
  width: 54px;
  height: 6px;
  background-color: #2FCEE3;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
}
.main-type-detail {
  font-size: 18px;
  color: #002A5F;
  line-height: 27px;
}
.main-tried-btn {
  color: #3C90FF;
  cursor: pointer;
  position: relative;
  padding-left: 18px;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  margin-top: 21px;
}
.main-tried-btn:hover {
  color: #0A5FD0;
}
.jiao {
  width: 14px;
  height: 13px;
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translate(-50%, -50%);
}
.main-type-right {
  width: 530px;
  height: 480px;
}

.choose-reason-pc {
  padding-top: 1px;
  display: block;
}
.choose-reason {
  background-color: #F5F9FF;
  padding-bottom: 70px;
}

.choose-item {
  width: 253px;
  min-height: 303px;
  background: #FFFFFF;
  border-radius: 6px;
  color: #002A5F;
  box-shadow: 0 4px 5px 0 rgba(0,0,0,0);
}

.choose-item:hover {
  transform: translate(0, -7px);
  transition: .2s linear .2s;
  box-shadow: 0 4px 5px 0 #D9E5FF;
}

.choose-item:last-child {
  margin-right: 0;
}
.choose-item p {
  width: 100%;
  text-align: center;
}
.item-img {
  width: 103px;
  height: 90px;
  transition: all .3s;
}

.choose-item-title {
  line-height: 60px;
}
.choose-item-tip {
  color: #002A5F;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  line-height: 32px;
}

/*_____移动端 为什么选择部分 样式重写______*/
.choose-reason-phone {
  display: none;
}
.choose-list-phone {
  width: 95%;
  margin: 0 auto;
}
.choose-item-phone {
  width: 47%;
  background-color: #ffffff;
  margin-bottom: 1rem;
  padding: 1rem 0 1rem 5px;
  border-radius: 3px;
}
.choose-item-img-phone {
  width: 38%;
  height: 4rem;
  padding-right: 5px;
  margin-top: 10px;
}
.choose-item-phone-txt {
  width: 60%;
}
.choose-item-phone-txt p {
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.choose-item-title-phone {
  font-size: 1.2rem!important;
  padding-bottom: 5px;
}
.appointment {
  width: 96% !important;
}
/*___________*/
</style>
