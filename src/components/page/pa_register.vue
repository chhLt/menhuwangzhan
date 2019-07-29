<template>
  <div class="Paregister">
    <registerHerder></registerHerder>
    <div id="registerContent">
      <div class="contentWarp">
        <div class="content">
          <div class="poster">
            <img src="../../assets/images/register_img.png" alt="">
          </div>
          <div class="userInfo">
            <div class="detailedInfo">
              <p class="title">个人注册</p>
              <el-form ref="form" :model="form" label-width="80px">
                <el-input v-model="form.phone" class="phone public" :class="{error:index==1}" name="phone" placeholder="请输入手机号" clearable></el-input>
                <div class="Verification">
                  <el-input v-model="form.code" class="code public" :class="{error:index==2}" placeholder="请输入验证码" clearable></el-input>
                  <el-button disabled class="repeat public" v-show="repeatcode" v-model="time">重发({{time}}s)</el-button>
                  <el-button class="codeButton public" type="primary" @click="verifiPhone" v-show="sendCode" v-model="words">{{words}}</el-button>
                </div>
                <el-input v-model="form.password" class="password public" :class="{error:index==3}" placeholder="请输入密码" type="password" clearable></el-input>
                <el-input v-model="form.repeatPassword" class="repeatPassword public" :class="{error:index==4}" placeholder="请再次输入密码" type="password" clearable></el-input>
                <div class="agreement">
                  <el-checkbox v-model="form.checked" :class="{error:index==5}"></el-checkbox>
                  <span class="protocol" @click="dialogVisible = true" :class="{error:index==5}">同意会员协议</span>
                </div>
                <p class="prompt">{{prompt}}</p>
                <el-button class="enroll" type="primary" @click="submit">注册</el-button>
              </el-form>
            </div>
          </div>
        </div>
      </div>
      <el-dialog title="联创用户服务协议" :visible.sync="dialogVisible"  width="60%">
        <div class="dialog_center">
            <p>尊敬的用户，欢迎您使用深圳市联创知识产权运营有限公司（www.szipee.org）。在访问和使用的同时，也请您仔细阅读我们的协议条款。您需要完全接受本协议才能注册成为我们的用户。一经注册，即视为同意本协议中的所有条款内容，需要遵守协议中的所有条款。</p>
            <p>以下的条款作为联创网的用户在使用联创网服务时与联创网达成的协议约定</p>
            <h3>一、服务内容</h3>
            <p>联创网是一个综合性的网络信息平台，通过在不同用户间搭建一个信息化平台，让所有用户可以在上面自由交流。联创网秉承诚信和开放的原则，力度打造一个丰富和透明的信息平台，实现多种信息的无缝对接和交流。</p>
            <p>联创网上的所有信息是由用户自行发布，所有的内容均由发布者对信息的真实性负责。联创网的内部审核不作为信息真实性的保证，联创网不负有对用户的身份进行核实的责任和义务，故联创网不对用户发布信息内容的真实性负任何责任。</p>    
            <h3>二、用户协议的接受与修改</h3>
            <p>联创网提供包括信息浏览、发布等服务（以下称“联创网服务”或“服务”）。无论用户以任何方式使用联创网服务，包括但不限于发布信息，浏览信息，发布广告，发表评论，均被认为用户已经阅读和接受本协议。联创网有权随时单方面修改本条款并无需通知用户或取得用户的同意，如果不同意其中任何的修订内容，用户可以主动停止使用服务，如果用户继续使用服务，则视为无条件接受条款的变动。用户需要经常查看本协议，以便知晓这些修订，联创网有权利通过包括但不限于删除信息，终止账户，屏蔽IP地址、关键字、联系方式，或法律诉讼等方式执行本用户协议。联创网行使修改或中断服务的权利，不需对用户或第三方负责。</p>
            <h3>三、用户使用规则</h3>
            <p>1、联创网的服务仅向18岁以上有完全民事行为能力的人提供，如果用户未满18岁，用户需要在监护人的指导下使用。</p>
            <p>2、用户需要按照联创网的注册、登录程序和相应规则进行注册、登录，注册信息应真实可靠，如果注册信息发生变动，请及时更新。</p>
            <p>3、用户需要在适当的模块中发布对应的信息，所发布的信息内容应当真实、可靠并且不得违反联创网对信息发布的禁止性规定。用户需要对自行发表、上传或者转载的所有信息承担全部责任。</p>
            <p>4、在使用本公司服务时，用户需要遵守中华人民共和国的相关法律法规。包括但不限于《中华人民共和国计算机信息系统安全保护条例》、《计算机软件保护条例》、《最高人民法院关于审理涉及计算机网络著作权纠纷案件适用法律若干问题的解释(法释[2004]1号)》、《全国人大常委会关于维护互联网安全的决定》、《互联网电子公告服务管理规定》、《互联网新闻信息服务管理规定》、《互联网著作权行政保护办法》和《信息网络传播权保护条例》等有关计算机互联网规定和知识产权的法律和法规、实施办法。</p>
            <p>5、用户保证不利用联创网实施任何危害或可能对互联网的正常运转造成不利影响的行为，不进行任何危害联创网的行为。</p>
            <h3>四、内容的审查和责任</h3>
            <p>4.1、使用本网站的服务前，用户理解本网站提供的模块及网站内的所有信息，包括其中包含的文字，图片，链接等（以下称“内容”）均由用户自行上传，并且承担全部责任，本网站不对内容的真实性，准确性，有效性和安全性负责，用户在交易中发生的任何纠纷与本网站无关。</p>
            <p>4.2、用户必须对发表或者上传于联创网的所有信息均享有完整的知识产权，或已经得到相关权利人的合法授权，并保证该信息不侵犯到任何第三人的合法权益；如用户违反本条规定造成联创网被第三人索赔的，用户应全额补偿联创网一切费用(包括但不限于各种赔偿费、诉讼代理费及为此支出的其它合理费用)。</p>
            <p>4.3、用户在本网站发布的任何内容不符合法律规定，或不符合本用户协议规定的，本网有不通知用户即进行自行处理的权利。处理的方法包括但不限于删除信息，终止账户，屏蔽IP地址、关键字、联系方式，或法律诉讼等。</p>
            <p>4.4、用户在联创网发布信息时，应首先进行自审，查看是否有违规或存在归属权争议。一旦用户在联创网发布信息，联创网视为用户已经进行自审。</p>
            <h3>五、隐私保护</h3>
            <p>1、联创网向您保证不对外公开或向第三方提供您的注册资料及您在使用本网站服务时存储在本网站的非公开内容，但下列情况除外：1.事先获得您的明确授权的；2.根据有关的法律法规要求，我们必须提供的；3.按照相关政府主管部门的要求，我们必须提供的；4，您先行违反本协议内容导致联创网或第三方或者社会公共利益受损或者受到威胁的，我们有权向相关当事人提供您的相关信息。</p>
            <p>2、用户知悉并认可：联创网可能会与第三方合作向用户提供相关的网络服务，在此情况下，如该第三方同意承担与本网站同等的保护用户隐私的责任，则联创网有权将用户的注册资料等提供给该第三方。另外，在不透露单个用户隐私资料的前提下，联创网有权对整个用户数据库进行分析并对用户数据库进行商业上的利用。</p>
            <p>3、如果用户发现个人信息被盗用，或者用户的版权或者其他权利被侵害，请将此情况告知联创网并同时提供如下信息和材料：</p>
            <p>（1）侵犯您权利的信息的网址，编号或其它可以找到该信息的细节；您保证您是所述的信息是真实有效而且现实存在的；</p>
            <p>（2）版权或个人信息的合法拥有者的声明；</p>
            <p>（3）您的联系方式，包括联系人姓名，地址，电话号码和电子邮件；</p>
            <p>（4）您的身份证复印件、营业执照等。</p>
            <p>我们仅接受邮寄、电子邮件或传真方式的书面侵权通知。情况紧急的，用户可以通过客服电话先行告知，在接到您的告知提醒后，我们会对相关信息进行暂时的屏蔽。在收到用户提供的书面材料后，我们经审查证实的，将在1-3个工作日内删除该信息。</p>
            <p>4、用户应确保您自己账号和密码的安全，因用户自己的过失导致损害发生的，联创网不承担任何责任。</p>
            <h3>六、免责条款</h3>
            <p>1、鉴于联创网站仅作为用户网上发布信息的网络平台提供者，并非信息的发布者；用户上传的内容，没有经过联创网事先审查，因此联创网无法保证其内容的真实性、准确性、有效性和安全性。因此，用户确认在使用本网站所提供的服务前，用户已经知晓，理解并认可此情况。用户在使用非联创网自行上传的内容时遭受的损失和其它一切后果由用户独自承担。 用户如因为浏览本网站的内容或第三方发布和上传的内容而因此遭受到任何损失，或与其他用户发生争议，就上述损失或争议或任何方面产生有关的索赔、要求、诉讼、损失和损害，用户同意免除联创网、深圳市联创知识产权运营有限公司和本网站的管理层、董事、代理人、关联公司、母公司、子公司和雇员的责任。</p>
            <p>2、由于联创网上的大多数内容来自用户，本网站不保证这些信息和用户联络方式的准确性和有效性、以及所提供内容质量的安全性或合法性，用户同意不就其</p>
            <p>他用户发布的内容或所作所为追究本网站的责任。本网站对于用户由于使用联创网而造成的任何金钱、商誉、名誉的损失，或任何特殊的、间接的、或结果性的损失都不负任何责任。用户同意就用户自身行为之合法性单独承担责任，用户同意，联创网和联创网的所有关联公司和相关实体对本网站用户的行为的合法性不承担任何责任。</p>
            <p>3、除联创网注明之服务条款外，其他一切因使用联创网发布系统而引致之任何意外、疏忽、合约毁坏、诽谤、版权或知识产权侵犯及其所造成损失的（包括因下载而感染电脑病毒），联创网不承担任何法律责任。</p>
            <p>4、任何通过联创网的网页而链接及得到的资讯、产品或服务均系网站用户自行发布，引起纠纷的，联创网不承担任何法律责任。</p>
            <P>5、包括但不限于当因为不可抗力、来自外部的恶意网络攻击或其它非本网站故意行为导致联创网不能顺畅提供服务时，联创网不承担任何责任，也不用提供任何补偿。</P>
            <P>6、根据法律规定、相关协议约定，联创网不承担责任的其他情形。</P>
            <h3>七、法律声明</h3>
            <P>本协议在所有方面均受中华人民共和国法律管辖。本网站所有用户均不可撤销地受中华人民共和国广东省深圳市的法院的管辖。本协议的规定是可分割的，如本协议的任何规定被裁定为无效或不可执行，该规定可被删除而其余条款继续有效并应予以执行。用户同意，在发生并购，本协议和所有纳入的协议可由联创网按本公司自行酌情决定向第三方自动转让。本公司未就用户或其他方的违约采取行动并不等于本公司放弃就随后或类似的违约采取行动的权利。</P>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogClick">取 消</el-button>
            <el-button type="primary" @click="dialogClick">确 定</el-button>
        </span>
        </el-dialog>
    </div>
    <starboard></starboard>
    <bottom></bottom>
  </div>
