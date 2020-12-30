<template>
  <!--免费试用弹窗-->
  <div class="try-modal">
    <el-dialog title="" :visible.sync="dialogFormVisible" center>
      <p class="try-modal-title white font-20 bold">申请免费试用</p>
      <el-form :model="applyForm" :rules="applyRules" ref="applyForm">
        <el-form-item label="" :label-width="formLabelWidth" prop="orgName">
          <el-input v-model="applyForm.orgName" autocomplete="off" placeholder="请输入机构名称" ></el-input>
        </el-form-item>
        <el-form-item label="" :label-width="formLabelWidth" prop="">
          <i class="down-icon2 down-icon el-icon-arrow-down"></i>
          <i class="down-icon1 down-icon el-icon-arrow-down"></i>
          <v-distpicker hide-area @province="onChangeProvince" @city="onChangeCity"
                        :province="provinceTxt" :city="cityTxt"
          ></v-distpicker>
        </el-form-item>
        <el-form-item label="" :label-width="formLabelWidth" prop="name">
          <el-input v-model="applyForm.name" autocomplete="off" placeholder="请输入姓名" ></el-input>
        </el-form-item>
        <el-form-item label="" :label-width="formLabelWidth" prop="tel">
          <el-input v-model="applyForm.tel" autocomplete="off" placeholder="请输入手机号" ></el-input>
        </el-form-item>
        <el-form-item class="relative" label="" :label-width="formLabelWidth" prop="captcha">
          <el-input v-model="applyForm.captcha" autocomplete="off" placeholder="请输入验证码" ></el-input>
          <el-button class="get-code-btn" type="primary" :class="btnDisabled ? 'disabled-bg' : ''" :disabled="btnDisabled" :loading="btnLoading" @click="getCode">{{getCodeTxt}}</el-button>
        </el-form-item>
        <el-form-item label="" :label-width="formLabelWidth" class="none" prop="password">
          <el-input v-model="applyForm.password" autocomplete="off" placeholder="请输入6-16位密码" ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="apply-btn" type="primary" :loading="applyLoading" @click="submitForm('applyForm')">立即申请</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!--    -->
    <Toast :show="toastShow" :title="title" @hideToast="hideToast">
      <p class="toast-slot">企业顾问会尽快与您联系！</p>
    </Toast>
  </div>
</template>

<script>
import { jqEntryClueData, SendCode} from '@/api/api'
import {checkTel, checkCode} from "../utils/validator";
import VDistpicker from "v-distpicker";
import Toast from "./Toast";

export default {
  name: "TryModal",
  components: { VDistpicker, Toast },
  data() {
    return {
      applyForm: {
        name: '',
        orgName: '',
        // tel: '17600298515',
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
      applyLoading: false,
      btnLoading: false,
      dialogFormVisible: false,
      provinceTxt: '',
      cityTxt: '',
      btnDisabled: false,
      getCodeTxt: "获取验证码",
      timer: null,
      /*toast*/
      toastShow: false,
      title: '申请成功',
    }
  },
  methods: {
    hideToast() {
      this.toastShow = false
    },
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
        console.log(res, 'SendCode');
        if(res.error === 0) {
          this.mobile_code = res.message;

          this.btnDisabled = true
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
            this.btnDisabled = true
            this.getCodeTime--;
            this.getCodeTxt = this.getCodeTime + '秒后重试'
          } else {
            this.getCodeTime = 0;
            this.getCodeTxt = '获取验证码'
            this.btnDisabled = false
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
          this.provinceTxt = '';
          this.cityTxt = '';
          clearInterval(this.timer);
          this.timer = null
          this.getCodeTxt = '获取验证码'
          this.btnDisabled = false
          this.dialogFormVisible = false
          this.applyLoading = false
        } else {
          this.$message({
            showClose: true,
            message: res.msg,
            type: 'error'
          });
          this.applyLoading = false
        }
      })
    }
  }
}
</script>

<style scoped>
/*____免费试用弹窗样式 在首页_____*/

</style>
