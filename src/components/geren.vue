<template>
  <div class="geren">
    <table>
      <tr>
        <td rowspan="2" style="width:1px;">
          <div style="display:flex;flex-direction:row;">
            <div class="zhou">{{selected}}</div>
            <select @change="change" v-model="selected" class="selection">
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
        <td v-for="(item,index) in newallItemLists" class="head2">{{item.name}}</td>
      </tr>
      <tr v-for="(item,index) in newuserPracticeLists">
        <td>D{{item.days}}</td>
        <td v-for="(item2,index) in item.itemPraList" :class="item2.chooseStatus?'':'blackgr' ">
          <svg v-show="item2.status==1?true:false" class="icon" aria-hidden="true">
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
      userId: 1,
      weeks: 1,
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
      newuserPracticeLists: [],
      newallItemLists: []
    };
  },
  methods: {
    getData(url) {
      this.$ajax
        .get(url)
        .then(res => {
          this.processData(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    //数据处理
    processData(data) {
      var newuserPracticeLists = [];
      var olduserPracticeLists = data.userPracticeList;
      var oldallItemLists = data.allItemList;
      var length1 = oldallItemLists.length;
      for (var idx in olduserPracticeLists) {
        //console.log(olduserPracticeLists[idx]);
        var olduserPracticeList = olduserPracticeLists[idx];
        var itemPraList = olduserPracticeList.itemPraList;
        var length2 = itemPraList.length;
        if (length1 - length2 == 1) {
          itemPraList.push({});
        }
        if (length1 - length2 == 2) {
          itemPraList.push({}, {});
        }
        var temp = {
          days: olduserPracticeList.days,
          itemPraList: olduserPracticeList.itemPraList
        };
        newuserPracticeLists.push(temp);
      }
      this.newuserPracticeLists = newuserPracticeLists;
      this.newallItemLists = oldallItemLists;
    },
    change() {
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
        `getDataByUser?books=1&weeks=${this.weeks}&userId=${this.userId}`
      );
    }
  },
  created() {
    var id = this.$route.query.id;
    //console.log(id);
    this.$ajax
      .get("getMemberData?books=1&weeks=1&days=1")
      .then(res => {
        this.chengyuan = res.data.userPracticeList[id - 1].userName;
        //console.log(this.chengyuan);
        this.userId = res.data.userPracticeList[id - 1].userId;
        // console.log(this.userId);
        this.getData(`getDataByUser?books=1&weeks=1&userId=${this.userId}`);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.geren {
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
  width: 52px;
  height: 40px;
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
.blackgr {
  background-color: rgb(236, 235, 235);
}
</style>
