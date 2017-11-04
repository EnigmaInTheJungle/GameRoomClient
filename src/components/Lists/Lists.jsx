// import './List.css';
import List from '../List/List';
import React from 'react';

const Lists = ({lists}) => {
    return (
        <div className='Lists'>
            { lists ? lists.map((list) =>
                <List key = {list.id} label={list.label}/>
            ) : null }
        </div>
    );
};

export default Lists;
