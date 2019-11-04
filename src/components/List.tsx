import React, { useState } from "react";
import styled from "styled-components";
import ItemCreator from "./itemCreator";
import ListItem from "./ListItem";
import { ItemType, Item } from '../types';

type Props = {
  items: Item[];
  editing: boolean;
  onCreateItem(value: string, type: ItemType): void;
  onEditing(editing: boolean): void;
};

const List: React.FC<Props> = ({ items, editing, onCreateItem, onEditing }) => {
  const handleCreateItem = (value: string, type: ItemType) => {
    onCreateItem(value, type);
  };

  const numberOfItems = items.length;

  return (
    <Root editing={editing} numberOfItems={numberOfItems}>
      <OffsetWrapper editing={editing} numberOfItems={numberOfItems}>
        <ListItems>
          {items.map(item => {
            return <ListItem type={item.type} value={item.value} />;
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
  margin: 0 30%;
`;

const ListItems = styled.div`
  /* padding-top: 32px; */
`;

const OffsetWrapper = styled.div<RootProps>`
  transform: ${p =>
    p.editing || p.numberOfItems < 1
      ? `translate3d(0,${47.5 - p.numberOfItems * 6}vh, 0)`
      : "translate3d(0,64px,0)"};
  transition: all 0.3s ease-in-out;
`;

export default List;
