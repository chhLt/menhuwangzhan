import {formatDateTime_YMDHMS,formatDateTime_YMD} from './FormatDateTime';
import {CodeToText} from 'element-china-area-data';
/**
 * 格式化时间
 *@param val 为时间戳
 *@example 2018年01月28日 00:00:00
 */
const formatDate_YMDHMS = (val)=>{
    return formatDateTime_YMDHMS(val)
}

/**
 * 格式化时间
 *@param val 为时间戳
 *@example 2018-02-23
 */
const formatDate_YMD = (val)=>{
    return formatDateTime_YMD(val)
}

/**
 * 过滤专利类型
 *@param val 为专利类型
 *@example String
 */
const patentTypeFilter = (val)=>{
    let tempText = ''
    switch (val){
        case '1':
            tempText = "实用新型"
        break;
        case '2':
            tempText = "外观设计"
        break;
        case '3':
            tempText = "发明"
        break;
    }
    return tempText
}
/**
 * 过滤图片url地址是否有效
 *@param val url
 *@example String
 */
const imgUrlFilter = (val) =>{
    let imgUrlArr = val.split('&');
    if(imgUrlArr!=""){
        let defaultArr = imgUrlArr[1].split('=')
        if(defaultArr[1] !="null"){
            return val
        }else{
            return require('../../assets/images/defalt_avatar.png');
        }
    }
}

/**
 * 过滤项目状态
 *@param val 为专利状态
 *@example String
 */
const projectStateFilter = (val) =>{
    if(val == "1"){
        return "发布中"
    }else{
        return "已结束"
    }
}

/**
 * 过滤交易状态
 *@param val 为交易状态
 *@example String
 */
const bargainStateFilter = (val) =>{
    if(val == "1"){
        return "待交易"
    }else{
        return "已完成"
    }
}


/**
 * 过滤法律状态
 *@param val 为法律状态
 *@example String
 */
const lawStateFilter = (val) =>{
    if(val == "1"){
        return "授权未下证"
    }else{
        return "已下证"
    }
}
/**
 * 过滤实名认证状态
 *@param val 为认证状态
 *@example String
 */
const certifiedStateFilter = (val) =>{
    if(val == "1"){
        return "已认证"
    }else{
        return "未认证"
    }
}


/**
 * 过滤价格
 *@param val 为价格
 *@example String
 */
const priceFilter = (val) =>{
    if(val == 0){
        return '价格面议'
    }else{
        return '￥'+val
    }
}
/**
 * 过滤地址
 *@param val 为带|的字符串
 *@example String
 */
const addressFilter = (val)=>{
    let attr = val.split('|')
    return CodeToText[attr[0]] + CodeToText[attr[1]] + CodeToText[attr[2]]
}

/**
 * 过滤合作类型
 *@param val 为类型
 *@example String
 */
const cooperationFilter = (val) =>{
    if(val == undefined){
        return
    }else{
        let desc = '';
        let vals = val.split('|')
        for(let i in vals){
            switch (vals[i]){
                case '1':
                    desc += "技术转让、"
                break;
                case '2':
                    desc += "技术服务、"
                break;
                case '3':
                    desc += "技术许可、"
                break;
                case '4':
                    desc += "技术融资、"
                break;
                case '5':
                    desc += "技术授权、"
                break;
                case '6':
                    desc += "其他、"
                break;
            }
        }
        return desc.substring(0,desc.length-1)
    }
}
/**
 * 过滤行业类型
 *@param val 为类型
 *@example String
 */
const orgTypeFilter = (val) =>{
    let tempText = "";
    switch (val) {
      case "1":
        tempText = "农林牧业";
        break;
      case "2":
        tempText = "食品饮料";
        break;
      case "3":
        tempText = "家具用品";
        break;
      case "4":
        tempText = "教育休闲";
        break;
      case "5":
        tempText = "医药与医疗";
        break;
      case "6":
        tempText = "化学化工";
        break;
      case "7":
        tempText = "电气自动化";
        break;
      case "8":
        tempText = "新能源";
        break;
      case "9":
        tempText = "电子信息源";
        break;
      case "10":
        tempText = "仪器仪表";
        break;
      case "11":
        tempText = "环保和资源";
        break;
      case "12":
        tempText = "轻工纺织";
        break;
      case "13":
        tempText = "包装印刷";
        break;
      case "14":
        tempText = "建筑建材";
        break;
      case "15":
        tempText = "新型材料";
        break;
      case "16":
        tempText = "海洋开发";
        break;
      case "17":
        tempText = "航空航天";
        break;
      case "18":
        tempText = "采矿冶金";
        break;
      case "19":
        tempText = "交通运输";
        break;
      case "20":
        tempText = "橡胶塑料";
        break;
      case "21":
        tempText = "机械";
        break;
      case "22":
        tempText = "安全防护";
        break;
      case "23":
        tempText = "其他";
        break;
    }
    return tempText;
}

const orgNatureFilter = (val) =>{
    let tempText = "";
    switch (val) {
      case "1":
        tempText = "行政机关";
        break;
      case "2":
        tempText = "社会团体";
        break;
      case "3":
        tempText = "事业单位";
        break;
      case "4":
        tempText = "国有企业";
        break;
      case "5":
        tempText = "股份集团";
        break;
      case "6":
        tempText = "外资企业";
        break;
      case "7":
        tempText = "三资企业";
        break;
      case "8":
        tempText = "集团企业";
        break;
      case "9":
        tempText = "乡镇企业";
        break;
      case "10":
        tempText = "私营企业";
        break;
    }
    return tempText;
}
/**
 * 过滤IPC分类
 *@param val 为IPC分类
 *@example String
 */
const ipcClassFilter =(val) =>{
    let tempText = "";
    switch (val) {
      case "A":
        tempText = "人类生活必需";
        break;
      case "B":
        tempText = "作业,运输";
        break;
      case "C":
        tempText = "化学,冶金";
        break;
      case "D":
        tempText = "纺织,造纸";
        break;
      case "E":
        tempText = "固定建筑物";
        break;
      case "F":
        tempText = "机械工程,照明,加热,武器,爆破";
        break;
      case "G":
        tempText = "物理";
        break;
      case "H":
        tempText = "电学";
        break;
    }
    return tempText;
}
/**
 * 过滤需求状态
 *@param val 需求类型
 *@example String
 */
const changeDemandType = (val) => {
    if(val == undefined){
        return
    }else{
        let desc = '';
        let vals = val.split('|');
        for(let i in vals){
            switch (vals[i]){
                case '1':
                    desc += "专利权转让、"
                break;
                case '2':
                    desc += "专利权实施许可、"
                break;
                case '3':
                    desc += "专利权独家实施许可、"
                break;
                case '4':
                    desc += "专利申请权、"
                break;
                case '5':
                    desc += "技术秘密转让、"
                break;
                case '6':
                    desc += "股权转让、"
                break;
                case '7':
                    desc += "投资、"
                break;
                case '8':
                    desc += "其他、"
                break;
            }
        }
        return desc.substring(0,desc.length-1)
    }
}





export {formatDate_YMDHMS,formatDate_YMD,patentTypeFilter,imgUrlFilter,bargainStateFilter,projectStateFilter,lawStateFilter,certifiedStateFilter,priceFilter,addressFilter,cooperationFilter,orgTypeFilter,orgNatureFilter,ipcClassFilter,changeDemandType};