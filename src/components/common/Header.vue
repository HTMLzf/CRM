<template>
  <div>
    <el-row>
      <el-col :span="2" class="tl el-icon">
        <i :class="iconType" style="font-size:30px;line-height:60px;color:#989898" @click="iconSet"></i>
      </el-col>
      <el-col :span="10" class="tl el-icon" style="height:60px;line-height:60px;">
        兄弟哈啤酒      <i class="el-icon-goblet-square-full" style="font-size:20px;color:#eac406"></i>
      </el-col>
      <el-col :span="12">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-submenu index="2">
            <template slot="title">
              通知
              <el-badge class="mark" :value="8" />
            </template>
            <el-menu-item index="/a">消息1</el-menu-item>
            <el-menu-item index="/b">消息2</el-menu-item>
          </el-submenu>
        </el-menu>
        <div class="line"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import bus from "./bus.js";
export default {
  name: "Header",
  data() {
    return {
      iconType: "el-icon-s-fold",
      activeIndex: "1",
      isCollapse: false
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$router.push(key);
    },
    iconSet() {
      if (this.iconType == "el-icon-s-fold") {
        this.iconType = "el-icon-s-unfold";
        //修改菜单 折叠：开启

        bus.$emit("toMenu", true);
      } else {
        this.iconType = "el-icon-s-fold";
        //修改菜单 折叠：关闭
        bus.$emit("toMenu", false);
      }
    }
  }
};
</script>
<style lang="less" scoped>
.el-menu--horizontal > .el-submenu {
  float: right;
}
.item {
  margin-top: 10px;
  margin-right: 40px;
}
.el-badge {
  top: -4px;
}
.el-icon {
  padding: 0 0 0 15px;
}
</style>
