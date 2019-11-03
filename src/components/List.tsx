import React, { useState } from "react";
import styled from "styled-components";
import ItemCreator from "./itemCreator";
import ListItem from "./ListItem";

type Props = {
  items: string[];
  editing: boolean;
  onCreateItem(value: string, type: string): void;
  onEditing(editing: boolean): void;
};

const List: React.FC<Props> = ({ items, editing, onCreateItem, onEditing }) => {
  const handleCreateItem = (value: string) => {
    onCreateItem(value, "plain");
  };

  const numberOfItems = items.length;

  return (
    <Root editing={editing} numberOfItems={numberOfItems}>
      <OffsetWrapper editing={editing} numberOfItems={numberOfItems}>
        <ListItems>
          {items.map(item => {
            return <ListItem type="plain" value={item} />;
          })}
        </ListItems>
        <ItemCreator onEditing={onEditing} onCreateItem={handleCreateItem} />
      </OffsetWrapper>
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
  margin: 0 20%;
`;

const ListItems = styled.div`
  /* padding-top: 32px; */
`;

const OffsetWrapper = styled.div<RootProps>`
  transform: ${p =>
    p.editing || p.numberOfItems < 1
      ? `translate3d(0,${47.5 - p.numberOfItems * 5}vh, 0)`
      : "translate3d(0,0,0)"};
  transition: all 0.3s ease-in-out;
`;

export default List;
