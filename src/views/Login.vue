<template>
    <div>

        <el-form ref="form" label-width="80px" :model="user" style="width: 20%;padding: 200px 0 0 40%;">
            <el-form-item label="账号">
                <el-input v-model="user.username" clearable></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="user.password" show-password></el-input>
            </el-form-item>
            <el-button type="primary" @click="submit">登录</el-button>
        </el-form>
    </div>
</template>
<script>
    //样式初始化
    import "../assets/css/reset.css";
    //element-ui
    import ElementUI from "element-ui";
    import "element-ui/lib/theme-chalk/index.css";
    import api from '../sever/api'
    export default {
        data() {
            return {
                user:{
                    username: "",
                    password: ""
                },

            };
        },
        methods: {
            submit() {
                if (this.user.username == '') {
                    this.$message.error('账号不能为空');
                } else if (this.user.password == '') {
                    this.$message.error('密码不能为空');
                } else {
                    let datas= {
                        username:this.user.username,
                        password: this.user.password
                    }
                    api.Login(datas).then((res) =>{
                        if(res.data.code == 20000){
                            console.log(res.data.data);
                            localStorage.setItem('token',res.data.data.token);
                            this.$router.push('./')
                        }
                        else{
                            this.$message.error(res.data.msg);
                        }
                    },(err)=>{
                        this.$message.error('登录失败');
                    })

                }
            }
        }
    };
</script>
<style lang="stylus"></style>
