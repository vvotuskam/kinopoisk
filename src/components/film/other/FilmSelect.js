import React from 'react';
import {Form} from "react-bootstrap";

const FilmSelect = ({handleSelect}) => {
    return (
        <>
            <div style={{marginRight: 15}}>Order</div>
            <Form.Select onChange={handleSelect}>
                <option value={'RATING'} selected>Rating</option>
                <option value={'NUM_VOTE'}>Number of votes</option>
                <option value={'YEAR'}>Year</option>
            </Form.Select>
        </>
    );
};

export default FilmSelect;