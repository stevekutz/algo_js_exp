import React from 'react';
import {Button, Card, Dropdown, Form, Input, Label, Modal, List, Table} from 'semantic-ui-react';


// ADDED THIS COMMENT 
const algoInfo = [
    {description: 'Merge Sort info', worstcase: 'o'},
    {description: 'Bubble Sort info', worstcase: 'o'},
    {description: 'Insertion Sort info', worstcase: 'o'},
    {description: 'Count Sort info', worstcase: 'o'},
]

//const LargeTable = ({testArr}) => {
const AlgoInfo = (index) => {
    console.log('key passed in is ', index);

    return (
        <Card.Group>
               
            <Card.Content>
                <Label>{algoInfo[`${index}`]}</Label>
            
            </Card.Content>
            
        </Card.Group>

    )

}

export default AlgoInfo;

// <Label>{algoInfo[key].description}</Label>