<template>
  <div id="app">
    <wrapperHeader />
    <!-- router-view 路由地址切换容器 -->
    <router-view></router-view>
  </div>
</template>

<script>
import wrapperHeader from "@/components/Header";

export default {
  name: "App",
  components: {
    wrapperHeader
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: #fff;
}
</style>