</template>
<script>
import http from "../config/request";
export default {
  data() {
    return {
      form: {
        phone: "", //手机号码
        code: "", //验证码
        password: "", //密码
        repeatPassword: "", //再次输入的密码
        checked: false //同意会员协议
      },
      repeatcode: false, //重新发送
      sendCode: true, //发送验证码按钮是否可点击
      time: 59, //重发验证码时间
      words: "发送验证码", //按钮文本
      prompt: "", //错误提示-文字
      index: 0,//错误提示-文本框颜色
      dialogVisible:false
    };
  },
  updated() {},
    methods: {
        //验证手机号码
        verifiPhone() {
        let parame = { loginName: this.form.phone };
        if (this.form.phone.length == 0) {
            this.prompt = "手机号不能为空";
            this.index = 1;
            return false;
        } else if (!/^1[345678]\d{9}$/.test(this.form.phone)) {
            this.prompt = "请输入正确的手机号";
            this.index = 1;
            return false;
        }
        //验证手机号码是否被注册
        http.Request("szipee/user!userRepeat.action", "post", null, parame).then(res => {
            if (res.state == "error") {
                //已注册
                this.prompt = res.info;
                this.index = 1;
            } else {
                //未注册--开始计时
                this.sendCode = false;
                this.repeatcode = true;
                let timers = setInterval(() => {
                this.time = parseInt(this.time) - 1;
                if (this.time == 0) {
                    clearInterval(timers);
                    this.words = "重新发送";
                    this.sendCode = true;
                    this.repeatcode = false;
                    this.time = 59;
                }
                }, 1000);
                this.getCode();
            }
            });
        },
        //用户协议确定取消事件
        dialogClick(){
            this.dialogVisible = !this.dialogVisible;
            this.form.checked = !this.form.checked;
        },
        //获取验证码
        getCode() {
        let parame = { phone: this.form.phone };
        http.Request("szipee/user!phoneVerifyCode.action", "POST", null, parame).then(res => {
            if (res.state == "success") {
                this.$notify({
                    title: "提示",
                    message: "验证码为：" + res.info,
                    duration: 10000
                });
            } else {
                this.words = "重新发送";
                this.sendCode = true;
                this.repeatcode = false;
                this.time = 59;
                this.$message.error("获取验证码失败，请稍再试~~");
            }
            });
        },
        //提交
        submit() {
            //验证手机号
            if (this.form.phone.length == 0) {
                this.prompt = "手机号不能为空";
                this.index = 1;
                return false;
            } else if (!/^1[345678]\d{9}$/.test(this.form.phone)) {
                this.prompt = "请输入正确的手机号";
                this.index = 1;
                return false;
            }
            var reg = /^\d{4}$/;
            if (this.form.code.length == 0) {
                this.prompt = "验证码不能为空";
                this.index = 2;
                return false;
            } else if (!reg.test(this.form.code)) {
                this.prompt = "验证码输入错误";
                this.index = 2;
                return false;
            }
            var reg = /^[\w]{6,12}$/;
            if (this.form.password.length == 0) {
                this.prompt = "密码不能为空";
                this.index = 3;
                return false;
            } else if (!reg.test(this.form.password)) {
                this.index = 3;
                this.prompt = "密码需6-12，由数字、字母、下划线组成";
                return false;
            }
            if (this.form.password != this.form.repeatPassword) {
                this.index = 4;
                this.prompt = "两次密码输入不一致";
                return false;
            }
            if (this.form.checked == false) {
                this.index = 5;
                this.prompt = "请同意会员协议";
                return false;
            }
            var parame = {
                loginName:this.form.phone,
                phone:this.form.phone,
                phoneVCode:this.form.code,
                password:this.form.password,
                nickName: this.form.phone,
                custType:1
            };
            http.Request("szipee/user!register.action", "post", null, parame).then((res)=> {
                if (res.state == "success") {
                    this.$message({ message: "注册成功", type: "success" });
                    this.$router.push({ path: "/" });
                }
            });
        }
    },
  components: {
    registerHerder: resolve => {require(['../common/register/header'], resolve)},
    bottom: resolve => {require(['../common/bottom/bottom'], resolve)},
    starboard: resolve => {require(['../common/starboard/starboard'], resolve)},
  }
};
</script>


