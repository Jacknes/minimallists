import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import Plain from "./Items/Plain";
import Check from "./Items/Check";
import Unordered from "./Items/Unordered";

type Props = {
  id: string;
  type: string;
  value: string;
  index: number;
};

const ListItem: React.FC<Props> = ({ id, value, type, index }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided: any) => (
        <Root
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {type === "plain" && <Plain value={value} />}
          {type === "check" && <Check value={value} />}
          {type === "ul" && <Unordered value={value} />}
        </Root>
      )}
    </Draggable>
  );
};

const Root = styled.div`
  height: 6vh;
  /* margin: 1vh 0; */
  margin-top: 1vh;
  /* margin: 16px 0; */
`;

export default ListItem;
