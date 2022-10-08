import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Notes = () => {
    return (
        <div className='notes' >
            <h1>Title</h1>
            <br />
            <p>this is your Notes</p>
            <button className='btn'>
            <DeleteOutlineIcon className='deleteIcons'/>
            </button>
        </div>
    );
};

export default Notes;