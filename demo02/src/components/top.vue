<template>
  <div style="margin-top: 10px">
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple">
        <el-input v-model="form.msg" placeholder="请输入报销人、报销时间" style="width: 300px;text-align: left;margin-right: 1220px"></el-input>
      </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">

        <el-date-picker
            v-model="value1"
            type="date"
            placeholder="开始日期">
        </el-date-picker>
      </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        <el-date-picker
            v-model="value1"
            type="date"
            placeholder="结束日期">
        </el-date-picker>
      </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        <el-button size="small" style="margin-left: -180px">查询</el-button>

      </div></el-col>
      <el-col :span="6"><div id="grid-content bg-purple" >
        <el-popover
            placement="top-start"
            width="500"
            trigger="click">
          <add-out></add-out>
          <el-button slot="reference">添加数据</el-button>
        </el-popover>
      </div></el-col>

    </el-row>
    <cost></cost>
  </div>
</template>

<script>
import AddOut from "@/components/addOut";
import Cost from "@/components/cost";
export default {
  name: "top",
  components: {Cost,AddOut},
  data(){
    return {
      form:{
        msg:"",
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      value1: '',
      value2: '',

    }
  }
}
</script>

<style scoped>
.top{
  display:inline-block;
}
.el-col{
  margin-right: -150px;
}
.el-button{
  margin-left: 280px;
}
</style>