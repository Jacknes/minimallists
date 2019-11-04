import React, { useState } from "react";
import styled from "styled-components";
import List from "./components/List";
import TitleBar from "./components/TitleBar";
import { ItemType, Item } from './types';

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [editing, setEditing] = useState(true);

  const handleCreateItem = (value: string, type: ItemType) => {
    setItems([...items, { value, type }]);
  };

  const handleEditing = (editing: boolean) => {
    setEditing(editing);
  };

  const handleChangeTitle = (value: string) => { };
  const handleEditingTitle = (editing: boolean) => { };
  console.log("items.length", items.length);
  return (
    <Root>
      <TitleBar
        value=""
        display={items.length > 0}
        onChangeTitle={handleChangeTitle}
        onEditing={handleEditingTitle}
      />
      <List
        items={items}
        editing={editing}
        onCreateItem={handleCreateItem}
        onEditing={handleEditing}
      />
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  /* padding: 16px; */
  margin: 0 auto;
  justify-content: center;
  /* align-items: center; */
  height: 100vh;
`;

export default App;
