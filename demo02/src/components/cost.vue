<template>
  <div>
  <el-table
      :data="tableData"
      stripe
      style="width: 100%">
    <el-table-column
        prop="team"
        label="报销人"
        sortable
        width="100">
    </el-table-column>
    <el-table-column
        prop="thin"
        label="事由"
        width="186">
    </el-table-column>
    <el-table-column
        prop="dateIn"
        label="收入/支出时间"
        width="190">
    </el-table-column>
    <el-table-column
        prop="moneyIn"
        label="收支金额"
        width="103">
    </el-table-column>
    <el-table-column
        prop="type"
        label="类型"
        width="75">
    </el-table-column>
    <el-table-column
        prop="money"
        label="剩余金额"
        width="90">
    </el-table-column>
    <el-table-column
        prop="name"
        label="记录人"
        width="90">

    </el-table-column>
    <el-table-column
        prop="dateOut"
        label="报销时间"
        sortable
        width="100">
    </el-table-column>
    <el-table-column
        fixed="right"
        label="操作"
        width="300">
      <template slot-scope="scope" >
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>

  </el-table>
    <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
    </el-pagination>
</div>
</template>

<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    }
  },
  data() {
    return {
      form:{
        msg:""
      },
      tableData: [{
        team:"团队",
        thin:"测试",
        dateIn:"2016-05-04",
        moneyIn:"1112",
        type:"支出",
        money:"7764",
        name: '王小虎',
        dateOut: '2016-05-02',
      }
      , {
        team:"团队",
        thin:"测试",
        dateIn:"2016-05-02",
        moneyIn:"1234",
        type:"支出",
        money:"3688",
        name: '王小虎',
        dateOut: '2016-05-04',
      }, {
        team:"公司",
        thin:"测试",
        dateIn:"2016-05-04",
        moneyIn:"2224",
        type:"支出",
        money:"9588",
        name: '王小虎',
        dateOut: '2016-05-01',
      }, {
        team:"团队",
        thin:"测试",
        dateIn:"2016-05-01",
        moneyIn:"4424",
        type:"支出",
        money:"7799",
        name: '王小虎',
        dateOut: '2016-05-03',
      }, {
          team:"团队",
          thin:"测试",
          dateIn:"2016-05-01",
          moneyIn:"4424",
          type:"支出",
          money:"7799",
          name: '王小虎',
          dateOut: '2016-05-03',
        }, {
          team:"团队",
          thin:"测试",
          dateIn:"2016-05-01",
          moneyIn:"4424",
          type:"支出",
          money:"7799",
          name: '王小虎',
          dateOut: '2016-05-03',
        }, {
          team:"团队",
          thin:"测试",
          dateIn:"2016-05-01",
          moneyIn:"4424",
          type:"支出",
          money:"7799",
          name: '王小虎',
          dateOut: '2016-05-03',
        }]
    }
  }
}
</script>

<style scoped>

</style>