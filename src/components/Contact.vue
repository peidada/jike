<template>
  <div class="contact-wrap">
    <div class="contact-main flex space-around">
      <div class="contact-link">
        <p class="stay-link">留下您的联系方式</p>
        <el-form :model="applyForm" :rules="applyRules" ref="applyForm">
          <el-form-item label="" :label-width="formLabelWidth" prop="orgName">
            <el-input v-model="applyForm.orgName" autocomplete="off" placeholder="请输入机构名称" ></el-input>
          </el-form-item>
          <el-form-item label="" class="picker-area" :label-width="formLabelWidth" prop="">
            <i class="down-icon2 down-icon el-icon-arrow-down"></i>
            <i class="down-icon1 down-icon el-icon-arrow-down"></i>
            <v-distpicker hide-area @province="onChangeProvince" @city="onChangeCity"
                          :province="provinceTxt" :city="cityTxt"
            ></v-distpicker>
          </el-form-item>
          <el-form-item label="" class="name inline-block" :label-width="formLabelWidth" prop="name">
            <el-input v-model="applyForm.name" autocomplete="off" placeholder="请输入姓名" ></el-input>
          </el-form-item>
          <el-form-item label="" class="tel" :label-width="formLabelWidth" prop="tel">
            <el-input v-model="applyForm.tel" autocomplete="off" placeholder="请输入手机号" ></el-input>
          </el-form-item>
          <el-form-item class="relative code" label="" :label-width="formLabelWidth" prop="captcha">
            <el-input v-model="applyForm.captcha" autocomplete="off" placeholder="请输入验证码" ></el-input>
            <el-button class="get-info-code" @click="getCode">{{getCodeTxt}}</el-button>
          </el-form-item>
          <el-form-item label="" class="el-form-item-apply inline-block" :label-width="formLabelWidth" prop="">
            <el-button class="appointment" type="primary" :loading="applyLoading" @click="submitForm('applyForm')">预约企业服务顾问</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-divider class="contact-line" direction="vertical"></el-divider>
      <div class="contact-tel">
        <p class="stay-link">立即致电企业服务顾问</p>
        <div class="tel-img">
          <img v-lazy="pageImg.hereImg" alt="立即致电企业服务顾问">
        </div>
        <p class="tel-num bold font-34">400 800 1990</p>
        <p class="work-time font-14">工作时间 周一至周日 10:00～19:00</p>
      </div>
      <!--    -->
      <Toast :show="toastShow" :title="title" @hideToast="hideToast">
        <p class="toast-slot">企业顾问会尽快与您联系！</p>
      </Toast>
    </div>
  </div>
</template>

<script>
import { jqEntryClueData, SendCode} from '@/api/api'
import {checkCode, checkTel} from "../utils/validator";
import VDistpicker from "v-distpicker";
import Toast from "./Toast";

export default {
  name: "Contact",
  components: { VDistpicker, Toast },
  data() {
    return {
      pageImg: {
        hereImg: require("../assets/img/here-person.png"),
      },
      applyForm: {
        name: '',
        orgName: '',
        tel: '',
        captcha: '',
        password: ''
      },
      applyRules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字', trigger: 'blur' }
        ],
        orgName: [
          { required: true, message: '请输入机构名称', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字', trigger: 'blur' }
        ],
        tel: [
          { validator: checkTel, trigger: 'blur' }
        ],
        captcha: [
          { validator: checkCode, trigger: 'blur' }
        ]
      },
      formLabelWidth: '35px',
      dialogFormVisible: false,
      provinceTxt: '',
      cityTxt: '',
      getCodeTxt: "获取验证码",
      applyLoading: false,
      getCodeTime: '',
      timer: null,
      /*toast*/
      toastShow: false,
      title: '预约成功'
    }
  },
  mounted() {},
  methods: {
    // get code action
    getCode() {
      this.SendCode()
    },
    // modal whether show
    triedModal() {
      this.dialogFormVisible = true;
      this.resetForm('applyForm');
    },
    // choose province
    onChangeProvince(e) {
      this.provinceTxt = e.value
    },
    // choose city
    onChangeCity(e) {
      this.cityTxt = e.value
    },
    // get code api
    SendCode() {
      let para = this.applyForm.tel
      if(para == '') {
        this.$message({
          showClose: true,
          message: '请输入手机号',
          type: 'error'
        });
        return false
      }
      SendCode(para).then((res) => {
        if(res.error === 0) {
          this.mobile_code = res.message;

          this.$message({
            showClose: true,
            message: '验证码发送成功',
            type: 'success'
          });
          this.getCodeTimer()
        } else {
          this.$message({
            showClose: true,
            message: res.message,
            type: 'error'
          });
        }
      })
    },
    // timer temp useless
    getCodeTimer() {
      const TIME_COUNT = 60
      if(!this.timer) {
        this.getCodeTime = TIME_COUNT;
        this.timer = setInterval(() => {
          if(this.getCodeTime > 0 && this.getCodeTime <= TIME_COUNT) {
            this.getCodeTime--;
            this.getCodeTxt = this.getCodeTime + '秒后重试'
            return false
          } else {
            this.getCodeTxt = '获取验证码'
            clearInterval(this.timer);
            this.timer = null
          }
        }, 1000)
      }
    },
    // apply imdediately
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if(valid) {
          if(this.applyForm.captcha != this.mobile_code) {
            this.$message({
              showClose: true,
              message: '验证码不正确',
              type: 'error'
            });
            return
          } else {
            this.jqEntryClueData()
          }

        } else {
          console.log('error submit!!');
          return false;
        }
      })
    },
    // form reset
    resetForm(formName) {
      if(this.$refs[formName] !== undefined) {
        this.$refs[formName].resetFields()
      }
    },
    // 录入线索
    jqEntryClueData() {
      let para = {
        name: this.applyForm.name,
        work: this.applyForm.orgName,
        mobile: this.applyForm.tel,
        extent: this.applyForm.orgName, //机构名称
        address: this.provinceTxt,
        city: this.cityTxt,
        code: '',
        intype: 1
      }
      this.applyLoading = true
      jqEntryClueData(para).then(res => {
        if(res.code === 0) {
          this.toastShow = true;
          this.dialogFormVisible = false
          this.applyLoading = false
          this.resetForm('applyForm');
          this.provinceTxt = ''
          this.cityTxt = ''
          clearInterval(this.timer);
          this.timer = null
          this.getCodeTxt = '获取验证码'
        } else {
          this.$message({
            showClose: true,
            message: res.msg,
            type: 'error'
          });
          this.applyLoading = false
        }
      })
    },
    hideToast() {
      this.toastShow = false
    }
  }
}
</script>

