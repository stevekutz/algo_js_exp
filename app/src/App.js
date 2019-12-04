import React from 'react';
import {Button, Dropdown, Form, Input, Label, Modal, Segment, Table} from 'semantic-ui-react';
import {useState} from 'reinspect';

// const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


const App = () => {


    const [testArrLength, settestArrLength] = useState( 10, 'TestArrayLength');
    const [testArr, setTestArr] = useState([], 'Test Array');

    const makeRandArr = () => {
        const arr = [];
        
        for(let i = 0; i < testArrLength; i++){
            arr.push(Math.floor((Math.random() * testArrLength) + 1))
        }
        console.log(arr);
        setTestArr(arr);
    }

    return (
        <Segment>
            <Label> Algorithms </Label>
            <Segment>
                <Label> Enter length of random array </Label>
                <Input></Input>
                <Segment>
                    <Button onClick = {makeRandArr}> Create random numbers </Button>
                </Segment>
            </Segment>
            
        
            <Segment style = {{width: '50%', margin: '0 auto'}}>
            <Table>
                <Table.Body>
                    <Table.Row>
                        {testArr.map((item, index) => (

                            <Table.Cell 
                                key = {index}
                                style = {{border: '1px solid pink'}}
                                // collapsing 
                                // width = {1}
                                textAlign = 'center'
                            >  
                            {item}</Table.Cell>
                            ))}
                    </Table.Row>
                </Table.Body>
            </Table>

            </Segment>    

        </Segment>
    );
}

export default App;
