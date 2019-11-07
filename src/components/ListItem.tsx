import React from "react";
import styled from "styled-components";
import Plain from "./Items/Plain";
import Check from "./Items/Check";
import Unordered from './Items/Unordered';

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
      {type === 'ul' && (
        <Unordered value={value} />
      )}
    </Root>
  );
};

const Root = styled.div`
  height: 6vh;
  /* margin: 1vh 0; */
  margin-top: 1vh;
  /* margin: 16px 0; */
`;

export default ListItem;
