<template>
  <div class="toast-bg" v-show="show">
    <div class="toast-container">
      <div class="toast-header">
        {{ title }}
      </div>
      <div class="toast-main">
        <div class="toast-done flex-center">
          <img src="../assets/img/toast-done.png" alt="">
        </div>
        <slot></slot>
      </div>
      <div class="toast-footer">
        <button @click="hideToast">好的</button>
      </div>
      <div class="toast-colse" @click="hideToast">
        <img src="../assets/img/toast-close.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    hideToast() {
      this.$emit('hideToast')
    }
  }
}
</script>

<style scoped>
.toast-bg {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.toast-container {
  width: 387px;
  height: 400px;
  background-color: #FEFEFE;
  background-image: url("../assets/img/toast-bt.png");
  background-repeat: no-repeat;
  background-size: 100%, 100%;
  background-position: bottom;
  border-radius: 8px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
}

.toast-header {
  width: 100%;
  height: 105px;
  line-height: 105px;
  text-align: center;
  font-size: 30px;
  font-weight: 400;
  color: #333333;
  padding-top: 10px;
}

.toast-footer {
  width: 118px;
  height: 34px;
  line-height: 34px;
  background-color: #5196FF;
  border-radius: 4px;
  margin: 0 auto;
  text-align: center;
}

.toast-done {
  width: 100%;
}

.toast-done img {
  width: 108px;
  height: 108px;
}

.toast-footer button {
  font-size: 16px;
  color: #FFFFFF;
}

.toast-colse {
  width: 45px;
  height: 45px;
  position: absolute;
  top: 107%;
  left: 50%;
  transform: translate(-50%, 0%);
  display: none;
}
</style>
