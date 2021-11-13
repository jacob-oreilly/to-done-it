import React, { FC } from 'react';

interface ListItemProps {
    text: string;
}

const ListItem: FC<ListItemProps> = ({ text }) => {
    return (
        <>
            <h1>{text}</h1>
        </>
    );
};

export default ListItem;