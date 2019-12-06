import React from 'react';
import {Button, Dropdown, Form, Input, Label, Modal, Segment, Table} from 'semantic-ui-react';
import {useState} from 'reinspect';

import TableSmall from './comp/TableSmall';
import LargeTable from './comp/LargeTable';

// const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


const App = () => {
    const [testArrLength, setTestArrLength] = useState( 0, 'TestArrayLength');
    const [testArr, setTestArr] = useState([], 'Test Array');

    const handleInput = e => {
        const {value} = e.target;
        setTestArrLength(Number(value));    
    }

    const makeRandArr = () => {
        const arr = [];
        
        for(let i = 0; i < testArrLength; i++){
            arr.push(Math.floor((Math.random() * testArrLength) + 1))
        }
        console.log(arr);
        setTestArr(arr);
        setTestArrLength(0);
    }

    return (
        <Segment>
            <Label> Algorithms </Label>
            <Form>
                <Label> Enter length of random array </Label>
                <Input
                    placeholder = {!testArrLength ? 'enter a length' : ''}
                    onChange = {handleInput}
                />
            </Form>
                
            <Segment>
                <Button onClick = {makeRandArr}> Create random numbers </Button>
            </Segment>
        
            <Segment style = {{width: '50%', margin: '0 auto'}}>
                {testArr.length <= 15 
                    ?
                        <TableSmall testArr = {testArr}/>
                    :
                        <LargeTable testArr = {testArr}/>   


                }
            </Segment>    

        </Segment>
    );
}

export default App;