<style scoped>
.contact-link{
  width: 50%;
}

.stay-link {
  text-align: center;
  line-height: 100px;
  font-size: 34px;
  font-weight: 400;
  color: #002A5F;
}

.contact-tel {
  width: 500px;
}

.contact-tel p {
  text-align: center;
}
.contact-line {
  margin-left: 100px;
  /*margin: 0 100px;*/
}

.tel-num {
  font-weight: 500;
}

.tel-num,
.work-time {
  color: rgba(0, 42, 95, 1);
}

.contact-wrap .el-divider {
  height: 190px!important;
  background-color: rgba(206, 225, 254, 1) !important;
  margin-top: 60px;
}
</style>

<style>
.contact-wrap {
  width: 100%;
  padding: 36px 0 47px 0;
  background-color: rgba(245, 249, 255, 1);
}

.contact-wrap input,
.contact-wrap .distpicker-address-wrapper select {
  border-radius: 29px!important;
  -webkit-border-radius: 29px!important;
  border: 1px solid rgba(0, 107, 248, 1) !important;
  background-color: rgba(255, 255, 255, 1) !important;
  z-index: 99;
  color: rgba(0, 42, 95, .6) !important;
  -webkit-appearance: none!important;
}

.contact-wrap .distpicker-address-wrapper select {
  float: left;
}

.contact-main {
  width: 1100px;
  margin: 0 auto;
}

.picker-area {
  width: 55%;
}

.picker-area .distpicker-address-wrapper select{
  width: 49%;
}

.name,
.picker-area {
  float: left;
}

.down-icon {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
}
.down-icon1 {
  right: 2%;
}
.down-icon2 {
  left: 42.5%;
}

.tel {
  width: 55%;
  float: left;
}

.name,
.code {
  width: 45% ;
}

.code {
  float: left;
}

.get-info-code {
  position: absolute;
  right: 0;
  top: 0;
  background-color: transparent !important;
  color: #002A5F!important;;
  border: none !important;
  line-height: 18px !important;
  padding-left: 0!important;
  font-weight: inherit!important;
}

.get-info-code:before {
  content: "";
  margin-left: 15px;
  margin-bottom: 2px;
  padding-left: 15px;
  border-left: 1px solid #002A5F;
  height: 12px;
  display: inline-block;
  vertical-align: middle;
}

.get-info-code:hover,
.get-info-code:focus {
  color: rgba(0, 42, 95, 1) !important;
}

.appointment {
  width: 100%;
  border-radius: 29px!important;
  -webkit-border-radius: 29px!important;
  font-size: 18px;
}

.el-form-item-apply {
  width: 100% !important;
}

.tel-img {
  width: 230px;
  height: 162px;
  margin: 0 auto;
}

.contact-link input::-webkit-input-placeholder {
  color: rgba(0, 42, 95, .6) !important;
}

/*__toast____*/
.toast-slot {
  width: 100%;
  text-align: center;
  line-height: 90px;
  color: #666666;
}
</style>
