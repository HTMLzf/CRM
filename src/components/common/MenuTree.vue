<template>
    <div>
        <template v-for="value in this.menuData">
            <el-submenu :index="value.id" v-if="value.children.length>0">
                <template slot="title">
                    <i :class="iconType[value.id]"></i>
                    <span slot="title">{{value.name}}  {{value.id}}</span>
                </template>
                <MenuTree :menuData="value.children"></MenuTree>
            </el-submenu>

            <el-menu-item :index="value.id" v-else>
                <i :class="iconType[value.id]"></i>
                <span slot="title">{{value.name}}  {{value.id}}</span>
            </el-menu-item>
        </template>

    </div>
</template>

<script>
    export default {
        name: "MenuTree",
        props: ['menuData'],
        data() {
            return {
                iconType: {
                    1: "el-icon-setting",
                    2: "el-icon-monitor",
                    3: "el-icon-mouse",
                    4: "el-icon-user",
                    12: "el-icon-s-custom",
                    13: "el-icon-plus",
                    14: "el-icon-edit",
                    15: "el-icon-minus",
                    16: "el-icon-key",
                    17: "el-icon-menu",
                    18: "el-icon-plus",
                    19: "el-icon-edit",
                    20: "el-icon-minus",
                    21: "el-icon-s-grid",
                    22: "el-icon-collection",
                    23: "el-icon-edit",
                    24: "el-icon-minus",
                    25: "el-icon-plus",
                    26: "el-icon-edit",
                    27: "el-icon-minus",
                    28: "el-icon-c-scale-to-original",
                    29: "el-icon-goblet-full",
                    30: "el-icon-film",
                    31: "el-icon-notebook-2",
                    32: "el-icon-plus",
                    33: "el-icon-news",
                    34: "el-icon-plus",
                    35: "el-icon-edit",
                    36: "el-icon-minus",
                    37: "el-icon-s-flag",
                    38: "el-icon-plus",
                    39: "el-icon-edit",
                    40: "el-icon-minus",
                    41: "el-icon-s-operation",
                    42: "el-icon-document-copy",
                    43: "el-icon-picture-outline",
                    44: "el-icon-hot-water",
                    45: "el-icon-folder-opened",
                    46: "el-icon-document-add",
                    47: "el-icon-notebook-2",
                    50: "el-icon-scissors",
                    51: "el-icon-first-aid-kit",
                    56: "el-icon-chat-dot-square",
                    82: "el-icon-watermelon",
                }
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>
    /*隐藏文字*/
    .el-menu--collapse  .el-submenu__title span{
        display: none;
    }
    /*隐藏 > */
    .el-menu--collapse  .el-submenu__title .el-submenu__icon-arrow{
        display: none;
    }
</style>
