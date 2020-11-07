import React from 'react';
import { Link } from 'react-router-dom';
import {Dropdown,  Image,  Menu } from "semantic-ui-react";


export default function SignedInMenu({signedOut}) {
    return (
        <Menu.Item position='right'>
            <Image avatar spaced='right' src='/assets/user.png' />
            <Dropdown pointing='top left' text='Bob'>
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to='/createEvent' text='Create Event' icon='plus' />
                    <Dropdown.Item text='My Profile' icon='user' />
                    <Dropdown.Item onClick={signedOut} text='Sign out' icon='power' />
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    );
}