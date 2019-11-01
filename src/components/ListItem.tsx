import React from 'react';
import styled from 'styled-components';
import Plain from './Items/Plain';

type Props = {
    type: string;
    value: string;
};

const ListItem: React.FC<Props> = ({ value }) => {
    return (
        <Root>
            <Plain value={value} />
        </Root>
    )
};

const Root = styled.div`
    margin: 16px 0;
`;


export default ListItem;