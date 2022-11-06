import React from "react";
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

function MyNav() {
    return(
        <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
                <Nav.Link href="#home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Button variant="secondary" onClick={() => {
                    localStorage.setItem('theme', localStorage.getItem('theme') === 'dark' ? 'light' : 'dark');
                    window.location.reload()
                }}> 
                    Change Mode
                </Button>
            </Nav.Item>
        </Nav>  
    )
}

export default MyNav