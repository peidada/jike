<template>
  <div class="consult-wrap">
    <el-dialog
      :title= dialogTitle
      :visible.sync="centerDialogVisible"
      width="60%"
      center>
      <iframe :src="peosrc" frameborder="0" class="ifame-height" width="100%"></iframe>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Consult",
  data() {
    return {
      dialogTitle: '咨询服务',
      centerDialogVisible: false,
      peosrc:'',
    }
  },
  created() {
    // this.peosrc='https://webchat.jhwx.com/pageinfo.jsp?version=vip&admiuin=9814692&ltype=1&iscallback=1&page_templete_id=41564&is_message_sms=0&is_send_mail=0&action=acd&acd=1&type_code=601&clientid='+getSession('Admin-userId')
    // this.peosrc='http://office.jhwx.com/vip/leavemsg.do?action=leavemsg&tag=leavemsg&admiuin=9814692&uin=9814706&ltype=1&agentid=&style=6&page=&isMobile=0&iscallback=1&is_message_sms=0&is_send_mail=0&isAgent=0&siteid=&page_templete_id=41624&rand=981469279414919&clientid=&localurl=&nocache=0.7469842904572617'
  },
  mounted() {
    this.monitoring()
  },
  methods: {
    monitoring() {
      this.$on('childMethod', (res) => {
        this.centerDialogVisible = true

        this.peosrc='https://float.jhwx.com/static.jsp?version=vip&admiuin=9814692&ltype=1&iscallback=1&page_templete_id=41564&is_message_sms=0&is_send_mail=0&uin=9814706'
      })
    }
  }
}
</script>

<style scoped>

</style>

<style>
.el-dialog--center .el-dialog__body {
  padding: 0!important;
}
.el-dialog {
  max-width: 750px!important;
}

.el-dialog {
  position: absolute!important;
  top: 26%;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
}
.ifame-height {
  height: 600px;
}
</style>
