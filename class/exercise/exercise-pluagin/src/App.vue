<template>
  <div id="app">
    <Header class="header">
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
                <MenuItem name="1">
                    <router-link to="/">首页</router-link>
                </MenuItem>
                <MenuItem name="2">
                    <router-link to="/login">登录</router-link>
                </MenuItem>
                <MenuItem name="3">
                    <router-link to="/register">注册</router-link>
                </MenuItem>
                <MenuItem name="4">
                    <router-link to="/admin">管理页面</router-link>
                </MenuItem>
            </div>
        </Menu>
    </Header>
    <router-view/>
    <Footer class="footer">Footer</Footer>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
}
.header {
    flex: 0 0 auto;
}
.content {
  width: 100%;
  height: 600px;
  flex: 0 0 auto;
}
.footer {
    width: 100%;
    height: 200px;
    flex: 1 0 auto;
}
a{
    color: #fff;
}
</style>
