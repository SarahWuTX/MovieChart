<template>
  <div class="rank">
    <el-table :data="pageData" stripe style="width: 100%">
      <el-table-column prop="poster" label="海报" width="250%">
        <template slot-scope="scope">
          <img :src="scope.row.poster" height="150px">
        </template>
      </el-table-column>
      <el-table-column prop="title" label="电影" width="400%"></el-table-column>
      <el-table-column prop="year" label="年份" width="150%"></el-table-column>
      <el-table-column prop="rating.average" label="评分" width="150%"></el-table-column>

      <el-table-column>
        <template slot="header" slot-scope="scope">
          <input v-model="search" placeholder="输入关键字搜索" @keyup.enter="handleSearch">
          <el-button icon="el-icon-search" circle size="mini" @click="handleSearch"></el-button>
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleLookdetail(scope.$index, scope.row)">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="pagination">
      <el-pagination
        layout="total, prev, pager, next, jumper"
        :total="total"
        :page-size="10"
        :current-page="currentPage"
        @current-change="handlePageChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import data from "../assets/films.json";
export default {
  name: "rank",
  data() {
    return {
      tableData: data,
      searchData: [],
      search: "",
      currentPage: 1,
      fullData: true
    };
  },
  methods: {
    handleLookdetail(index, row) {
      this.$router.push({ name: "detail", params: { id: row._id } });
    },
    handlePageChange(page) {
      this.currentPage = page;
    },
    handleSearch() {
      // this.$message({
      //   message: this.search,
      //   type: "success"
      // });
      this.fullData = false;
      var result = [];
      var re = new RegExp(this.search, "i");
      for (var i = 0; i < data.length; i++) {
        if (JSON.stringify(data[i]).match(re)) {
          // console.log(data[i]);
          result.push(data[i]);
        }
      }
      // console.log(result);
      this.currentPage = 1;
      this.searchData = result;
      // location.reload();
    }
  },
  computed: {
    pageData() {
      var pageData = [];
      var begin = (this.currentPage - 1) * 10;
      var end = this.currentPage * 10;
      if (this.fullData) {
        for (var i = begin; i < end && i < this.tableData.length; i++) {
          pageData.push(this.tableData[i]);
        }
      } else {
        for (var j = begin; j < end && j < this.searchData.length; j++) {
          pageData.push(this.searchData[j]);
        }
      }
      return pageData;
    },
    total() {
      if (this.fullData) {
        return this.tableData.length;
      } else {
        return this.searchData.length;
      }
    }
  }
};
</script>

<style>
input {
  border-radius: 25px;
  height: 20px;
  padding: 3px;
  border: none;
  outline: none;
  background-color: whitesmoke;
}
input:hover {
  background-color: #40a0ff13;
}
</style>
