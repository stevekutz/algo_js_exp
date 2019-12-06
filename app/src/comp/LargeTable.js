import React from 'react';
import {Button, Card, Dropdown, Form, Input, Label, Modal, List, Table} from 'semantic-ui-react';

const LargeTable = ({testArr}) => {
    return (
        <List horizontal celled>
        
            
                {testArr.map((item, index) => (

                    <List.Item
                        key = {index}
                        style = {{border: '1px solid purple'}}
                        // collapsing 
                        // width = {1}
                        textAlign = 'center'
                    >  
                    {item}</List.Item>
                    ))}
            
        
        </List>

    )



}

export default LargeTable;