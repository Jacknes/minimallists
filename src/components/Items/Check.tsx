import React from "react";
import styled from "styled-components";

type Props = {
    value: string;
};

const CheckListItem: React.FC<Props> = ({ value }) => {
    return <Root><StyledCheckbox type="checkbox" /><Text>{value}</Text></Root>;
};

const Root = styled.div`
  /* margin-bottom: 1vh; */
  display: flex;
  align-items: center;
`;

const Text = styled.span`
font-size: 2.5vh;

`

const StyledCheckbox = styled.input`
    font-size: 2.5vh;
    line-height: 2.5vh;
    margin-right: 8px;
`;

export default CheckListItem;
