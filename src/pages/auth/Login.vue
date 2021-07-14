<template>
  <b-container fluid class="body">
    <b-form-row>
      <b-col md="4" offset="4">
        <div class="login-wrap">
          <div class="login-html">
            <div class="login-form">
              <div class="sign-in-htm">
                <div class="group">
                  <label for="user" class="label">Username</label>
                  <input
                    id="user"
                    name="phoneNumber"
                    type="text"
                    class="input"
                    v-model="phoneNumer"
                  />
                </div>
                <div class="group">
                  <label for="pass" class="label">Password</label>
                  <input
                    id="pass"
                    type="password"
                    class="input"
                    name="password"
                    data-type="password"
                    v-model="password"
                  />
                </div>
                <div class="group">
                  <button class="button" @click="signIn">KIRISH</button>
                </div>
                <div class="hr"></div>
              </div>
            </div>
          </div>
        </div>
      </b-col>
    </b-form-row>
  </b-container>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import axios from "../../http-common";
export default {
  data() {
    return {
      phoneNumer: "",
      password: ""
    };
  },
  mounted() {},
  methods: {
    signIn: function() {
      let params = {
        phoneNumber: this.phoneNumer,
        password: this.password
      };
      axios.post("/auth/login", params).then(res => {
        if(res.status===200){
          let tokenType = res.data.tokenType;
          let tokenBody = res.data.tokenBody;
          if (res.data) {
            localStorage.setItem("auth-user", tokenType + " " + tokenBody);
            console.log(localStorage.getItem("auth-user"));
          }
          this.$router.push("/dashboard");
        }
      });
    }
  }
};
</script>
<style>
body {
  margin: 0;
  color: #6a6f8c;
  background: #c8c8c8;
  font: 600 16px/18px "Open Sans", sans-serif;
}
.body {
  background: url("../../assets/img/test.png");
}

.login-wrap {
  width: 100%;
  margin: auto;
  max-width: 525px;
  min-height: 670px;
  position: relative;
  /*background: url(https://raw.githubusercontent.com/khadkamhn/day-01-login-form/master/img/bg.jpg)*/
  /*  no-repeat center;*/
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.login-html {
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 90px 70px 50px 70px;
  background: rgba(40, 57, 101, 0.9);
}
.login-html .login-html {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  transition: all 0.4s linear;
}
.login-html .sign-in,
.login-html .sign-up,
.login-form .group .check {
  display: none;
}

.login-form .group .label,
.login-form .group .button {
  text-transform: uppercase;
}
.login-html .tab {
  font-size: 22px;
  margin-right: 15px;
  padding-bottom: 5px;
  margin: 0 15px 10px 0;
  display: inline-block;
  border-bottom: 2px solid transparent;
}
.login-html .sign-in:checked + .tab,
.login-html .sign-up:checked + .tab {
  color: #fff;
  border-color: #1161ee;
}
.login-form .group {
  margin-bottom: 15px;
}
.login-form .group .label,
.login-form .group .input,
.login-form .group .button {
  width: 100%;
  color: #fff;
  display: block;
}
.login-form .group .input,
.login-form .group .button {
  border: none;
  padding: 15px 20px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.1);
}
.login-form .group .label {
  color: #aaa;
  font-size: 12px;
}
.login-form .group .button {
  background: #1161ee;
}
.login-form .group label .icon {
  width: 15px;
  height: 15px;
  border-radius: 2px;
  position: relative;
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
}

.hr {
  height: 2px;
  margin: 60px 0 50px 0;
  background: rgba(255, 255, 255, 0.2);
}
.foot-lnk {
  text-align: center;
}
</style>
