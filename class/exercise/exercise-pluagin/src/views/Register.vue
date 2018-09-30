<template>
    <Content class="content">
        <div class="main">
            <div class="c-register">
                <div class="register">
                    <h3>用户注册</h3>
                    <Input prefix="ios-mail-outline" v-model.trim="userInfo.email" type="text" placeholder="邮箱" size="large" class="my-inp" />
                    <Alert v-if="errors.email" type="error" show-icon>{{errors.email}}</Alert>
                    <Input prefix="ios-lock-outline" v-model.trim="userInfo.password" type="password" placeholder="密码" size="large" class="my-inp" />
                    <Alert v-if="errors.password" type="error" show-icon>{{errors.password}}</Alert>
                    <div class="my-inp">
                        <Input prefix="ios-barcode-outline" v-model.trim="userInfo.verify" type="text" placeholder="验证码" size="large" class="verification" />
                        <div class="verification-item">
                            <img @load="verifyLoadState=true"  @click="verificationcode" :src="verificationUrl" alt="验证码">
                        </div>
                    </div>
                    <Alert v-if="errors.verify" type="error" show-icon>{{errors.verify}}</Alert>
                    <Button type="success" @click="register" long size="large">注册</Button>
                </div>
            </div>
        </div>
    </Content>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      verificationUrl: "/genimage/verifiycode.gif",
      verifyLoadState: false,
      userInfo: {
        email: "",
        password: "",
        verify: ""
      },
      errors: {
        email: "",
        password: "",
        verify: ""
      }
    };
  },
  methods: {
    verificationcode(e) {
      if (!this.verifyLoadState) return;
      this.verifyLoadState = false;
      const base = "/genimage/verifiycode.gif";
      this.verificationUrl = base + "?" + e.timeStamp;
    },
    register() {
      if (
        !this.userInfo.email &&
        !this.userInfo.password &&
        !this.userInfo.verify
      ) {
        this.errors.email = "邮箱不能为空！";
        this.errors.password = "密码不能为空！";
        this.errors.verify = "验证码不能为空！";
        return;
      }

      if (!this.userInfo.email && !this.userInfo.password) {
        this.errors.email = "邮箱不能为空！";
        this.errors.password = "密码不能为空！";
        return;
      }

      if (!this.userInfo.password && !this.userInfo.verify) {
        this.errors.password = "密码不能为空！";
        this.errors.verify = "验证码不能为空！";
        return;
      }

      if (!this.userInfo.email) {
        this.errors.email = "邮箱不能为空！";
        return;
      }

      if (!this.userInfo.password) {
        this.errors.password = "密码不能为空！";
        return;
      }

      if (!this.userInfo.verify) {
        this.errors.verify = "验证码不能为空！";
        return;
      }

      if (this.userInfo.email.indexOf("@") == -1) {
        this.errors.email = "邮箱格式不正确，请重新填写！";
        return;
      }

      if (this.userInfo.password.length < 8) {
        this.errors.password = "密码格式不正确，请重新填写！";
        return;
      }

      if (this.userInfo.verify.length != 4) {
        this.errors.verify = "验证码格式不正确，请重新填写！";
        return;
      }

      axios
        .post("/apis?action=register", this.userInfo)
        .then(({data}) => {
          if(data.code === 1) {
            this.$router.push('/login')
          } else {
            this.errors = data.errors
          }
        })
        .catch(err => {
          console.log(err)
        });
    }
  }
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  background: #fff
    url(https://gtms04.alicdn.com/tps/i4/TB1yN4SckPoK1RjSZKbSut1IXXa.jpg)
    no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
  z-index: 9;
}
.c-register {
  position: absolute;
  z-index: 99;
  width: 360px;
  height: auto;
  min-height: 360px;
  background: rgb(245, 235, 252);
  top: 20%;
  right: 10%;
  padding: 25px;
}
.register {
  width: 100%;
  height: 100%;
}
.register h3 {
  font-size: 16px;
  margin-bottom: 25px;
}
.my-inp {
  width: 100%;
  height: 36px;
  margin-bottom: 15px;
}
.verification {
  width: 180px;
  float: left;
}
.verification-item {
  width: 120px;
  height: 36px;
  float: right;
}
.verification-item img {
  cursor: pointer;
}
</style>