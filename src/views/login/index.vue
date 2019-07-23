<template>
  <div class='login-container'>
      <el-card>
          <div class="login-logo"></div>
          <!-- 添加ref(整体验证) 添加status-icon(验证反馈图标) 添加rules(局部验证) -->
          <el-form ref="loginForm" status-icon :rules="loginRules" :model="reqParams">
              <el-form-item prop="mobile">
                  <el-input v-model="reqParams.mobile"></el-input>
              </el-form-item>
              <el-form-item prop="code">
                  <el-input style="width:300px" v-model="reqParams.code"></el-input>
                  <el-button style="float:right">发送验证码</el-button>
              </el-form-item>
              <el-form-item>
                <el-checkbox :value="checked"></el-checkbox>
                <span style="color:#fcfcfc">
                    我已阅读并同意
                    <a href="#">用户协议</a>
                    和
                    <a href="#">隐私条框</a>
                </span>
              </el-form-item>
              <el-form-item>
                  <el-button style="width:100%" @click="login" type="primary">登录</el-button>
              </el-form-item>
          </el-form>
      </el-card>
  </div>
</template>

<script>
export default {
  data () {
    //   定义一个自定义验证规则 验证手机号
    const checkMobile = (rule, value, callback) => {
      if (/^1[3-9]\d{9}$/.test(value)) {
        callback()
      } else {
        callback(new Error('手机号格式不正确'))
      }
    }
    return {
      // 判断多选框是否被被选中
      checked: true,
      reqParams: {
        mobile: '13911111111',
        code: '246810'
      },
      //   添加表单验证
      loginRules: {
        mobile: [
          // 必须要有内容
          { required: true, message: '请输入手机号', trigger: 'blur' },
          //   使用自定义验证规则
          { validator: checkMobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '验证码必须是6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    //   创建一个登录方法
    login () {
      // 对$refs.loginForm进行整体验证 使用async请求
      this.$refs.loginForm.validate(async valid => {
        //   验证成功
        if (valid) {
        //  使用try{} catch() {} 监听异常
          try {
            // 发送请求 登录
            const res = await this.$http.post('authorizations', this.reqParams)
            //   登录成功后设置token值
            window.sessionStorage.setItem('hm-tt', JSON.stringify(res.data.data))
            // 跳转到首页
            this.$router.push('/')
            // 登陆成功后显示反馈信息
            this.$message.success('登录成功')
          } catch (err) {
            this.$message.error('手机号或验证码错误')
          }
        }
      })
    }
  }
}

</script>

<style scoped lang='less'>
    .login-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background: url(../../assets/images/1.jpg) no-repeat center / cover;
        .login-logo {
            height: 60px;
            text-align: center;
            background: url(../../assets/images/logo_index.png) no-repeat center;
            margin-bottom: 20px;
        }
        .el-card {
            position: relative;
            top: 50%;
            left: 50%;
            width: 475px;
            height: 360px;
            transform: translate(-50%, -50%);
            background: rgba(16, 12, 212, 0.2);
            border: 0px solid #000;
            opacity: .8;
        }
    }
</style>
