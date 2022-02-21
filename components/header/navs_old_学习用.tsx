type Navs = {
  name: string;
  link?: string;
  [x: string]: any;
};

const navData: Navs[] = [
  {
    name: "首页",
    link: ""
  },
  {
    name: "关于",
    link: ""
  },
  {
    name: "随笔",
    link: ""
  }
];
// 使用styled-components 方式写写样式--- 因为使用ts,所以需要手动引入.  但是不懂为什么刷新就无效,所以不怎么想用
// 也不是说无效,是首次加载样式不更新. 所以还是用scss吧...  又熟悉方便.
// 还有emotion 方式,也是css-in-js  但是个人觉得不如 styled-components .
// import styled from "styled-components";
// const Ul = styled.ul`
//   display: flex;
// `;
// const Li = styled.li`
//   list-style: none;
//   height: 40px;
//   text-align: center;
//   font-size: 16px;
//   border: solid 1px #eee;
//   border-radius: 4px;
//   flex: 1;
//   min-width: 0;
// `;

// import styles from "./header.module.scss"; // 可以这样使用scss module 模式,当然模块的话都要加上 .module
// const Lists = navData.map((v) => <Li>{v.name}</Li>);
// const navs = () => {
//   return (
//     <div>
//       <Ul>{Lists}</Ul>
//     </div>
//   );
// };

// 使用scss 模式
import styles from "./header.module.scss"; // 可以这样使用scss module 模式,当然模块的话都要加上 .module
const Lists = navData.map((v) => <li>{v.name}</li>);
const navs = () => {
  return (
    <div>
      <ul className={styles.navs}>{Lists}</ul>
    </div>
  );
};

export default navs;
