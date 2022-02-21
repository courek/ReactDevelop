// _app.js  才是所有layout布局的主要入口

// 如果用到ts的话需要对页面进行检查的话, js的话是 jsx,ts的话是 tsx
// import "../styles/normalize.css"; // 样式初始化
import "../styles/base.scss"; // 基础类

// 使用Mui --- Material Ui
import type { ReactElement, ReactNode } from "react";
// 使用@fontsource/roboto 字体

// 使用Material 图标, npm install @mui/icons-material
//import { AccessAlarm, ThreeDRotation } from '@mui/icons-material'; // 异步引入
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'; //  单个使用

// 框架使用的是 emotion  css 写法.  所以还是要可能使用一下

import type { NextPage } from "next";
import type { AppProps } from "next/app";

// 一个高级类型-- 确定是返回的是一个 ReactNode类型的
type NextPageWithLayout = AppProps & {
  getLayout?: (page: ReactElement) => ReactNode;
};
// 确定 props传参的时候是一个组件,其中组件上包含了子组件xxx
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}
