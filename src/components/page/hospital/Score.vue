<!--风险评分-->
<template><!-- eslint-disable -->
    <div>

    <el-table
            :data="tableData.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%"

    >

        <el-table-column align="center"
                label="风险评估"
                prop="title">
        </el-table-column>
        <el-table-column align="center"
                label="分数"
                prop="num">
        </el-table-column>
        <el-table-column align="center" empty-text="暂无数据"
                label="建议"
                prop="other">
        </el-table-column>
        <el-table-column align="center" label="操作">
<!--            <template slot="header" slot-scope="{scope}">-->
<!--                <el-input v-model="search" placeholder="输入关键字搜索" id="input"/>-->
<!--            </template>-->
            <template slot-scope="scope">
                <el-button
                        size="mini"
                        @click="handleEdit(scope.$index,scope.row)">未确认</el-button>
            </template>
        </el-table-column>
    </el-table>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                tableData: [{
                    title: 'ADL生活活动能力表',
                    num: '55',
                    other: '建议'
                }, {
                    title: '压疮风险评估量',
                    num: '65',
                    other: '建议'
                }, {
                    title: '跌倒风险评估单',
                    num: '90',
                    other: '建议'
                }, {
                    title: '跌倒风险评估单',
                    num: '45',
                    other: '建议'
                }, {
                    title: '跌倒风险评估单',
                    num: '45',
                    other: ''
                }],
                search: ''
            }
        },
        methods: {
            handleEdit(index,row) {
                console.log(index,row);
            },

        },
    }
</script>

<style scoped>
    div.cell{
        text-align: right;
    }
    .el-input{
        width: 50%  ;
    }
    #input{
        width: 150px;
    }
</style>
