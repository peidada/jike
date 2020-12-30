import { get, post, postphp} from './axios.config.js'

export const jqEntryClueData = params => post('https://api.jhwx.com/jhservice/AddUser?ruleid=GZ44&project=425&spread=179&acc=0&jobnum=000075', {data: params}); //JQ系统客户入库
export const SendCode = params => postphp('https://www.jhwx.com/sendmobilecode.php?act=send_mobile_code', {mobile_phone: params}); // 发送验证码

// useless
export const getClueDataNumber = params => get('https://testgmweb.jhwx.com/api/phone/clueData/getClueDataNumber', params);
export const getUinOutConfigMessage = params => post('https://testgmweb.jhwx.com/api/phone/outbound/getUinOutConfigMessage', params);
export const checkOrderPaid = params => get('https://testapp.jhwx.com/lovestudy/api/order/checkOrderPaid', {phone: params});
// useless