<style lang="less" rel="stylesheet/less">
@import "../../assets/less/index.less";
.Paregister {
  background: #f4f7fa;
  height: 100%;

  .margin_botton(@size) {
    margin-bottom: @size;
  }

  .contentWarp {
    width: 100%;
    height: auto;
    display: flex;
    margin: 60px 0;
    justify-content: center;
    .content {
      width: 800px;
      height: 523px;
      display: flex;
      flex-direction: row;
      border-radius:6px;
      overflow: hidden;
      .poster {
        background-color: #0099fa;
        width: 305px;
        height: 523px;
      }
      .userInfo {
        width: 495px;
        display: flex;
        justify-content: center;
        background-color: #fff;
        padding: 40px 0;
        .detailedInfo {
          width: 285px;
          display: flex;
          flex-direction: column;
          .title {
            padding-bottom: 40px;
            font-size: 18px;
            font-weight: 500;
            letter-spacing: 2px;
          }
          .public {
            width: 285px;
            .el-input__inner {
              border: 1px solid #dfe6ee;
              border-radius: 4px;
              height: 42px;
            }
          }
          .error {
            .el-input__inner,
            .el-checkbox__inner {
              border: 1px solid #e34c4c;
            }
          }
          .phone {
            .margin_botton(20px);
          }
          .Verification {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            .code {
              width: 170px;
            }
            .codeButton {
              width: 100px;
              background-color: #fff;
              color: @lightThemeColor;
              border: 1px solid @lightThemeColor;
              span {
                width: 100px;
                display: inline-block;
                position: relative;
                right: 21px;
                text-align: center;
              }
            }
            .repeat {
              width: 100px;
              background-color: #dfe6ee;
              color: #8091a5;
              border: 1px solid #dfe6ee;
            }
          }
          .password {
            .margin_botton(20px);
          }
          .repeatPassword {
            .margin_botton(10px);
          }
          .agreement {
            .margin_botton(12px);
            .protocol {
              font-size: 14px;
              color: #0099fa;
              cursor: pointer;
              margin-left: 6px;
            }
            .error {
              color: #e34c4c;
            }
          }
          .prompt {
            text-align: center;
            color: #e76464;
            font-size: 14px;
            margin-bottom: 12px;
            height: 16px;
            line-height: 16px;
          }
          .enroll {
            width: 285px;
            span {
              letter-spacing: 10px;
            }
          }
        }
      }
    }
  }
  //协议
  .dialog_center{
      height: 500px;
      overflow-y:auto;
      p{
        font-size: 13px;
        text-indent: 26px;
        color: #888;
        line-height:22px;
        margin-bottom: 10px;
      }
      h3{
        height: 40px;
        line-height: 40px;
        font-size: 18px;
        color: #555;
      }
  }
}
</style>
