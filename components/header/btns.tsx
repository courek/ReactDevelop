import * as React from "react";
import clsx from "clsx";
import { styled } from "@mui/system";
import { useSwitch, UseSwitchProps } from "@mui/base/SwitchUnstyled";

const SwitchRoot = styled("span")`
  display: inline-block;
  position: relative;
  width: 62px;
  height: 34px;
  padding: 7px;
`;

const SwitchInput = styled("input")`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  margin: 0;
  cursor: pointer;
`;

const SwitchThumb = styled("span")(
  ({ theme }) => `
  position: absolute;
  display: block;
  background-color: ${theme.palette.mode === "dark" ? "#003892" : "#001e3c"};
  width: 32px;
  height: 32px;
  border-radius: 16px;
  top: 1px;
  left: 7px;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  &:before {
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
      "#fff"
    )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>') center center no-repeat;
  }

  &.focusVisible {
    background-color: #79B;
  }

  &.checked {
    transform: translateX(16px);
    
    &:before {
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>');
    }
  }
`
);

const SwitchTrack = styled("span")(
  ({ theme }) => `
  background-color: ${theme.palette.mode === "dark" ? "#8796A5" : "#aab4be"};
  border-radius: 10px;
  width: 100%;
  height: 100%;
  display: block;
`
);

function MUISwitch(props: UseSwitchProps) {
  const { getInputProps, checked, disabled, focusVisible } = useSwitch(props);

  const stateClasses = {
    checked,
    disabled,
    focusVisible
  };

  return (
    <SwitchRoot className={clsx(stateClasses)}>
      <SwitchTrack>
        <SwitchThumb className={clsx(stateClasses)} />
      </SwitchTrack>
      <SwitchInput {...getInputProps()} aria-label="Demo switch" />
    </SwitchRoot>
  );
}

// 函数形式的事件传递需要改改动很大...? 稍微麻烦,最后换了  使用redux
// type childrenProps = {
//   getCont: Function;
// };

import store from "../../store";
import { forwardRef } from "react"; // 深度调用子组件的时候

const UseSwitchesCustom = (props, ref) => {
  // 这样就能调用父组件的事件了, 通过传递事件过来给
  // const { getCont } = props;

  // const state = store.getState();
  const [state, setState] = React.useState(store.getState());
  const switchPageTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(props, event.target.checked, "能执行?");
    //子组件传值给父组件- 调用要传递给父组件方法的参,然后父组件在调用这个方法就行了 --- props传值方式. 但是深层组件,就很麻烦了
    // 动态修改,主题颜色
    const action = {
      type: "change_theme",
      value: event.target.checked
    };
    //  设置值
    store.dispatch(action);
    // 想改成给父组件直接调用的
  };
  return (
    <div>
      {/* defaultChecked 这样就默认是选中了 */}
      <MUISwitch onChange={switchPageTheme} />
    </div>
  );
};
export default forwardRef(UseSwitchesCustom);
