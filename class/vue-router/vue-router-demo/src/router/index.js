import Vue from "vue";

import VueRouter from "vue-router";

import IndexPage from "@/pages/Index";

import AboutPage from "@/pages/About";

import LoginPage from "@/pages/Login";

import RegisterPage from "@/pages/Register";

import NotfoundPage from "@/pages/Notfound";

import NewsPage from "@/pages/News";

import NewsListPage from "@/pages/NewsList";

import NewsDetailPage from "@/pages/NewsDetail";

// use() 安装vue插件
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  // 配置路由
  routes: [{ // 每一项路由的匹配规则 一个地址匹配一个组件
      path: "/",
      name: "IndexPage",
      component: IndexPage,
      // 路由别名
      alias: "/index.html"
    },
    {
      path: "/about",
      name: "AboutPage",
      component: AboutPage,
      alias: "/about/index.html"
    },
    {
      path: "/login",
      name: "LoginPage",
      component: LoginPage
    },
    {
      path: "/register",
      name: "RegisterPage",
      component: RegisterPage
    },
    {
        path: "/news",
        name: "NewsPage",
        component: NewsPage,
        redirect: "/news/index.html",
        // 子路由
        children: [
            {
                path: "/news/index.html",
                name: "NewsListPage",
                component: NewsListPage,
            },
            {
                path: "/news/:data/:id",
                name: "NewsDetailPage",
                component: NewsDetailPage
            }
        ]
      },
    {
        path: "/index.html",
        // 路由重定向
        redirect: "/"
    },
    {
        path: "/about/index.html",
        // 路由重定向
        redirect: "/about"
    },
    {
      path: "*",
      name: "NotfoundPage",
      component: NotfoundPage
    }
  ]
})

export default router;