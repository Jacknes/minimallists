import React, { useState } from "react";
import styled from "styled-components";
import isHotkey from "is-hotkey";

type Props = {
  value: string;
  display: boolean;
  onChangeTitle(value: string): void;
  onEditing(editing: boolean): void;
};

const TitleBar: React.FC<Props> = ({
  value: _value,
  display,
  onChangeTitle,
  onEditing
}) => {
  const [value, setValue] = useState(_value);

  const handleCreateItem = () => {
    if (value !== "") {
      onChangeTitle(value);
    }
  };

  const handleOnChange = (e: any) => {
    console.log("e", e.target.value);
    setValue(e.target.value);
  };

  const handleOnBlur = () => {
    handleCreateItem();
    onEditing(false);
  };

  const handleOnFocus = () => {
    onEditing(true);
  };

  const handleOnKeyDown = (e: React.KeyboardEvent) => {
    if (isHotkey("enter", e.nativeEvent)) {
      console.log("enter!!");
      handleCreateItem();
    }
  };

  return (
    <Root display={display}>
      <StyledInput
        value={value}
        placeholder="Untitled List"
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        onKeyDown={handleOnKeyDown}
      />
      <Menu>Menu</Menu>
    </Root>
  );
};

const Root = styled.div<any>`
  opacity: ${p => (p.display ? "1" : "0")};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  /* background-color: #e5e5e5; */
  /* border-bottom: 1px solid #e5e5e5; */
  display: flex;
  height: 6vh;
  padding: 0 10%;
  /* max-height: 4vh; */
  /* margin-top: 4px; */
  /* flex: 1; */
  /* padding: 8px 0; */
  transition: all 0.3s ease-in-out;
`;

const StyledInput = styled.input`
  /* text-align: center; */
  background-color: transparent;
  font-size: 1.5vmax;
  outline: none;
  border: 0;
  /* width: 100%; */
  padding: 0;
  /* ::placeholder{
        text-align: center;
    }
    :focus {
        text-align: left;
    } */
`;

const Menu = styled.span`
    font-size: 1.5vmax;
    line-height: 6vh;
    margin-left: auto;
`;

export default TitleBar;
