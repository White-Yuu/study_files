<template>

  <div style="text-align: left; font-family: 'Microsoft YaHei';height: 542px;width: 500px">
    <h1 style="color: #2D2F33;text-align: center" >添加新数据</h1>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="报销人: " >
        <div style="text-align: left;">
        <el-select v-model="form.team" placeholder="团队"  >
          <el-option  label="小组" value="team"></el-option >
          <el-option label="公司" value="company"></el-option>
        </el-select>
        </div>
      </el-form-item>
      <el-form-item label="报销事务:">
        <el-input v-model="form.th" placeholder="请输入事由:"></el-input>
      </el-form-item>
      <el-form-item label="收入/支出时间：">
        <el-input v-model="form.time" placeholder="请输入收入/支出时间 "></el-input>
      </el-form-item>
      <el-form-item label="收支金额：">
        <el-input v-model="form.money" placeholder="请输入收支金额:"></el-input>
      </el-form-item>
      <el-form-item label="报销类型:" >
        <div style="text-align: left;">
          <el-select v-model="form.cost" placeholder="支出"  >
            <el-option  label="吃饭" value="eat"></el-option >
            <el-option label="酒店" value="sleep"></el-option>
          </el-select>
        </div>
      </el-form-item>
      <el-form-item label="报销日期：">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="请输入时间" v-model="form.date1" style="width: 282px;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="Yes" style="margin-right: 40px" >确定</el-button>
        <el-button type="primary" @click="No" >取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "addOut",
  data() {
    return {
      form: {
        team: '',
        th: '',
        time:'',
        money:'',
        cost:'',
        date1: ''

      }
    }
  },
  methods: {
    Yes() {
      console.log('submit!');
    },
    No() {
      console.log('no!');
    }
  }
}
</script>

<style scoped>
.el-button{
  background-color: #2985F7;
  width: 78px;
  height: 30px;

}
.el-input{
  width: 282px;
  height: 40px;
}
.el-select{
  width: 282px;
  height: 40px;
}
.el-form-item~label{
  color: red;
}
</style>