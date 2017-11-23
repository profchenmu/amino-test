function calIp(number){
    if(!/^((\d{1,3})(\s*\.\s*)){3}\d{1,3}$/.test(number)){
        return false;
    }
    let ipNum = number.replace(' ',''), resIp = 0,
        ipArr = ipNum.split('.');
    for(i in ipArr){
        let subNum = ipArr[i]-0, resNum;
        if(subNum>255||subNum<0){
            return false;
            break;
        }
        let d=(ipArr.length-i-1)*8;
        resNum = subNum*Math.pow(2,d);
        resIp+=resNum;
    }
    return resIp;
}
module.exports = calIp;
// console.log(calIp("172.168.5.1"))