import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import {
  Fab,
  Grid,
  Paper,
  Stack,
  Zoom,
  Button,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Avatar
} from "@mui/material";

//
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import Navs from "./navs";

// Grid的item 居然是要自己定义的? --- 噢,也就自己定义的样式,不是啥
// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "left",
//   color: theme.palette.text.secondary
// }));

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

// 隐藏顶部导航-的组件
function HiedOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined
  });
  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
}

// 返回顶部的组件
function ScrollTop(props: Props) {
  const { children, window } = props;

  // 使用hook
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  });
  // 写点击事件,
  const handleChlick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top"); // 选择器的话 需要有对应的元素才会生效的,不然是不会滚回去的

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  };
  // 然后这里就是你自己写的返回的div了,或者使用组件也行
  // 使用组件的话,就配置属性就行了
  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleChlick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {/* 一般不要忘记children  因为你的内容就是传过来的,这就是子内容 跟slot差不多  插槽 */}
        {children}
      </Box>
    </Zoom>
  );
}

// export default function HideAppBar(props: Props) {
//   return (
//     <React.Fragment>
//       {/* CssBaseline 是样式出初始化,就跟normalize 一样 */}
//       <CssBaseline></CssBaseline>
//       <ThemeProvider theme={darkTheme}>
//         <HiedOnScroll {...props}>
//           <AppBar>
//             <Toolbar>
//               <Navs></Navs>
//             </Toolbar>
//           </AppBar>
//         </HiedOnScroll>
//       </ThemeProvider>
//       {/* 等于这里就是一个div */}

//       {/* 这个Toolbar是拿来撑高度的,因为上面的绝对定位之后肯定会 空住 */}
//       <Toolbar id="back-to-top" />

//       {/* 返回顶部组件 */}
//       <ScrollTop {...props}>
//         <Fab color="secondary" size="small" aria-label="scroll back to top">
//           <KeyboardArrowUpIcon></KeyboardArrowUpIcon>
//         </Fab>
//       </ScrollTop>

//       {/* 假如我要定义一个返回顶部 ,那就在写一个独立组件,然后拼起来就行了 */}
//     </React.Fragment>
//   );
// }

// 带有响应式的头部,结果证明,组件的属性,还是要好好的看一遍的
export default function ResponsiveAppBar(props: Props) {
  return (
    <React.Fragment>
      <CssBaseline></CssBaseline>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* sendMsgForPrent={setAppTheme}  试试新的调用方式不做组件props的调用方式
              也就要用自定义方式ref 暴漏给父组件,进行调用.
            */}
            <Navs></Navs>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
}
