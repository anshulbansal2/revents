import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";


export default function NavBar({setFormOpen}) {
    const [authenticated,  setAuthenticated] = useState(false);
    const history = useHistory();

    function handleSignOut() {
         setAuthenticated(false);
         history.push('/');
    }
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} exact to='/' header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: 15}}/>
                    Re-vents
                </Menu.Item>
                <Menu.Item as={NavLink} exact to='/events' name='Events' />
                {authenticated &&
                <Menu.Item as={NavLink} exact to='/createevent'>
                    <Button onClick = {() => setFormOpen(true)} positive inverted content='Create Events' />
                </Menu.Item>}
                {authenticated ? 
                    <SignedInMenu signedOut={handleSignOut}/> :  
                    <SignedOutMenu setAuthenticated={setAuthenticated}/>
                    }    
            </Container>
        </Menu>
    )
}