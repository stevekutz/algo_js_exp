import React, {useEffect} from 'react';
import {Button, Container, Dropdown, Form, Input, Label, Modal, Segment, Table} from 'semantic-ui-react';
import {useState} from 'reinspect';


import TableSmall from './comp/TableSmall';
import LargeTable from './comp/LargeTable';
import AlgoInfo from './comp/AlgoInfo';
import ChartDataSet from './comp/ChartDataSet';
import MyChart from './comp/MyChart';
import BarChart from './comp/BarChart';

// const testArr = [1, 2, 3, 4, 5, 0, 7, 8, 9, 10, 11, 12, 13, 14, 15];
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
    const [userInput, setUserInput] = useState('', 'User Input')
    const [testArrLength, setTestArrLength] = useState( '', 'TestArrayLength');
    const [testArr, setTestArr] = useState([], 'Test Array');
    const [algoChoiceIndex, setAlgoChoiceIndex] = useState('', 'Algo Choice');
    const [algoName, setAlgoName] = useState('', 'Algo Name');
    const [labels, setLabels] = useState([], 'Labels');
    const [arrLength, setArrLength] = useState('', 'Array Length')
    

    const handleInput = e => {
        const {value} = e.target;
        console.log('e', e);
   
        //setTestArrLength(Number(value)); 
        setUserInput(Number(value));
    }

    // useEffect(() => {
    //     console.log("render");
    // }, [testArrLength, ]);

    const makeChartData = () => {

        console.log('FIRED makeChartData');
        let arr = [];
        let labelArr = []
        // let testArrLength2 = 20;

        while (!arr.includes(0) || !arr.includes(testArrLength)){
            arr = [];
            labelArr = [];
            for(let i = 0; i < testArrLength; i++){
                arr.push(Math.floor(Math.random() * (testArrLength + 1) + 0))
                labelArr.push(i.toString())
            }
        }   
        console.log(arr);
        setTestArr(arr);
        setLabels(labelArr)

        // setUserInput('');
        // setTestArrLength(0);
    }


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
                    // value = {userInput}
                    onChange = {handleInput}
                    //onChange = {e => setUserInput(e.target.value)}
                />
            </Form>
                
                <Segment.Group horizontal>
                    <Segment attached>
                        <Button
                            // onClick = {() => makeChartData()}   // makes re-render on Input change
                            onClick = {makeChartData}   // makes re-render on Input change
                            // onClick = {() => setTestArrLength(Number(userInput))}
                            // onClick = {assignArrLength}
                            // onClick = {() => setTestArrLength(userInput)}
                            // onClick = {() => setTestArrLength(userInput)}

                        > Create random numbers     
                        </Button>                
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
                            :   null
                        }    
                        
                    </Segment>
                </Segment.Group>
    
        
            <Segment style = {{width: '80%', margin: '0 auto'}}>
            
            {testArr <= 1   

                    ?
                        <Label> Enter array length of 2 or more </Label>
                    :
                        <BarChart 
                            title = {algoName !== '' ? algoName : 'data'}
                            labels = {labels} 
                            values = {testArr}
                        />
                }
            </Segment>    

        </Segment>
    );
}

export default App;

// const makeChartData = () => {

//     console.log('FIRED makeChartData');
//     let arr = [];
//     let labelArr = []

//     while (!arr.includes(0) || !arr.includes(testArrLength)){
//         arr = [];
//         labelArr = [];
//         for(let i = 0; i < testArrLength; i++){
//             arr.push(Math.floor(Math.random() * (testArrLength + 1) + 0))
//             labelArr.push(i.toString())
//         }
//     }   
//     console.log(arr);
//     setTestArr(arr);
//     setLabels(labelArr)

    // setUserInput('');
    // setTestArrLength(0);




    // useEffect((e) => {
    //     const buildChart = () => {
    //         let arr = [];
    //         let labelArr = []

    //         while (!arr.includes(0) || !arr.includes(testArrLength)){
    //             arr = [];
    //             labelArr = [];
    //             for(let i = 0; i < testArrLength; i++){
    //                 arr.push(Math.floor(Math.random() * (testArrLength + 1) + 0))
    //                 labelArr.push(i.toString())
    //             }
    //         }   
    //         console.log(arr);
    //         setTestArr(arr);
    //         setLabels(labelArr)

    //     }

    //     buildChart()

    // }, [testArrLength])