import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";


export default function NavBar({setFormOpen}) {
    const {authenticated} = useSelector(state => state.auth);
    
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} exact to='/' header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: 15}}/>
                    Re-vents
                </Menu.Item>
                <Menu.Item as={NavLink} exact to='/events' name='Events' />
                <Menu.Item as={NavLink} exact to='/sandbox' name='sandbox' />
                {authenticated &&
                <Menu.Item as={NavLink} exact to='/createevent'>
                    <Button positive inverted content='Create Events' />
                </Menu.Item>}
                {authenticated ? 
                    <SignedInMenu/> :  
                    <SignedOutMenu/>
                    }    
            </Container>
        </Menu>
    )
}