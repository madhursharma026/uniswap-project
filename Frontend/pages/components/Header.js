import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import { useEthers } from "@usedapp/core";
import Navbar from 'react-bootstrap/Navbar';
import styles from "../../styles/App.module.css"
import React, { useEffect, useState } from "react";

function Header() {

    const [visible, setVisible] = useState(true);
    const [position, setPosition] = useState("");
    let { activateBrowserWallet, account } = useEthers();

    useEffect(() => {
        const handleScroll = () => {
            setPosition(window.pageYOffset)
            let moving = window.pageYOffset
            setVisible(position > moving || position < 140);
            setPosition(moving)
            console.log(window.scrollTop)
        };
        window.addEventListener("scroll", handleScroll);
        return (() => {
            window.removeEventListener("scroll", handleScroll);
        })
    })

    function ConnectMetaMask() {
        activateBrowserWallet();
    }

    React.useEffect(() => {
        if (account === undefined) {
            localStorage.setItem("walletAddress", "");
        } else {
            localStorage.setItem("walletAddress", account?.toString());
        }
    });


    return (
        <div className={`fixed-top px-4 py-2 ${visible ? styles.animationStyle1 : styles.animationStyle2}`}>
            <div className={`text-center ${styles.headerBeforeLGScrn} mt-1`}>
                <input type="text" class="form-control" placeholder='Search Token and NFTs Collection' style={{ maxWidth: '310px', margin: 'auto', background: 'transparent', border: '1px solid #ffa6d6' }} />
            </div>
            <Navbar expand="lg" className={`${styles.headerBeforeLGScrn}`} style={{ marginTop: '-50px' }}>
                <Link href="/">
                    <Navbar.Brand>
                        <img src="https://seeklogo.com/images/U/uniswap-logo-782F5E6363-seeklogo.com.png" alt="#ImgNotFound" width="30px" height='30px' />
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link href="/" className={styles.headerNavbarLinks}>Swap</Link>
                        <Link href="/" className={styles.headerNavbarLinks}>Tokens</Link>
                        <Link href="/" className={styles.headerNavbarLinks}>NFTs</Link>
                        <Link href="/Portfolio" className={styles.headerNavbarLinks}>Portfolio</Link>
                    </Nav>
                    {account === undefined ? (
                        <button type="button" className={`btn mt-2`} style={{ background: '#F7DDED', color: '#F31D92' }} onClick={ConnectMetaMask}><b>Login</b></button>
                    ) : (
                        <button type="button" className={`btn mt-2`} style={{ background: '#F7DDED', color: '#F31D92' }} onClick={ConnectMetaMask}><b>LOGGED IN</b></button>
                    )}
                </Navbar.Collapse>
            </Navbar>

            <Navbar expand="lg" className={`container-xl ${styles.headerAfterLGScrn}`}>
                <Link href="/">
                    <Navbar.Brand>
                        <img src="https://seeklogo.com/images/U/uniswap-logo-782F5E6363-seeklogo.com.png" alt="#ImgNotFound" width="30px" height='30px' />
                    </Navbar.Brand>
                </Link>
                <div style={{ float: 'right' }}>
                    <i class="fa fa-search" style={{ fontSize: '20px', marginRight: '20px' }}></i>
                    {account === undefined ? (
                        <button type="button" className={`btn`} style={{ background: '#F7DDED', color: '#F31D92', marginRight: '20px' }} onClick={ConnectMetaMask}><b>Login</b></button>
                    ) : (
                        <button type="button" className={`btn`} style={{ background: '#F7DDED', color: '#F31D92', marginRight: '20px' }} onClick={ConnectMetaMask}><b>LOGGED IN</b></button>
                    )}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </div>
                <div className="fixed-bottom p-3" style={{ background: 'white' }}>
                    <div className="row">
                        <div className="col-3">
                            <Link href="/" className={styles.headerNavbarLinks}>Swap</Link>
                        </div>
                        <div className="col-3">
                            <Link href="/" className={styles.headerNavbarLinks}>Tokens</Link>
                        </div>
                        <div className="col-3">
                            <Link href="/" className={styles.headerNavbarLinks}>NFTs</Link>
                        </div>
                        <div className="col-3">
                            <Link href="/" className={styles.headerNavbarLinks}>Portfolio</Link>
                        </div>
                    </div>
                </div>
                <Navbar.Collapse id="basic-navbar-nav" className='mt-3'>
                    <Nav className="me-auto">
                        <Link href="/" className={styles.headerNavbarLinks} style={{ paddingTop: '10px', borderTop: '1px solid black' }}>Swap</Link>
                        <Link href="/" className={styles.headerNavbarLinks} style={{ paddingTop: '10px', borderTop: '1px solid black' }}>Tokens</Link>
                        <Link href="/" className={styles.headerNavbarLinks} style={{ paddingTop: '10px', borderTop: '1px solid black' }}>NFTs</Link>
                        <Link href="/Portfolio" className={styles.headerNavbarLinks} style={{ paddingTop: '10px', paddingBottom: '10px', borderTop: '1px solid black', borderBottom: '1px solid black' }}>Portfolio</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;