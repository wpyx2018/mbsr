<template>
  <div class="home">
    <table>
      <tr>
        <th class="head" colspan="6">MBSR八周练习册</th>
      </tr>
      <tr>
        <td rowspan="2" style="width:70px;">
          <div style="display:flex;flex-direction:row;">
            <div class="zhou">{{selected}}</div>
            <select v-model="selected" class="selection">
              <option v-for="option in options" :value="option.value">{{ option.text }}</option>
            </select>
          </div>
        </td>
        <td @click="change" :class="value=='D1' ? 'class-a' : '' ">D1</td>
        <td @click="change" :class="value=='D2' ? 'class-a' : '' ">D2</td>
        <td @click="change" :class="value=='D3' ? 'class-a' : '' ">D3</td>
        <td @click="change" :class="value=='D4' ? 'class-a' : '' ">D4</td>
      </tr>
      <tr>
        <td @click="change" :class="value=='D5' ? 'class-a' : '' ">D5</td>
        <td @click="change" :class="value=='D6' ? 'class-a' : '' ">D6</td>
        <td @click="change" :class="value=='D7' ? 'class-a' : '' ">D7</td>
        <td style="background: rgb(236, 235, 235);"></td>
      </tr>
    </table>
    <table class="table2">
      <tr>
        <td class="head2">成员</td>
        <td class="head2">身体扫描</td>
        <td class="head2">专注：九点练习</td>
        <td class="head2">正念饮食</td>
        <td class="head2">3分钟呼吸空间</td>
        <td class="head2">正念伸展</td>
      </tr>
      <tr v-for="item in tableData">
        <td ref="chengyuan" @click="routerto(item.id)">{{item.chengyuan}}</td>
        <td>
          <svg v-show="item.shenti==1?true:false" class="icon" aria-hidden="true">
            <use xlink:href="#icon-Fillx"></use>
          </svg>
        </td>
        <td>
          <svg v-show="item.zhuanzhu==1?true:false" class="icon" aria-hidden="true">
            <use xlink:href="#icon-Fillx"></use>
          </svg>
        </td>
        <td>
          <svg v-show="item.zhengnian==1?true:false" class="icon" aria-hidden="true">
            <use xlink:href="#icon-Fillx"></use>
          </svg>
        </td>
        <td>
          <svg v-show="item.huxi==1?true:false" class="icon" aria-hidden="true">
            <use xlink:href="#icon-Fillx"></use>
          </svg>
        </td>
        <td>
          <svg v-show="item.shenzhan==1?true:false" class="icon" aria-hidden="true">
            <use xlink:href="#icon-Fillx"></use>
          </svg>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      zhou: "",
      selected: "第一周",
      value: "",
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
  methods: {
    change(v) {
      this.value = v.target.innerHTML;
      var str = v.target.innerHTML;
      var id = str.substr(str.length - 1, 1);
      //根据id请求数据
      //console.log(id);
    },
    routerto(id) {
      //console.log(id);
      //根据id进行路由跳转
      this.$router.push("/geren?id=" + id);
    }
  },
  created() {}
};
</script>

<style scoped>
.home {
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
  border: solid 2px rgb(160, 160, 160);
  width: 40px;
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
