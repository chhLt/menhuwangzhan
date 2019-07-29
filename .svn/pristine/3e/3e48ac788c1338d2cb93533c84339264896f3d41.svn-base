/**
 * 时间处理方法 FormatDateTime
 */
/**
 * 13位时间戳转yyyy-mm-dd
 * @param obj 时间
 * @example 2017-8-25
 */
export const formatDateTime_YMD = (obj) =>{
 	let date =  new Date(obj);
 	let y = 1900+date.getYear();
    let m = "0"+(date.getMonth()+1);
    let d = "0"+date.getDate();
    return y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
}

/**
 * 13位时间戳转mm-dd
 * @param obj 时间
 * @example 8月25日
 */
export const formatDateTime_MD = (obj) =>{
	let date =  new Date(obj);
    let m = "0"+(date.getMonth()+1);
    let d = "0"+date.getDate();
    return m.substring(m.length-2,m.length)+"月"+d.substring(d.length-2,d.length)+'日'
}

/**
 * 13位时间戳转yyyy-mm-dd hh:mm:ss
 * @param obj 时间
 * @example 2017-08-24 01:06:06
 */
 export const formatDateTime_YMDHMS = (obj) =>{
 	let date =  new Date(obj);
 	let year = 1900+date.getYear();
    let mon  = "0"+(date.getMonth()+1);
    let day  = "0"+date.getDate();
    let hours= "0"+date.getHours();
    let minu = "0"+date.getMinutes();
    let sec  = "0"+date.getSeconds();
    return year+"年"+mon.substring(mon.length-2,mon.length)+"月"+day.substring(day.length-2,day.length)+"日 "+hours.substring(hours.length-2,hours.length)+':'+minu.substring(minu.length-2,minu.length)+':'+sec.substring(sec.length-2,sec.length);
 }


 /**
 * 计算间隔天数
 * @param state 开始时间
 * @param end   结束时间
 * @example 8
 */
 export const CalculationInterval = (state,end) =>{
 	let newTiem = end-state
 	let day = Math.floor(newTiem/86400000)
 	return day
 }


