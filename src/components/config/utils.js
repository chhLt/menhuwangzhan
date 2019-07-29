/**
 * 常用工具类
 */
/**
 * 生成随机字符串
 * @param len 生成长度
 * @example sCmYeSjBNE5FWNk3
 */
export const randomString = (len) =>{
    len = len || 32;
　　var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';/****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
　　var maxPos = chars.length;
　　var pwd = '';
　　for (let i = 0; i < len; i++) {
　　　　pwd += chars.charAt(Math.floor(Math.random() * maxPos));
　　}
　　return pwd;
}