<template>
    <div class="login-container">
        <!-- 登录 -->
        <div class="login-wrap">
            <div class="login">
                <div class="loginform">
                    <ul class="tab clearFix">
                        <!-- <li>
<a href="##" style="border-right: 0;">扫描登录</a>
<div class="lllsz" style="display:none">
<img src="../Login/images/wx_cz.jpg" alt="">
</div>
</li> -->
                        <div class="phone">
                            <font-awesome-icon icon="fa-solid fa-phone" />
                            客服中心电话：<span>400-1188-832</span>
                        </div>
                        <li>
                            <a href="##" class="current">账户登录</a>
                        </li>
                    </ul>

                    <div class="content">
                        <form>
                            <div class="input-text clearFix">
                                <input type="text" placeholder="手机" v-model="phone" />
                                <font-awesome-icon icon="fas fa-user" />
                            </div>
                            <div class="input-text clearFix">
                                <input type="password" placeholder="请输入密码" v-model="password" />
                                <font-awesome-icon icon="fa-solid fa-eye-slash" />
                            </div>
                            <div class="setting clearFix">
                                <label class="checkbox inline">
                                    <input name="m1" type="checkbox" value="2" checked="" />
                                    自动登录
                                </label>
                                <span class="forget">忘记密码？</span>
                            </div>
                            <button class="btn" @click.prevent="getLogin">登&nbsp;&nbsp;录</button>
                          <p>admin账号:13700000000密码:111111</p>
                        </form>

                        <div class="call clearFix">
                            <ul>
                                <li>
                                    <font-awesome-icon icon="fa-brands fa-weibo" />
                                </li>
                                <li>
                                    <font-awesome-icon icon="fa-brands fa-qq" />
                                </li>
                                <li>
                                    <font-awesome-icon icon="fa-brands fa-weixin" />
                                </li>
                                <li>
                                    <font-awesome-icon icon="fa-brands fa-github" />
                                </li>
                            </ul>
                            <router-link class="register" to="/register">立即注册</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	name: "Login",
	data() {
		return {
			phone   : "",
			password: ""
		};
	},
	methods: {
		async getLogin() {
			try {
				//登录成功
				const { phone, password } = this;
				phone && password && (await this.$store.dispatch("userLogin", { phone, password }));
				// 跳转首页 看路由当中是否包含query参数，有:调到query参数指定路由，没有:调到home
				let toPath = this.$route.query.redirect || "/home";
				this.$router.push(toPath);
				// this.$router.push("home");
			}
			catch (error) {
				alert(error.message);
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.phone {
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    color: rgb(110, 110, 110);
    top: -45px;
    right: 50px;

    span {
        color: rgb(31, 31, 31);
    }

    .fa-phone {
        margin-right: 5px;
    }
}

.login-container {
    .login-wrap {
        height: 450px;

        .login {
            background-image: url("https://res.fupin832.com/1667469081617.jpg");
            background-size: 100% 427px;
            background-repeat: no-repeat;
            width: 1326px;
            height: 427px;
            margin: 0px auto;
            background-position: 1px 3px;
        }

        .loginform {
            width: 420px;
            height: 427px;
            box-sizing: border-box;
            float: right;
            padding: 20px;
            margin-right: 40px;
            position: relative;
            background-color: rgba(255, 255, 255, 0.5);
            z-index: 10;

            .tab {
                li {
                    width: 50%;
                    float: left;
                    text-align: center;

                    a {
                        width: 100%;
                        display: block;
                        height: 50px;
                        line-height: 50px;
                        font-size: 20px;
                        font-weight: 700;
                        color: #333;
                        border: 1px solid #ddd;
                        box-sizing: border-box;
                        text-decoration: none;
                    }

                    .current {
                        width: 380px;
                        border-top-color: #28a3ef;
                        color: #e1251b;
                    }
                }
            }

            .content {
                position: relative;
                z-index: 99999999;
                width: 380px;
                height: 390px;
                box-sizing: border-box;
                border: 1px solid #ddd;
                border-top: none;
                padding: 18px;

                form {
                    margin: 15px 0 18px 0;
                    font-size: 12px;
                    line-height: 18px;

                    .input-text {
                        padding-top: 48px;
                        height: 20px;
                        width: 342px;

                        .fa-user {
                            position: absolute;
                            top: 90px;
                            right: 30px;
                            font-size: 16px;
                            cursor: pointer;
                        }

                        .fa-eye-slash {
                            position: absolute;
                            top: 160px;
                            right: 28px;
                            font-size: 16px;
                            cursor: pointer;
                        }

                        span {
                            float: left;
                            width: 37px;
                            height: 32px;
                            border: 1px solid #ccc;
                            // background: url(../../assets/img/icons.png) no-repeat -10px -201px;
                            box-sizing: border-box;
                            border-radius: 2px 0 0 2px;
                        }

                        .pwd {
                            background-position: -72px -201px;
                        }

                        input {
                            width: 342px;
                            height: 40px;
                            box-sizing: border-box;
                            border: 1px solid #ccc;
                            border-left: none;
                            float: left;
                            padding-top: 6px;
                            padding-bottom: 6px;
                            font-size: 14px;
                            line-height: 22px;
                            padding-right: 8px;
                            padding-left: 8px;

                            border-radius: 0 2px 2px 0;
                            outline: none;
                        }
                    }

                    .setting {
                        label {
                            float: left;
                            font-size: 18px;
                            padding-top: 28px;
                        }

                        .forget {
                            float: right;
                            font-size: 18px;
                            padding-top: 28px;
                            cursor: pointer;

                            &:hover {
                                color: #000000;
                            }
                        }
                    }

                    .btn {
                        background-color: #e1251b;
                        padding: 6px;
                        border-radius: 0;
                        font-size: 16px;
                        font-family: 微软雅黑;
                        word-spacing: 4px;
                        border: 1px solid #e1251b;
                        color: #fff;
                        width: 100%;
                        height: 45px;
                        margin-top: 30px;
                        outline: none;
                        cursor: pointer;

                        &:hover {
                            background-color: #c41f16;
                        }
                    }
                }

                .call {
                    margin-top: 20px;

                    ul {
                        float: left;
                        margin-top: 2px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 40px;

                        li {
                            float: left;
                            margin-right: 8px;
                            font-size: 20px;
                            cursor: pointer;

                            &:nth-child(1) {
                                color: #ea6e2f;
                            }

                            &:nth-child(2) {
                                color: #1090f2;
                            }

                            &:nth-child(3) {
                                color: #00a818;
                            }

                            &:nth-child(4) {
                                color: #24292f;
                            }
                        }
                    }

                    .register {
                        float: right;
                        font-size: 15px;
                        line-height: 38px;
                        font-size: 18px;
                    }

                    .register:hover {
                        color: #000000;
                    }
                }
            }
        }
    }
}
</style>
