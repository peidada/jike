<template>
  <div class="now-try flex-center wrap">
    <p class="now-try-txt font-34">现在就让您的教育机构，开始获得线上流量与收入吧</p>
    <p class="now-try-btn pointer" @click="modalShow">立即免费试用</p>
  </div>
</template>

<script>
export default {
  name: "Theme",
  data() {
    return {

    }
  },
  methods: {
    modalShow() {
      this.$emit('triedModal')
    }
  }
}
</script>

<style scoped>
/*____马上试用_____*/
.now-try {
  width: 100%;
  height: 300px;
  background-color: #3C90FF;
  background-image: url("../assets/img/now-try-bg.png");
  /*background-image: url("../assets/img/now-bg.png");*/
  background-size: 1100px;
  background-position: center center;
  background-repeat: no-repeat;
  color: #ffffff;
}
.now-try-txt {
  width: 100%;
  text-align: center;
  line-height: 40px;
  margin-bottom: 30px;
}
.now-try-btn {
  width: 147px;
  line-height: 42px;
  text-align: center;
  background: #FFFFFF;
  border-radius: 4px;
  color: #3C90FF;
  font-size: 18px;
  font-family: SourceHanSansCN-Medium, SourceHanSansCN;
  font-weight: 500;
}
</style>
