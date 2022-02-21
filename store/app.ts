import * as React from "react";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { Theme } from "@mui/system";

interface AppState {
  theme: Theme;
  derakTheme: Theme;
  switchTheme: boolean;
}

const defaultState: AppState = {
  theme: createTheme(),
  derakTheme: createTheme({
    palette: {
      primary: {
        light: grey[900],
        main: grey[900],
        dark: grey[900]
      }
    }
  }),
  switchTheme: false
};

// 这部分就是 render函数
const render = (state = defaultState, action) => {
  // 主题设置部分,暂时只要白天黑夜就好了.
  if (action.type === "change_theme") {
    let s = { ...state };
    s.switchTheme = action.value;
    if (action.value) {
      s.theme = createTheme({
        palette: {
          primary: {
            light: grey[900],
            main: grey[900],
            dark: grey[900]
          }
        }
      });
    } else {
      s.theme = createTheme();
    }
    return s;
  }

  return state;
};
// redux 下不能直接调用hook 避免死循环等
// useContext 可以代替,子父组件之间的prop形式传值,  因为不用class写法之后,就很少有prop了
// https://zhuanlan.zhihu.com/p/260789887

export default render;
