import React, { useState } from 'react';
import styled from 'styled-components';
import ItemCreator from './itemCreator';
import ListItem from './ListItem';

type Props = {

};

const List: React.FC<Props> = () => {
    const [items, setItems] = useState<string[]>([]);

    const handleCreateItem = (value: string) => {
        setItems([...items, value]);
    };

    return (
        <Root>
            {items.map(item => {
                return (
                    <ListItem type="plain" value={item} />
                )
            })}
            <ItemCreator onCreateItem={handleCreateItem} />
        </Root>
    )
};

const Root = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    height: 80%;
    margin-left: 20%;
    margin-right: 20%;
`;


export default List;