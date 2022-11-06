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
                <Nav.Link href="#ab">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#exp">Experience</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#edu">Education</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#sk">Skills</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Button variant="secondary" onClick={() => {
                    localStorage.setItem('theme', localStorage.getItem('theme') === 'dark' ? 'light' : 'dark');
                    window.location.reload()
                }}> 
                    Toggle Light/Dark Mode
                </Button>
            </Nav.Item>
        </Nav>  
    )
}

export default MyNav