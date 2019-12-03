import React from 'react';
import {Button, Dropdown, Form, Input, Label, Modal, Segment, Table} from 'semantic-ui-react';

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


function App() {
  return (
    <Segment>
        <Label> Algorithms </Label>
        <Form>
            <Label> Enter length of random array </Label>
            <Input></Input>
            <Segment>
                <Button> Create random numbers </Button>
            </Segment>
        </Form>
     
        <Segment style = {{width: '50%', margin: '0 auto'}}>
        <Table>
            <Table.Body>
                <Table.Row>
                    {testArr.map((item, index) => (

                        <Table.Cell 
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
