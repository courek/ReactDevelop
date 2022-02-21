import Head from "next/head";

import Link from "next/link"; // 链接a

//  不过使用ts 的内置类型的话需要安装声明的包 npm install --save-dev @types/react-native
// 当然还需要安装ts npm install --save-dev typescript

// index是 根路由
import type { ReactElement } from "react";
import Layout from "../components/layout";
import { Stack, Button, ThemeProvider, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
// 使用store
import "../store/index";

// import { Provider } from "react-redux";
// import store from "../store/index";
// 想切换主题需要放在全局才行了.

// 可以这样 嵌套自定义创建
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

// Stack 是堆叠 也就是栈的形式,包含横竖.

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
import Card from "./home/card";
import RightColumn from "./home/right-column";
import { Box } from "@mui/system";
export default function Index({ Component, Props }) {
  return (
    <>
      <Box sx={{ paddingTop: 2, paddingBottom: 2 }}>
        该博客使用Next.js开发,基于reactJs17,框架SSR模式渲染;数据库使用MySql,后端服务使用Node.js.
        博客管理后台使用Vue3.0,基于Element-admin模板下完成博客前台部分的数据状态管理.
        所有开发全基于js超集TypeScript. 主题模版(待完成)
      </Box>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={8.5}>
          <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {arr.map((v) => {
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <Card></Card>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item md={3.5}>
          <RightColumn></RightColumn>
        </Grid>
      </Grid>
      <style jsx>
        {`
          .test {
            height: 500px;
            background-color: #222;
          }
        `}
      </style>
    </>
  );
}

// 下面这些的意思应该是说,这个index.js的组件,要用到的模版layout页面 --- 应该是那个页面用到就要这样去配置
// 如果需要用到ts的话
Index.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
