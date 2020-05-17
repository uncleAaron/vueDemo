import RouterDemo from "./components/RouterDemo";
import RouterChildrenDemo from "./components/RouterChildrenDemo";

import NotFound from "./components/NotFound";

const routes = [
  { path: "/foo", component: RouterDemo, name: "1" },
  { path: "/bar", component: RouterDemo, name: "2" },
  // 嵌套配置
  {
    // 当/user/:id 匹配成功
    // RouterDemo 会被渲染在 App 的 <router-view/> 中
    path: "/user/:id", // :id 是个动态的值
    component: RouterDemo,
    name: "3",
    props: true, // :id 这个动态的值，作为属性prop传给component(此处为RouterDemo，RouterDemo可以声明一个名为id的prop，以供传入使用)
    children: [
      {
        // 当/user/:id/profile 匹配成功
        // RouterChildrenDemo 会被渲染在 RouteDemo 的 <router-view/> 中
        path: "profile",
        component: RouterChildrenDemo,
        name: "3-1",
      },
    ],
  },
  { path: '/a', redirect: '/bar' },
  { path: "*", component: NotFound, name: "404" },
];

export default routes;
