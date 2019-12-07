import React from 'react';
import {Button, Container, Dropdown, Form, Input, Label, Modal, Segment, Table} from 'semantic-ui-react';
import {useState} from 'reinspect';

import TableSmall from './comp/TableSmall';
import LargeTable from './comp/LargeTable';

// const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const dropDownTypes = [
    { key: 1, text: 'Merge Sort', value: 'Merge Sort', desription: 'sfsdfsdfsdfdsf'},
    { key: 2, text: 'Bubble Sort', value: 'Bubble Sort', desription: 'cvcbbncvbncvbn'},
    { key: 3, text: 'Insertion Sort', value: 'Insertion Sort', desription: 'ipoippopjpopmmo'},
    { key: 4, text: 'Count Sort', value: 'Count Sort', desription: 'mnnmmnmnbmnmnj'},
]

const App = () => {
    const [testArrLength, setTestArrLength] = useState( 0, 'TestArrayLength');
    const [testArr, setTestArr] = useState([], 'Test Array');
    const [algoChoice, setAlgoChoice] = useState('', 'Algo Choice')

    const handleInput = e => {
        const {value} = e.target;
        console.log('e', e)
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

    const handleDropDown = (e, {value}, selection) => {
       console.log('selection is ', selection);
        setAlgoChoice(value)
        console.log('Algo Chosen ', algoChoice);
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
                
        {/*    <Segment>   */}
                <Segment.Group horizontal>
                    <Segment attached>
                        <Button onClick = {makeRandArr}> Create random numbers </Button>                
                    </Segment>
                    <Segment attached>
                        <Dropdown 
                            placeholder = 'select algorithm'
                            options = {dropDownTypes}
                            value = {algoChoice}
                            onChange = {handleDropDown}
                            
                            
                            
                        />    
                    </Segment>
                    <Segment vertical attached>
                        <Container> Algorithm Chosen: </Container>
                        <Label>{algoChoice}</Label>
                    </Segment>
                </Segment.Group>
        {/*    </Segment>    */}
        
            <Segment style = {{width: '80%', margin: '0 auto'}}>
                {testArr.length <= 10 
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
