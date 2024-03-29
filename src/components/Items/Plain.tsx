import React from "react";
import styled from "styled-components";

type Props = {
  value: string;
};

const PlainListItem: React.FC<Props> = ({ value }) => {
  return <Root>{value}</Root>;
};

const Root = styled.div`
  font-size: 2.5vh;
  /* margin-bottom: 1vh; */
`;

export default PlainListItem;
