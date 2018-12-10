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
            <select @change="change2" v-model="selected" class="selection">
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
        <td v-for="(item,index) in itemList" class="head2">{{item.name}}</td>
      </tr>
      <tr v-for="(item,index) in userPracticeList">
        <td @click="routerto(index)">{{item.userName}}</td>
        <td v-for="item2 in item.itemPracticeList" :key="item2.item">
          <svg v-show="item2.itemStatus==1?true:false" class="icon" aria-hidden="true">
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
      itemList: [],
      selected: "第一周",
      value: "",
      weeks: 1,
      days: 1,
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
      userPracticeList: []
    };
  },
  methods: {
    getData(url) {
      this.$ajax
        .get(url)
        .then(res => {
          //console.log(res.data.itemList[0]);
          this.itemList = res.data.itemList;
          this.userPracticeList = res.data.userPracticeList;
        })
        .catch(err => {
          console.log(err);
        });
    },
    change(v) {
      this.value = v.target.innerHTML;
      var str = v.target.innerHTML;
      var days = str.substr(str.length - 1, 1);
      //根据days请求数据
      //console.log(days);
      this.days = days;
      this.getData(
        `getMemberData?books=1&weeks=${this.weeks}&days=${this.days}`
      );
    },
    change2() {
      var selected = this.selected;
      //console.log(selected);
      var weeks = 1;
      switch (selected) {
        case "第一周":
          weeks = 1;
          break;
        case "第二周":
          weeks = 2;
          break;
        case "第三周":
          weeks = 3;
          break;
        case "第四周":
          weeks = 4;
          break;
        case "第五周":
          weeks = 5;
          break;
        case "第六周":
          weeks = 6;
          break;
        case "第七周":
          weeks = 7;
          break;
        case "第八周":
          weeks = 8;
      }
      this.weeks = weeks;
      //console.log(weeks);
      this.getData(
        `getMemberData?books=1&weeks=${this.weeks}&days=${this.days}`
      );
    },
    routerto(id) {
      //console.log(id + 1);
      var id = id + 1;
      //根据id进行路由跳转
      this.$router.push("/geren?id=" + id);
    }
  },
  created() {
    this.getData(`getMemberData?books=1&weeks=1&days=1`);
  }
};
</script>

<style scoped>
.home {
  height: 100%;
  font-size: 12px;
}
.icon {
  width: 34px;
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
  width: 50px;
  height: 30px;
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
  height: 66px;
  padding: 0;
  background: rgb(236, 235, 235);
}
.class-a {
  background: rgb(127, 214, 127);
}
.zhou {
  margin: 25px auto;
  text-align: center;
}
</style>
