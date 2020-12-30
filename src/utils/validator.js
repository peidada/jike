export const checkCode = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('请输入验证码'));
  } else {
    callback()
  }
}

export const checkTel = (rule, value, callback) => {
  var myreg = /^1(3|4|5|6|7|8|9)\d{9}$/;
  if (!value) {
    return callback(new Error('请输入手机号'));
    return
  } else if(!myreg.test(value)){
    return callback(new Error('请输入正确到手机号'));
  } else {
    callback()
  }
}
