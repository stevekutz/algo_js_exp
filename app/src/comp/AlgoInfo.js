import React from 'react';
import {Button, Card, Dropdown, Form, Input, Label, Modal, List, Segment, Table} from 'semantic-ui-react';
import algoInfo from '../data/data';

const AlgoInfo = (index) => {
    console.log('key passed in is ', index.index);
    let id = index.index;
    return (
        <Segment>
            <Card.Group>
                <Card.Content>  
                    <Card.Description> Description: {algoInfo[id].description}  </Card.Description>
                    <Card.Description> Worst Case: {algoInfo[id].worstcase}  </Card.Description>
                    <Card.Description> Best Case: {algoInfo[id].bestcase}  </Card.Description>
                </Card.Content>            
            </Card.Group>        
        </Segment>
    )

}

export default AlgoInfo;
