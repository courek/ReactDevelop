import styles from "../styles/footer.module.css"; // 可以这样使用css module 模式
// 但是需要用一个module关键字? 好像. 不然就会报错了.

// 测试在这里使用store

import store from "../store/index";
import React, { useReducer } from "react";

// import { useState, useEffect } from "react";
import {
  Stack,
  Button,
  ThemeProvider,
  Checkbox,
  Typography,
  Container
} from "@mui/material";
// import { createTheme } from "@mui/material/styles";
// import { green, orange } from "@mui/material/colors";
// import { Provider, useSelector, useDispatch } from "react-redux";

// 自定义样式的结构
// import Slider, { SliderProps } from "@mui/material/Slider";
import { alpha, styled } from "@mui/material/styles";

// const SuccessSlider = styled(Slider)<SliderProps>(({ theme }) => {
//   let themeState = store.getState().app.switchTheme;
//   let color = themeState
//     ? theme.palette.success.dark
//     : theme.palette.success.main;
//   return {
//     width: 300,
//     color: color,
//     "& .MuiSlider-thumb": {
//       "&:hover, &.Mui-focusVisible": {
//         boxShadow: `0px 0px 0px 8px ${alpha(color, 0.16)}`
//       },
//       "&.Mui-active": {
//         boxShadow: `0px 0px 0px 14px ${alpha(color, 0.16)}`
//       }
//     }
//   };
// });

// function valuetext(value: number) {
//   return `${value}°C`;
// }

const LinkButton = styled(Button)(({ theme }) => {
  return {
    color: "#fff"
  };
});

const footer = () => {
  return (
    <>
      <div className="footer">
        <Container maxWidth="xl">
          <Stack direction="row" spacing={2}>
            <LinkButton>Link More</LinkButton>
            <LinkButton>Products</LinkButton>
            <LinkButton>Contact</LinkButton>
            <LinkButton>Abouts</LinkButton>
          </Stack>
          <Stack direction="row" spacing={2}>
            <LinkButton>Author By Courek.outlook</LinkButton>
          </Stack>
        </Container>
      </div>
      <style jsx>
        {`
          .footer {
            height: 80px;
            // line-height: 80px;
            text-align: center;
            color: #fff;
            background-color: #222;
          }
        `}
      </style>
    </>
  );
};
export default footer;
