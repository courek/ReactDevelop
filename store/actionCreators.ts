// 这个是拿来定义 函数执行方法的内容

import { CHANGE_INPUT_VALUE } from "./constants";

const changeInputValue = (res) => ({
  type: CHANGE_INPUT_VALUE,
  data: res
});
