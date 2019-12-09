import React from 'react';
import {Button, Dropdown, Form, Input, Label, Modal, Segment, Table} from 'semantic-ui-react';

const TableSmall = ({testArr}) => {
    return (
        <Table>
        <Table.Body>
            <Table.Row>
                {testArr.map((item, index) => (

                    <Table.Cell 
                        key = {index}
                        style = {{border: '1px solid pink'}}
                        textAlign = 'center'
                    >  
                    {item}</Table.Cell>
                    ))}
            </Table.Row>
        </Table.Body>
    </Table>

    )



}

export default TableSmall;