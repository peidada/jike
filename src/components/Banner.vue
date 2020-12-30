<template>
  <div class="banner-wrap relative">
    <el-carousel class="pc-carousel" indicator-position="outside" arrow="never" :indicator-position="indicatorPosition" :autoplay="true" :interval="3500">
      <el-carousel-item v-for="(item, index) in bannerImg" :key="index">
        <el-image :src="item.url" alt=""></el-image>

        <div class="banner-inner-wrap">
<!--          <img class="banner-inner" src="../assets/img/banner-inner.png" alt="">-->
        </div>

        <div class="tried-free-btn" @click="modalShow"></div>
      </el-carousel-item>
    </el-carousel>
    <!--phone 轮播图片不一样-->
    <el-carousel class="phone-carousel" indicator-position="outside" arrow="never" :indicator-position="indicatorPosition" :autoplay="true" :interval="3500">
      <el-carousel-item v-for="(item, index) in bannerImgPhone" :key="index">
        <el-image :src="item.url" alt=""></el-image>
        <div class="tried-free-btn" @click="modalShow">立即免费体验</div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      bannerImg: [
        {
          url: require('../assets/img/banner-whole.png')
        }
      ],
      bannerImgPhone: [
        {
          url: require('../assets/img/banner-phone.png')
        },
      ],
      indicatorPosition: 'none',
    }
  },
  mounted() {
    if(this.bannerImg.length > 1) {
      this.indicatorPosition = 'outside'
    }
  },
  watch: {

  },
  methods: {
    modalShow() {
      this.$emit('triedModal')
    }
  }
}
</script>

<style scoped>

</style>
<style>
.banner-wrap{
  height: 655px;
  margin-top: 60px;
  overflow-x: hidden;
}

.phone-carousel {
  display: none;
}

.banner-wrap .el-carousel,
.banner-wrap .el-carousel__container,
.el-carousel__item  {
  height: 100% !important;
  overflow: hidden;
}
.banner-wrap .el-image {
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner-wrap .el-image img{
  width: 1920px;
  object-fit: cover;
}
.banner-wrap .el-carousel__indicators--outside button {
  background-color: rgba(57, 126, 237, .49)!important;
  width: 20px;
  height: 10px;
  border-radius: 9px;
}

.el-carousel__indicators {
  margin-top: -50px;
}

.banner-wrap .el-carousel__indicator.is-active button {
  width: 31px;
  overflow: hidden;
}

.banner-inner-wrap {
  width: 100%;
  position: absolute;
  top: 100px;
  left: 12.1%;
}

.banner-inner {
  width: 454px;
  height: 268px;
}

.tried-free-btn {
  width: 20%!important;
  height: 100px;
  line-height: 43px;
  text-align: center!important;
  /*background-color: #3C90FF;*/
  background-color: transparent;
  color: #ffffff;
  border-radius: 4px;
  position: absolute;
  top: 70%;
  left: 12.1%;
  z-index: 99;
  cursor: pointer;
}
</style>
