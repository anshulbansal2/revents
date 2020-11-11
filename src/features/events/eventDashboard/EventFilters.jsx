import React from 'react';
import { Header, Menu } from 'semantic-ui-react';
import { Calendar } from "react-calendar";

export default function EventFilter() {
    return (
        <>
            <Menu vertical size='large' style={{width: '100%'}}>
                <Header icon='filter' attached color='teal' content='Filters'/>
                <Menu.Item content="I'm going"/>
                <Menu.Item content="I'm hosting"/>
            </Menu>
            <Header icon='Calender' attached color='teal' content='Select date' />
            <Calendar />
        </>
    )
}