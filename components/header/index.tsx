// components 文件夹都是放组件的多
// import { Typography } from "@mui/material";
// import styles from "./header.module.scss"; // 可以这样使用scss module 模式,当然模块的话都要加上 .module
import HideAppBar from "./topBar";
export default function Header() {
  return (
    <HideAppBar>
      <div></div>
    </HideAppBar>
  );
}
