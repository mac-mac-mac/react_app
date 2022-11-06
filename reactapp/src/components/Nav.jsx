import React from "react";
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

function MyNav() {
    return(
        <Nav className="justify-content-center Nav" activeKey="/home">
            <Nav.Item>
                <Nav.Link href="#home"><code>HOME</code></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#ab"><code>ABOUT</code></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#exp"><code>EXPERIENCE</code></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#edu"><code>EDUCATION</code></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#sk"><code>SKILLS</code></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Button variant="dark" onClick={() => {
                    localStorage.setItem('theme', localStorage.getItem('theme') === 'dark' ? 'light' : 'dark');
                    window.location.reload()
                }}> 
                    <code>TOGGLE LIGHT/DARK MODE</code>
                </Button>
            </Nav.Item>
        </Nav>  
    )
}

export default MyNav