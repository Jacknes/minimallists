import React from "react";
import styled from "styled-components";
import Plain from "./Items/Plain";
import Check from "./Items/Check";

type Props = {
  type: string;
  value: string;
};

const ListItem: React.FC<Props> = ({ value, type }) => {
  return (
    <Root>
      {type === 'plain' && (
        <Plain value={value} />
      )}
      {type === 'check' && (
        <Check value={value} />
      )}
    </Root>
  );
};

const Root = styled.div`
  height: 4vh;
  margin: 1vh 0;
  /* margin: 16px 0; */
`;

export default ListItem;
