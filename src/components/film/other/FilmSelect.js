import React from 'react';
import {Form} from "react-bootstrap";

const FilmSelect = ({handleSelect}) => {
    return (
        <>
            <div style={{marginRight: 15}}>Order</div>
            <Form.Select onChange={handleSelect} defaultValue={'RATING'}>
                <option value={'RATING'} key={'RATING'}>Rating</option>
                <option value={'NUM_VOTE'} key={'NUM_VOTE'}>Number of votes</option>
                <option value={'YEAR'} key={'YEAR'}>Year</option>
            </Form.Select>
        </>
    );
};

export default FilmSelect;