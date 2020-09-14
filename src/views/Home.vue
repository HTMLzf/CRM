<template>
  <div id="home">
    <el-container>
      <el-aside width="auto">
        <Menu></Menu>
      </el-aside>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <el-main>
          <Main> </Main>
        </el-main>
        <el-footer>
          <Footer></Footer>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Menu from "../components/common/Menu";
import Main from "../components/common/Main";
export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Menu,
    Main
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
#home,
.el-container {
  width: 100%;
  height: 100%;
}
.el-header,
.el-footer {
  padding: 0;
  text-align: center;
}
.el-header {
  line-height: 60px;
}
.el-footer {
  height: 40px !important;
  line-height: 40px;
}
.el-aside {
  color: #333;
  text-align: left;
  height: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 100%;
}
</style>
