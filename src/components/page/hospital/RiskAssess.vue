<!--风险评估-->
<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="风险评分" name="first">
            <Score></Score>
        </el-tab-pane>
        <el-tab-pane label="护理诊断" name="second">
            <Diagnosis></Diagnosis>
        </el-tab-pane>
        <el-tab-pane label="护理问题" name="third">
            <Matter></Matter>
        </el-tab-pane>
        <el-tab-pane label="护理计划" name="Plan">
            <Plan></Plan>
        </el-tab-pane>
        <el-tab-pane label="集中护理" name="Focus">
            <Focus></Focus>
        </el-tab-pane>
        <el-tab-pane label="计划总览" name="Overview">
            <Overview></Overview>
        </el-tab-pane>
        <el-tab-pane label="医嘱查看" name="See">
            <See></See>
        </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
   import Score from "./Score";
   import Diagnosis from "./Diagnosis";
   import Matter from './Matter';
   import Plan from "./Plan";
   import Focus from "./Focus";
   import Overview from "./Overview";
   import See from "./See";
    export default {
        components:{
            Score,
            Diagnosis,
            Matter,
            Plan,
            Focus,
            Overview,
            See
        },
        data() {
            return {
                activeName: 'second'
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    };
</script>

<style lang="less"></style>
