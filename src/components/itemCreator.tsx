import React, { useState } from "react";
import styled from "styled-components";
import isHotkey from "is-hotkey";

type Props = {
  onCreateItem(value: string): void;
  onEditing(editing: boolean): void;
};

const ItemCreator: React.FC<Props> = ({ onCreateItem, onEditing }) => {
  const [value, setValue] = useState("");

  const handleCreateItem = () => {
    if (value !== "") {
      onCreateItem(value);
      setValue("");
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
    <Root>
      <StyledInput
        value={value}
        placeholder="New list item..."
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        onKeyDown={handleOnKeyDown}
      />
    </Root>
  );
};

const Root = styled.div`
  /* border-bottom: 1px solid #e5e5e5; */
  display: flex;
  /* flex: 1; */
  padding: 8px 0;
`;

const StyledInput = styled.input`
  /* text-align: center; */
  font-size: 32px;
  outline: none;
  border: 0;
  width: 100%;
  /* ::placeholder{
        text-align: center;
    }
    :focus {
        text-align: left;
    } */
`;

export default ItemCreator;
