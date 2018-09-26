<template>
  <div class="wrapper-header">
      <div class="item-header">
          <!--  router-link 路径导航跳转组件-->
          <router-link to="/">首页</router-link>
          <router-link to="/news">新闻</router-link>
          <router-link to="/login">登录</router-link>
          <router-link to="/register">注册</router-link>
          <router-link to="/about">关于我们</router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: "wrapperHeader",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper-header {
    width: 100%;
    height: 40px;
    background: #2f2f2f;
}
.item-header {
    width: 60%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
}
</style>
