import React, { FC } from 'react';
import ListItem from './list-item';

interface ListProps {
    text: string;
}

const List: FC<ListProps> = ({ text }) => {
    return (
        <>
            <ListItem text="" />
        </>
    );
};

export default List;