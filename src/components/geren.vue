<template>
  <div class="geren">
    <table>
      <tr>
        <td rowspan="2" style="width:1px;">
          <div style="display:flex;flex-direction:row;">
            <div class="zhou">{{selected}}</div>
            <select v-model="selected" class="selection">
              <option v-for="option in options" :value="option.value">{{ option.text }}</option>
            </select>
          </div>
        </td>
        <td style="background: rgb(127, 214, 127);">成员：{{chengyuan}}</td>
      </tr>
    </table>
    <table class="table2">
      <tr>
        <td class="head2">时间</td>
        <td class="head2">身体扫描</td>
        <td class="head2">专注：九点练习</td>
        <td class="head2">正念饮食</td>
        <td class="head2">3分钟呼吸空间</td>
        <td class="head2">正念伸展</td>
      </tr>
      <tr v-for="list in tableData">
        <td>{{list.riqi}}</td>
        <td>
          <svg v-show="list.shijian==1?true:false" class="icon" aria-hidden="true">
            <use xlink:href="#icon-Fillx"></use>
          </svg>
        </td>
        <td>
          <svg v-show="list.zhuanzhu==1?true:false" class="icon" aria-hidden="true">
            <use xlink:href="#icon-Fillx"></use>
          </svg>
        </td>
        <td>
          <svg v-show="list.zhengnian==1?true:false" class="icon" aria-hidden="true">
            <use xlink:href="#icon-Fillx"></use>
          </svg>
        </td>
        <td>
          <svg v-show="list.huxi==1?true:false" class="icon" aria-hidden="true">
            <use xlink:href="#icon-Fillx"></use>
          </svg>
        </td>
        <td>
          <svg v-show="list.shenzhan==1?true:false" class="icon" aria-hidden="true">
            <use xlink:href="#icon-Fillx"></use>
          </svg>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Geren",
  data() {
    return {
      zhou: "",
      selected: "第一周",
      value: "",
      chengyuan: "",
      options: [
        {
          value: "第一周",
          text: "第一周"
        },
        {
          value: "第二周",
          text: "第二周"
        },
        {
          value: "第三周",
          text: "第三周"
        },
        {
          value: "第四周",
          text: "第四周"
        },
        {
          value: "第五周",
          text: "第五周"
        },
        {
          value: "第六周",
          text: "第六周"
        },
        {
          value: "第七周",
          text: "第七周"
        },
        {
          value: "第八周",
          text: "第八周"
        }
      ],
      tableData: [
        {
          riqi: "D1",
          shijian: 1,
          zhuanzhu: 0,
          zhengnian: 1,
          huxi: 1,
          shenzhan: 0
        },
        {
          riqi: "D2",
          shijian: 0,
          zhuanzhu: 1,
          zhengnian: 1,
          huxi: 0,
          shenzhan: 1
        },
        {
          riqi: "D3",
          shijian: 0,
          zhuanzhu: 1,
          zhengnian: 0,
          huxi: 0,
          shenzhan: 1
        },
        {
          riqi: "D4",
          shijian: 0,
          zhuanzhu: 1,
          zhengnian: 1,
          huxi: 0,
          shenzhan: 0
        },
        {
          riqi: "D5",
          shijian: 0,
          zhuanzhu: 1,
          zhengnian: 1,
          huxi: 0,
          shenzhan: 1
        },
        {
          riqi: "D6",
          shijian: 0,
          zhuanzhu: 0,
          zhengnian: 1,
          huxi: 0,
          shenzhan: 1
        },
        {
          riqi: "D7",
          shijian: 0,
          zhuanzhu: 1,
          zhengnian: 0,
          huxi: 0,
          shenzhan: 1
        }
      ],
      tableData2: [
        {
          id: 1,
          chengyuan: "张三三",
          shenti: 1,
          zhuanzhu: 0,
          zhengnian: 1,
          huxi: 1,
          shenzhan: 0
        },
        {
          id: 2,
          chengyuan: "李四四",
          shenti: 0,
          zhuanzhu: 1,
          zhengnian: 1,
          huxi: 0,
          shenzhan: 1
        },
        {
          id: 3,
          chengyuan: "王五五",
          shenti: 0,
          zhuanzhu: 1,
          zhengnian: 1,
          huxi: 0,
          shenzhan: 1
        }
      ]
    };
  },
  created() {
    var id = this.$route.query.id;
    this.chengyuan = this.tableData2[id - 1].chengyuan;
  }
};
</script>

<style scoped>
.geren {
  height: 100%;
  font-size: 12px;
}
.icon {
  width: 4em;
  height: 20px;
  position: relative;
  top: 3px;
}

.el-table {
  color: black;
  font-size: 13px;
}

table {
  font-size: 13px;
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  border: solid 2px rgb(160, 160, 160);
}

table th {
  text-align: center;
}

table td {
  width: 54px;
  border: solid 2px rgb(160, 160, 160);
}
table td:nth-child(1) {
  padding: 0;
}
.head {
  padding: 10px;
  background: rgb(127, 214, 127);
  font-weight: normal;
}
.head2 {
  background: rgb(127, 214, 127);
}
.selection {
  text-align: center;
  width: 19px;
  height: 60px;
  padding: 0;
  background: rgb(236, 235, 235);
}
.class-a {
  background: rgb(127, 214, 127);
}
.zhou {
  margin: 20px auto;
  text-align: center;
}
</style>
