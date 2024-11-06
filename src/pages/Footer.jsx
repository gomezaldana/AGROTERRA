import React from "react";
import "../App.css";

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#007A33', padding: '20px 0', color: '#FFF' }}>
            <Container>
                <Row className="justify-content-center text-center">
                    <Col md="12">
                        <h5 className="mb-3" style={{ fontWeight: 'bold' }}>AGROTERRA</h5>
                    </Col>
                    <Col md="12" className="mb-3">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#FFF', margin: '0 10px' }}>
                            <FaFacebook />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#FFF', margin: '0 10px' }}>
                            <FaInstagram />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#FFF', margin: '0 10px' }}>
                            <FaTwitter />
                        </a>
                    </Col>
                    <Col md="12">
                        <a href="#top" style={{ color: '#FFF', fontSize: '20px', textDecoration: 'none', padding: '10px', border: '2px solid #FFF', borderRadius: '50%' }}>
                            ↑
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;