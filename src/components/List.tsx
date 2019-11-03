import React, { useState } from "react";
import styled from "styled-components";
import ItemCreator from "./itemCreator";
import ListItem from "./ListItem";

type Props = {};

const List: React.FC<Props> = () => {
  const [items, setItems] = useState<string[]>([]);
  const [editing, setEditing] = useState(true);

  const handleCreateItem = (value: string) => {
    setItems([...items, value]);
  };

  const handleEditing = (editing: boolean) => {
    setEditing(editing);
  };

  const numberOfItems = items.length;

  return (
    <Root editing={editing} numberOfItems={numberOfItems}>
      <ListItems>
        {items.map(item => {
          return <ListItem type="plain" value={item} />;
        })}
      </ListItems>
      <ItemCreator onEditing={handleEditing} onCreateItem={handleCreateItem} />
    </Root>
  );
};

type RootProps = {
  editing: boolean;
  numberOfItems: number;
};

const Root = styled.div<RootProps>`
  display: flex;
  flex: 1;
  flex-direction: column;
  transform: ${p =>
    p.editing ? `translateY(${46 - p.numberOfItems * 4}vh)` : "translateY(0)"};
    /* transition: all 300ms; */
  /* align-items: center; */
  /* justify-content: flex-end; */
  /* margin-bottom: 50%; */
  /* height: 100%; */
  /* justify-content: ${p => (p.editing ? "flex-end" : "flex-start")}; */
  /* justify-content: ${p => (p.editing ? "center" : "flex-start")}; */
  /* padding-top: ${p => (p.editing ? "50%" : "0%")}; */
  /* height: 80%; */
  /* margin-left: 20%;
  margin-right: 20%; */
  margin: 0 20%;
  /* margin: ${p => (p.editing ? "0" : "0 20%")}; */
  /* position: ${p => (p.editing ? "fixed" : "relative")};*/
  /* top: unset; */
  /* bottom: unset; */
  /* top: 0; */
  /* ${p => (p.editing ? "top: 50%; bottom: 50%;" : "top: 0; bottom: 0;")} */


  /* position: fixed;
  bottom: ${p => (p.editing ? "50%" : "0")};
  top: ${p => (p.editing ? "auto" : "0")}; */
  /* transform: translate(0 50%); */
  transition: all 0.3s ease-in-out;
  /* padding-bottom: 50%; */

`;

const ListItems = styled.div``;

export default List;
