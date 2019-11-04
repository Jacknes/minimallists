import React, { useState } from "react";
import styled from "styled-components";
import isHotkey from "is-hotkey";

type Props = {
  onCreateItem(value: string, type: string): void;
  onEditing(editing: boolean): void;
};

const ItemCreator: React.FC<Props> = ({ onCreateItem, onEditing }) => {
  const [value, setValue] = useState("");
  const [type, setType] = useState('plain');

  const handleCreateItem = () => {
    if (value !== "") {
      onCreateItem(value, type);
      setValue("");
    }
  };

  const handleOnChange = (e: any) => {
    console.log("e", e.target.value);
    setValue(e.target.value);
  };

  const handleOnBlur = () => {
    // handleCreateItem();
    onEditing(false);
  };

  const handleOnFocus = () => {
    onEditing(true);
  };

  const handleOnKeyDown = (e: React.KeyboardEvent) => {
    const event = e.nativeEvent;
    if (isHotkey("enter", event)) {
      console.log("enter!!");
      handleCreateItem();
    } else if (isHotkey('tab', event)) {
      console.log('tab!!');
      e.preventDefault();
      setType('check');
    }
  };

  return (
    <Root>
      {type === 'check' && (
        <StyledCheckbox type="checkbox" />
      )}
      <StyledInput
        value={value}
        placeholder="New list item..."
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        onKeyDown={handleOnKeyDown}
        autoFocus
      />
    </Root>
  );
};

const Root = styled.div`
  /* border-bottom: 1px solid #e5e5e5; */
  display: flex;
  height: 4vh;
  margin-top: 1vh;
  align-items: center;
`;

const StyledInput = styled.input`
  /* text-align: center; */
  font-size: 32px;
  outline: none;
  border: 0;
  width: 100%;
  padding: 0;
  /* ::placeholder{
        text-align: center;
    }
    :focus {
        text-align: left;
    } */
`;

const StyledCheckbox = styled.input`
    font-size: 32px;
    line-height: 32px;
    margin-right: 8px;
`;

export default ItemCreator;
