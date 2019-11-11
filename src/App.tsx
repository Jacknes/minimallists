import React, { useState } from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import List from "./components/List";
import TitleBar from "./components/TitleBar";
import { ItemType, Item } from "./types";

import initialData from "./initial-data";

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>(initialData.items as Item[]);
  const [editing, setEditing] = useState(true);

  const handleCreateItem = (value: string, type: ItemType) => {
    setItems([...items, { id: `${value}-id`, value, type }]);
  };

  const handleEditing = (editing: boolean) => {
    setEditing(editing);
  };

  const handleDragEnd = (result: any) => {};

  const handleChangeTitle = (value: string) => {};
  const handleEditingTitle = (editing: boolean) => {};
  console.log("items.length", items.length);
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Root>
        <TitleBar
          value=""
          display={items.length > 0}
          onChangeTitle={handleChangeTitle}
          onEditing={handleEditingTitle}
        />
        {}
        <List
          items={items}
          editing={editing}
          onCreateItem={handleCreateItem}
          onEditing={handleEditing}
        />
      </Root>
    </DragDropContext>
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
