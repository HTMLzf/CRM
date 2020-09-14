<template>
    <div>
        <!-- <button @click='a'>aaaaa</button> -->
        <el-radio-group
                v-model="isCollapse"
                style="margin-bottom: 20px;display:none"
        >
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu class="menu-Bar" :collapse="isCollapse">
            <el-menu-item index="/" @click="goHome">
                <i class="el-icon-s-home"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <Menutree :menuData="this.menuList"></Menutree>
        </el-menu>

        <!--        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse"-->
        <!--                 v-if="$store.state.menu.menu">-->
        <!--            <el-menu-item index="/" @click="goHome">-->
        <!--                <i class="el-icon-s-home"></i>-->
        <!--                <span slot="title">首页</span>-->
        <!--            </el-menu-item>-->
        <!--            <MenuTree :menuData="this.menuList"></MenuTree>-->
        <!--&lt;!&ndash;            <template v-for="(item, index) in $store.state.menu.menu">-->
        <!--                <el-submenu v-if="item.children" :index="item.path" :key="index">-->
        <!--                    <i :class="iconType[item.id]"></i>-->
        <!--                    <span slot="title">{{ item.name }}{{ item.id }}</span>-->
        <!--                </el-submenu>-->
        <!--                <el-menu-item :index="item.path" v-else="">-->
        <!--                    <i :class="iconType[item.id]"></i>-->
        <!--                    <span slot="title">{{ item.name }}{{ item.id }}</span>-->
        <!--                </el-menu-item>-->
        <!--            </template>-->
        <!--                        <el-submenu v-for="(item, index) in $store.state.menu.menu" :index="item.path" :key="index" >-->
        <!--                            <template slot="title">-->
        <!--                                <i :class="iconType[item.id]"></i>-->
        <!--                                <span slot="title">{{ item.name }}{{ item.id }}</span>-->
        <!--                            </template>-->
        <!--                        </el-submenu>&ndash;&gt;-->
        <!--        </el-menu>-->
    </div>
</template>
<script>
    import bus from "./bus.js";
    import api from "../../sever/api"
    import Menutree from "./MenuTree";

    export default {
        components: {Menutree},
        data() {
            return {
                isCollapse: false,
                menuList: [],
                iconType: {
                    // 1: "el-icon-setting",
                    // 2: "el-icon-s-platform",
                    // 4: "el-icon-user",
                    // 12: "el-icon-s-custom",
                    // 21: "el-icon-s-grid",
                    // 17: "el-icon-menu",
                    // 22: "el-icon-collection",
                    // 41: "el-icon-s-operation",
                    // 42: "el-icon-document-copy",
                    // 45: "el-icon-folder-opened",
                    // 46: "el-icon-document-add",
                    // 50: "el-icon-scissors",
                    // 51: "el-icon-first-aid-kit"
                }
            };
        },
        mounted() {
            this.getMenu();
            this.MenuOpen();
        },
        methods: {
            a() {
                this.$router.push("./a");
            },
            getMenu() {
                //获取菜单栏
                api.Menu().then((res) => {
                    console.log(res.data)
                    if (res.data.code == 20000) {
                        //把菜单存到store内
                        this.$store.commit("setmenu", res.data.data);
                        this.menuList = res.data.data
                        console.log(this.menuList)
                    }

                });

            },
            goHome() {
                this.$router.push("/");
            },
            MenuOpen() {
                bus.$on("toMenu", data => {
                    this.isCollapse = data;
                });
            },
            addPath(key) {
                console.log(key)
                this.$router.push("." + key);
            }
        },
        computed: {}
    };
</script>
<style lang="less" scoped>
    .el-menu-vertical-demo {
        width: 200px;
    }

    .el-menu--collapse {
        width: 64px;
    }
    //防止菜单折叠时动画出错
    .el-menu:not(.el-menu--collapse) {
        width: 200px;
    }

</style>
