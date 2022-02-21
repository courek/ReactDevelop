import Header from "./header/index";
import Footer from "./footer";

import { ThemeProvider, Container, Box, Stack, Paper } from "@mui/material";
import store from "../store/index";
import React, { useReducer } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { createTheme, styled } from "@mui/material/styles";
import { grey, orange } from "@mui/material/colors";
import { useState, useEffect } from "react";

// 考虑一下 要不要使用 tailwind   看起来是不错的,就是不知道维护会不会很麻烦
export default function Layout({ children }) {
  let data = store.getState().app;
  let [app, setApp] = React.useState(data);

  // 监听函数事件..subscribe
  // store.subscribe(handleChange); // 组件订阅 store，传递一个函数，只要 store 数据改变，这个函数就会被执行
  // 可以点击后在触发,赋值. 但是不能再使用subscribe 去监听,触发函数.  不然就要死循环了. 这个subscribe类似vue 的watch,观察者
  // 需要调用,然后再赋值才有效. 不然是没效果的
  store.subscribe(() => {
    setApp(store.getState().app);
  });

  // 这个函数类似,created 生命周期. 只是里面包含了几个生命周期.
  // useEffect(() => {
  //   console.log("执行再说");
  //   if (app.switchTheme) {
  //     setChange(app.derakTheme);
  //   }
  // });

  return (
    <>
      {/* 在这里包装一个 Provider  后续的子组件使用 redux会更方便*/}
      <Provider store={store}>
        <ThemeProvider theme={app.theme}>
          <Header></Header>
          <Container maxWidth="xl" sx={{ minHeight: 500 }}>
            <Box sx={{ paddingTop: 3, paddingBottom: 3 }}>
              <main>{children}</main>
            </Box>
          </Container>
          <Footer></Footer>
        </ThemeProvider>
      </Provider>
    </>
  );
}
