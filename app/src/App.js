import React from 'react';
import {Button, Container, Dropdown, Form, Input, Label, Modal, Segment, Table} from 'semantic-ui-react';
import {useState} from 'reinspect';

import TableSmall from './comp/TableSmall';
import LargeTable from './comp/LargeTable';
import AlgoInfo from './comp/AlgoInfo';
import ChartDataSet from './comp/ChartDataSet';
import MyChart from './comp/MyChart';
import BarChart from './comp/BarChart';

// const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const dropDownTypes = [
    { key: 0, text: 'Merge Sort', value: 'Merge Sort', algoinfo: 'Merge Sort info'},
    { key: 1, text: 'Bubble Sort', value: 'Bubble Sort', algoinfo: 'Bubble Sort info'},
    { key: 2, text: 'Insertion Sort', value: 'Insertion Sort', algoinfo: 'Insertion Sort info'},
    { key: 3, text: 'Count Sort', value: 'Count Sort', algoinfo: 'Count Sort info'},
]

const algoInfo = [
    {description: 'Merge Sort info', worstcase: 'o'},
    {description: 'Bubble Sort info', worstcase: 'o'},
    {description: 'Insertion Sort info', worstcase: 'o'},
    {description: 'Count Sort info', worstcase: 'o'},
]

const App = () => {
    const [testArrLength, setTestArrLength] = useState( 0, 'TestArrayLength');
    const [testArr, setTestArr] = useState([], 'Test Array');
    const [algoChoiceIndex, setAlgoChoiceIndex] = useState('', 'Algo Choice')
    const [algoName, setAlgoName] = useState('', 'Algo Name');
    const [labels, setLabels] = useState([], 'Labels')

    const handleInput = e => {
        const {value} = e.target;
        console.log('e', e)
        setTestArrLength(Number(value));    
    }

    const makeRandArr = () => {
        const arr = [];
        let labelArr = []
        
        for(let i = 0; i < testArrLength; i++){
            arr.push(Math.floor((Math.random() * testArrLength) + 1))
            labelArr.push(i.toString())
        }
        console.log(arr);
        setTestArr(arr);
        setLabels(labelArr)
    //    setTestArrLength(0);

    }

    // const handleDropDown = (e, {value}, data) => {
    const handleDropDown = (e, data) => {
        const {value} = data;
        const {algoinfo} = data.options.find(choice => choice.value === value)
        const { key } = data.options.find(o => o.value === value);

        console.log('key is ', key);
        console.log('algoinfo ', algoinfo);

        setAlgoChoiceIndex(key);
        setAlgoName(dropDownTypes[key].text);
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
                
                <Segment.Group horizontal>
                    <Segment attached>
                        <Button onClick = {makeRandArr}> Create random numbers </Button>                
                    </Segment>
                    <Segment attached>
                        <Dropdown 
                            placeholder = 'select algorithm'
                            options = {dropDownTypes}
                            onChange = {handleDropDown}
                            selection
 
                        />    
                    </Segment>
                    <Segment vertical attached>
                        {algoChoiceIndex !== ''
                            ? 
                            <AlgoInfo index = {algoChoiceIndex}/>    
                        //   <Label>{algoInfo[algoChoiceIndex].description}</Label>
                            
                            : null
                        }    
                        
                    </Segment>
                </Segment.Group>
    
        
            <Segment style = {{width: '80%', margin: '0 auto'}}>
                {testArr.length <= 10 
                    ?
                        <TableSmall testArr = {testArr}/>
                    :
                        <BarChart 
                            title = {algoName !== '' ? algoName : 'data'}
                            labels = {labels} 
                            values = {testArr}
                        />
                    //    <LargeTable testArr = {testArr}/>
                    //     <ChartDataSet testArr = {testArr}/> 


                }
            </Segment>    
           
        </Segment>
    );
}

export default App;
