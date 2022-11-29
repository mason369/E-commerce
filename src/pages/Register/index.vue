<template>
    <div class="register-container">
        <!-- 注册内容 -->
        <div class="register">
            <h3>
                注册新用户
                <span class="go">我有账号，去 <router-link to="/login">登陆</router-link> </span>
            </h3>
            <div class="Register_sFill">
                <div class="content">
                    <label>手机号:</label>
                    <input type="text" placeholder="请输入你的手机号" v-model="phone" />
                    <span class="error-msg">请输入手机号（以此来接收你的验证码）</span>
                </div>
                <div class="content">
                    <label>验证码:</label>
                    <input type="text" placeholder="请输入验证码" v-model="code" />
                    <button style="width: 100px; height: 38px;" @click="getCode">获取验证码</button>
                    <span class="error-msg">请输入验证码</span>
                </div>
                <div class="content">
                    <label>登录密码:</label>
                    <input type="password" placeholder="请输入你的登录密码" v-model="password" />
                    <span class="error-msg">请输入8-30密码，密码必须同时包含字母数字</span>
                </div>
                <div class="content">
                    <label>确认密码:</label>
                    <input type="password" placeholder="请输入确认密码" v-model="confirmPassword" />
                    <span class="error-msg">请与上方填写的密码一致</span>
                </div>
                <div class="controls">
                    <input name="m1" type="checkbox" :checked="agree" />
                    <span>我已阅读并同意</span>
                    <a herf="yhzcxy" class="xy">《用户注册协议》</a>
                    <a herf="ysxy" class="ys">《隐私协议》</a>
                </div>
                <div class="btn">
                    <button @click="userRegister">完成注册</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Register",
    data() {
        return {
            //收集表单数据--手机号
            phone: "",
            // 验证码
            code: "",
            //密码
            password: "",
            //确认密码
            confirmPassword: "",
            //是否同意
            agree: true,
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert("submit!");
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },

        async getCode() {
            try {
                //如果或取到验证码
                const { phone } = this;
                phone && (await this.$store.dispatch("getCode", phone));
                //将组件的code属性值变为仓库中验证码
                this.code = this.$store.state.user.code;
            } catch (error) {}
        },
        //用户注册
        async userRegister() {
            try {
                //如果成功----路由跳转
                const { phone, code, password, confirmPassword } = this;
                phone &&
                    code &&
                    password == confirmPassword &&
                    (await this.$store.dispatch("userRegister", {
                        phone,
                        code,
                        password,
                    }));
                this.$router.push("/login");
            } catch (error) {
                alert(error.message);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.register-container {
    border: 2px solid #06c152;
    border-right: none;
    border-left: none;

    .register {
        width: 1200px;
        height: 405px;
        margin: 0 auto;

        h3 {
            position: absolute;
            top: 100px;
            margin: 0;
            padding: 6px 15px;
            color: #666;
            font-size: 20.04px;
            line-height: 30.06px;
            margin-right: 20px;
            margin-left: 340px;
            font-size: 20px;
            font-weight: 600;

            span {
                width: 650px;
                font-size: 14px;
                float: right;
                display: flex;
                justify-content: end;

                a {
                    color: #e6560e;
                }
            }
        }

        div:nth-of-type(1) {
            padding-top: 25px;
        }

        .content {
            padding-left: 390px;
            padding-bottom: 20px;
            position: relative;

            label {
                font-size: 14px;
                width: 96px;
                text-align: right;
                display: inline-block;
                text-align: left;
            }

            input {
                width: 270px;
                height: 38px;
                padding-left: 8px;
                box-sizing: border-box;
                margin-left: 5px;
                outline: none;
                border: 1px solid rgb(231, 229, 229);
            }

            img {
                vertical-align: sub;
            }

            .error-msg {
                top: 100%;
                left: 495px;
                color: #999;
                font-size: 10px;
                padding-left: 10px;
            }
        }

        .controls {
            text-align: center;
            position: relative;
            font-size: 15px;

            .xy {
                font-size: 14px;
                color: #e1251b;
            }

            .ys {
                font-size: 14px;
                color: #e1251b;
            }

            input {
                vertical-align: middle;
            }

            .error-msg {
                top: 100%;
                left: 495px;
                color: #999;
                font-size: 10px;
                padding-left: 10px;
            }
        }

        .btn {
            text-align: center;
            line-height: 36px;
            margin: 17px 0 0 55px;

            button {
                outline: none;
                width: 270px;
                height: 36px;
                background: #e1251b;
                color: #fff !important;
                display: inline-block;
                font-size: 16px;
                border: none;
            }
        }
    }
}

.register > .row {
    margin-bottom: 15px;
}
</style>
