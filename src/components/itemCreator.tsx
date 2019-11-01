import React, { useState } from 'react';
import styled from 'styled-components';

type Props = {
    onCreateItem(value: string): void;
};

const ItemCreator: React.FC<Props> = ({ onCreateItem }) => {
    const [value, setValue] = useState('');

    const handleOnChange = (e: any) => {
        console.log('e', e.target.value);
        setValue(e.target.value);
    };

    const handleOnBlur = () => {
        if (value !== '') {
            onCreateItem(value);
            setValue('');
        }
    };

    return (
        <Root>
            <StyledInput value={value} placeholder="New list item..." onChange={handleOnChange} onBlur={handleOnBlur} />
        </Root>
    )
};

const Root = styled.div`
    /* border-bottom: 1px solid #e5e5e5; */
    display: flex;
    /* flex: 1; */
    padding: 8px 0;
`;

const StyledInput = styled.input`
    /* text-align: center; */
    font-size: 32px;
    outline: none;
    border: 0;
    width: 100%;
    /* ::placeholder{
        text-align: center;
    }
    :focus {
        text-align: left; 
    } */
`;

export default ItemCreator;