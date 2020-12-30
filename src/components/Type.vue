<template>
  <!--学校类型-->
  <div class="choose-type">
    <p class="main-plan-tip font-34" style="margin-bottom: 30px;">用心产品、专业服务、客户满意</p>

    <ul class="main-plan-type flex wrap space-between"><!--choose-list flex space-between-->
      <li class="choose-item flex align-center space-around" v-for="(item, index) in chooseType">
        <div class="item-img">
          <img v-lazy="item.img" :alt="item.title">
          <div class="triggle none">
            <img class="" src="../assets/img/type/triggle.png" alt="">
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Type",
  data() {
    return {
      chooseType: [
        {
          img: require("../assets/img/type/type1.png")
        },{
          img: require("../assets/img/type/type2.png")
        },{
          img: require("../assets/img/type/type4.png")
        },{
          img: require("../assets/img/type/type9.png")
        },{
          img: require("../assets/img/type/type8.png")
        },{
          img: require("../assets/img/type/type12.png")
        },{
          img: require("../assets/img/type/type3.png")
        },{
          img: require("../assets/img/type/type11.png")
        },{
          img: require("../assets/img/type/type5.png")
        },{
          img: require("../assets/img/type/type6.png")
        },{
          img: require("../assets/img/type/type10.png")
        },{
          img: require("../assets/img/type/type7.png")
        },{
          img: require("../assets/img/type/type13.png")
        },{
          img: require("../assets/img/type/type14.png")
        },{
          img: require("../assets/img/type/type15.png")
        }
      ],
    }
  }
}
</script>

<style scoped>
.main-plan-tip {
  text-align: center;
  position: relative;
  line-height: 88px;
  color: #002A5F;
  padding-top: 39px;
  margin-bottom: 40px;
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

/*____学校类型______*/
.main-plan-type {
  width: 1100px;
  margin: 0 auto 20px;
}

.choose-type {
  padding: 4px 0 24px 0;
}

.choose-type .choose-item{
  width: 166px;
  height: 200px;
  /*margin: 0 20px;*/
  background-image: url("../assets/img/type/triggle.png");
  background-repeat: no-repeat;
  background-size: 170px 154px;
  background-position: center;
  border: 1px solid transparent;
  box-sizing: border-box;
  margin-right: 30px;
}

.choose-type .choose-item:nth-child(5),
.choose-type .choose-item:nth-child(10),
.choose-type .choose-item:nth-child(15) {
  margin-right: 0!important;
  /*visibility: hidden;*/
}

.choose-type .item-img {
  width: 108px;
  height: 94px;
  position: relative;
}

.triggle {
  width: 130px;
  height: 123px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -99;
}

.choose-item:hover {
  width: 166px;
  height: 200px;
  background: #FBFDFF;
  box-shadow: 0 0 8px -4px #0089FF;
  border-radius: 7px;
  border: 1px solid #3C90FF;
}

/*___________________*/
</style>
