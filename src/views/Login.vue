<template>
    <div class="login-form">
        <div class="logo"></div>
        <div class="input-box">
            <el-input v-model="email" placeholder="请输入内容"></el-input>
        </div>
        <div class="input-box">
            <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
        </div>
        <el-button type="primary" size="medium" @click="goto"> 登录 </el-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            goto() {
                this.$router.push('/');
            }
        },
        mounted() {

        }
    }
</script>

<style>
    .login-form {
        width: 400px;
        height: 340px;
        padding: 30px;
        position: fixed;
        left: 50%;
        margin-left: -200px;
        top: 50%;
        margin-top: -170px;
        box-sizing: border-box;
        text-align: center;
    }

    .login-form .input-box {
        margin-bottom: 15px;
    }
</style>
