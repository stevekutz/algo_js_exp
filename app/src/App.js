import React from 'react';
import {Button, Container, Dropdown, Form, Input, Label, Modal, Segment, Table} from 'semantic-ui-react';
import {useState} from 'reinspect';

import TableSmall from './comp/TableSmall';
import LargeTable from './comp/LargeTable';

// const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const dropDownTypes = [
    { key: 0, text: 'Merge Sort', value: 'Merge Sort'},
    { key: 1, text: 'Bubble Sort', value: 'Bubble Sort'},
    { key: 2, text: 'Insertion Sort', value: 'Insertion Sort'},
    { key: 3, text: 'Count Sort', value: 'Count Sort'},
]

const algoInfo = [
    {description: 'Merge Sort info'},
    {description: 'Bubble Sort info'},
    {description: 'Insertion Sort info'},
    {description: 'Count Sort info'},
]

const App = () => {
    const [testArrLength, setTestArrLength] = useState( 0, 'TestArrayLength');
    const [testArr, setTestArr] = useState([], 'Test Array');
    const [algoChoiceIndex, setAlgoChoiceIndex] = useState('', 'Algo Choice')

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

    // const handleDropDown = (e, {value}, data) => {
    const handleDropDown = (e, data) => {
        const {value} = data;
        const {description} = data.options.find(choice => choice.value === value)
        const { key } = data.options.find(o => o.value === value);
        console.log('key is ', key);
        console.log('description ', description);
       // console.log('selection is ', selection);
        // setAlgoChoice(value)
        setAlgoChoiceIndex(key);

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
                            // value = {algoChoiceIndex}
                            onChange = {handleDropDown}
                            selection
                            // description = {dropDownTypes.description}
                            
                        />    
                    </Segment>
                    <Segment vertical attached>
                        <Container> Description: </Container>
                        {algoChoiceIndex !== ''
                            ? 
                            <Label>{algoInfo[algoChoiceIndex].description}</Label>
                            : null
                        }    
                        
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
