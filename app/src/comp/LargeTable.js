import React from 'react';
import {Button, Card, Dropdown, Form, Input, Label, Modal, List, Table} from 'semantic-ui-react';

//const LargeTable = ({testArr}) => {
const LargeTable = ({testArr}) => {
    return (
        <List horizontal celled relaxed >
               
                {testArr.map((item, index) => (

                    <List.Item
                        key = {index}
                        style = {{border: '1px solid purple', margin: '5px'}}
                        textalign = 'center'
                    >  
                    {item}</List.Item>
                    ))}
            
        </List>

    )

}

export default LargeTable;