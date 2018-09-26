<template>
  <div class="news-list">
       <div class="item-news">
          <!--  router-link 路径导航跳转组件-->
          <router-link to="/news/2018-09-26/1.html">新闻一</router-link>
          <router-link to="/news/2018-09-26/2.html">新闻二</router-link>
          <router-link to="/news/2018-09-26/3.html">新闻三</router-link>
          <router-link to="/news/2018-09-26/4.html">新闻四</router-link>
          <router-link to="/news/2018-09-26/5.html">新闻五</router-link>
          <router-link to="/news/2018-09-26/6.html">新闻六</router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: "NewsList",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.news-list {
  width: 100%;
  height: 40px;
  background: #2f2f2f;
  margin-top: 50px;
}
.item-news {
  width: 60%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
</style>
