import { Alert } from '@mui/material';
import Header from "./components/Header";
import Modal from 'react-bootstrap/Modal';
import { useEthers } from "@usedapp/core";
import Button from 'react-bootstrap/Button';
import Snackbar from '@mui/material/Snackbar';
import styles from "../styles/App.module.css";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";

function Portfolio() {

    let allCoinList = []
    let mySelectedCoin = []
    const [show, setShow] = React.useState(false);
    const [coinQty, setCoinQty] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [dataValue, setDataValue] = React.useState([]);
    const [inputValue, setInputValue] = React.useState('');
    const [openAlert, setOpenAlert] = React.useState(false);
    const [AlertMessage, setAlertMessage] = React.useState("");
    const [AlertMessageBg, setAlertMessageBg] = React.useState("");
    const [allDataSuggestions, setAllDataSuggestion] = React.useState([]);

    const [myMetamaskID, setMyMetamaskID] = React.useState("");
    let { activateBrowserWallet, account } = useEthers();
    const handleShow = () => setShow(true);
    const handleClose = () => (setShow(false), setInputValue(""), setValue(""));
    const handleClickAlert = () => { setOpenAlert(true); };
    const handleCloseAlert = (reason) => { if (reason === 'clickaway') { return; } setOpenAlert(false); };

    {
        React.useEffect(() => {
            fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`)
                .then(response => response.json())
                .then(response => {
                    setLoading(true)
                    setMyMetamaskID(localStorage.getItem("walletAddress"))
                    setAllDataSuggestion(response);
                })
                .catch(err => {
                    setAlertMessageBg('danger')
                    setAlertMessage(err)
                })
        }, []);
    }



    function loadData() {
        let walletAddress = localStorage.getItem("walletAddress");
        fetch(`http://127.0.0.1:5000/add-coin/${walletAddress}`)
            .then(response => response.json())
            .then(response => {
                setDataValue(response);
            })
            .catch(err => {
                setAlertMessageBg('danger')
                setAlertMessage(err)
            })
    }

    React.useEffect(() => {
        setTimeout(
            function () {
                loadData()
            }, 300);
    }, []);

    {
        allDataSuggestions.map((allDataSuggestions, i) =>
            <span style={{ display: "none" }}>{allCoinList.push(allDataSuggestions.name)}</span>
        )
    }

    let totalPriceList = []

    if (account !== undefined) {
        {
            dataValue.map((dataValue, i) =>
                <span style={{ display: "none" }}>{totalPriceList.push(dataValue.totalPrice)}</span>
            )
        }
    }

    async function addCoinForm(e) {
        e.preventDefault()
        let coinName = inputValue
        let result = await fetch(`https://api.coingecko.com/api/v3/search?query=${coinName.toLowerCase()}`, {
            method: "GET"
        })
        let output = await result.json()
        let coinId = output.coins[0].id
        console.log(coinId)
        let result2 = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId.replace(/\s+/g, '-').toLowerCase()}`, {
            method: "GET"
        })
        let output2 = await result2.json()
        let coinPrice = output2.market_data.current_price.usd
        let walletAddress = localStorage.getItem("walletAddress");
        let data = { coinId, coinName, coinPrice, coinQty, walletAddress }
        let result3 = await fetch(`http://127.0.0.1:5000/add-coin/`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        let output3 = await result3.json()
        if (output3.coinName === coinName) {
            setAlertMessageBg('success')
            setAlertMessage("Crypto Coin Added")
            handleClickAlert()
            setLoading(false)
            coinName = ""
            coinPrice = ""
            setCoinQty("")
            setInputValue("")
            setValue("")
            handleClose()
            fetch(`http://127.0.0.1:5000/add-coin/${walletAddress}`)
                .then(response => response.json())
                .then(response => {
                    setLoading(true)
                    setDataValue(response);
                })
                .catch(err => {
                    setAlertMessageBg('danger')
                    setAlertMessage(err)
                })
        } else {
            setAlertMessageBg('danger')
            setAlertMessage(output.message)
            handleClickAlert()
            coinName = ""
            coinPrice = ""
            setCoinQty("")
            setInputValue("")
            setValue("")
            handleClose()
        }
    }


    async function addCoinByPlus(coinId, coinName, coinPrice) {
        let coinQty = 1
        let walletAddress = localStorage.getItem("walletAddress");
        let data = { coinId, coinName, coinPrice, coinQty, walletAddress }
        let result = await fetch(`http://127.0.0.1:5000/add-coin/`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        let output = await result.json()
        if (output.coinName === coinName) {
            setAlertMessageBg('success')
            setAlertMessage("Crypto Coin Added")
            handleClickAlert()
            setLoading(false)
            alert(myMetamaskID)
            fetch(`http://127.0.0.1:5000/add-coin/${walletAddress}`)
                .then(response => response.json())
                .then(response => {
                    setLoading(true)
                    setDataValue(response);
                })
                .catch(err => {
                    setAlertMessageBg('danger')
                    setAlertMessage(err)
                })
        } else {
            setAlertMessageBg('danger')
            setAlertMessage(output.message)
            handleClickAlert()
        }
    }

    const [value, setValue] = React.useState(allCoinList[0]);


    function updatingPrice() {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`)
            .then(response => response.json())
            .then(response => {
                setLoading(true)
                setAllDataSuggestion(response);
            })
            .catch(err => {
                setAlertMessageBg('danger')
                setAlertMessage(err)
            });
    }


    React.useEffect(() => {
        const updatingData = setInterval(() => {
            updatingPrice()
        }, 10000);
        return () => clearInterval(updatingData);
    }, []);


    if (account !== undefined) {
            allDataSuggestions.map(cartItem => {
                return dataValue.map(item => {
                    if (cartItem.name === item.coinName) {
                        mySelectedCoin.push({ 'image': cartItem.image, 'name': cartItem.name, 'current_price': cartItem.current_price, 'holdings': item.coinQty, 'high24H': cartItem.high_24h, 'low24H': cartItem.low_24h })
                    }
                });
            })
        }

        return (
            <div>
                <Snackbar openAlert={openAlert} autoHideDuration={5000} onClose={handleCloseAlert}>
                    <Alert onClose={handleCloseAlert} className={`text-white bg-${AlertMessageBg}`}>
                        {AlertMessage}
                    </Alert>
                </Snackbar>
                <div className="px-4" style={{ background: '#f2ecfd', marginTop: '65px', minHeight: '100vh' }}>
                    <Header />
                    <h6>Current Balance <i className="fa fa-eye mx-2" style={{ width: "20px", height: "20px" }}></i></h6>
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>${(totalPriceList.reduce((partialSum, a) => partialSum + a, 0))} <span class="text-white p-1" style={{ background: "#13C180", fontSize: "18px", borderRadius: "10px" }}><i className="fa fa-caret-up text-white" style={{ marginTop: "-5px", fontSize: '16px' }}></i>0.63%</span></h2>
                        </div>
                        <div className="col-lg-6">
                            <div className={`${styles.menuBtn}`}>
                                <button class="btn btn-dark mx-1" type="button"><i className="fa fa-ellipsis-h text-white mx-2" style={{ width: "20px", height: "20px" }}></i> More</button>
                                {/* <button class="btn btn-primary mx-1" type="button" onClick={handleShow}><FaPlusCircle className="text-white mx-2" style={{ width: "20px", height: "20px" }} /> Add New</button> */}
                                {account !== undefined ?
                                    <button class="btn btn-primary mx-1" type="button" onClick={handleShow}><i class="fa fa-plus-circle text-white mx-2" style={{ width: "20px", height: "20px" }}></i> Add New</button>
                                    :
                                    <></>
                                }
                            </div>
                        </div>
                    </div>
                    <img className='mt-3 img-fluid' src="https://cryptopotato.com/wp-content/uploads/2022/11/DOGEUSDT_2022-11-01_12-47-07.png" alt="#ImgNotFound" width='100%' style={{ maxHeight: '600px' }} />
                    <h3 className='mt-3'>Your Assests</h3>
                    {account !== undefined ?
                        <>
                            {loading ?
                                <>
                                    <table class="table" style={{ overflowY: "scroll" }}>
                                        <thead>
                                            <tr>
                                                <th scope="col" className={`${styles.tableColName}`}>Name</th>
                                                <th scope="col" className={`${styles.tableColPrice}`}>Price ($)</th>
                                                <th scope="col" className={`${styles.tableColHoldings}`}>Holdings</th>
                                                <th scope="col" className={`${styles.tableColHigh24H}`}>High 24h ($)</th>
                                                <th scope="col" className={`${styles.tableColLow24H}`}>Low 24h ($)</th>
                                                <th scope="col" className={`${styles.tableColAction}`}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                (mySelectedCoin).map((mySelectedCoin, i) =>
                                                    <tr>
                                                        <td className={`${styles.tableColName}`}><img src={`${mySelectedCoin.image}`} alt="#ImgNotFound" width='30px' height="30px" />&ensp; {mySelectedCoin.name}</td>
                                                        <td className={`${styles.tableColPrice}`}>{mySelectedCoin.current_price.toFixed(2)}</td>
                                                        <td className={`${styles.tableColHoldings}`}>{mySelectedCoin.holdings}</td>
                                                        <td className={`${styles.tableColHigh24H} text-success`}><i className="fa fa-caret-up" style={{ marginTop: "-5px", fontSize: '16px' }} /> {mySelectedCoin.high24H.toFixed(2)}</td>
                                                        <td className={`${styles.tableColLow24H} text-danger`}><i className="fa fa-caret-down" style={{ marginTop: "-5px", fontSize: '16px' }} /> {mySelectedCoin.low24H.toFixed(2)}</td>
                                                        <td className={`${styles.tableColAction}`}><i class="fa fa-plus-circle mx-2" style={{ width: "20px", height: "20px", cursor: "pointer" }} onClick={() => addCoinByPlus(`${mySelectedCoin.id}`, `${mySelectedCoin.name}`, `${mySelectedCoin.current_price.toFixed(2)}`)} /> </td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </>
                                :
                                <>
                                    <div className="px-5 pt-5 text-center">
                                        <div class="spinner-border" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                </>
                            }
                        </>
                        :
                        <>
                            <h1 className="text-center">Please Login</h1>
                        </>
                    }
                </div>

                <Modal show={show} onHide={handleClose} centered backdrop="static">
                    <form onSubmit={(e) => addCoinForm(e)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Coin</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Autocomplete value={value} onChange={(event, newValue) => { setValue(newValue); }} inputValue={inputValue} onInputChange={(event, newInputValue) => { setInputValue(newInputValue); }}
                                id="controllable-states-demo" options={allCoinList} renderInput={(params) => <TextField {...params} label="Select Coin" required />} />
                            <TextField id="outlined-basic" label="Coin Qty" variant="outlined" className='mt-3 w-100' type='number' inputProps={{ min: 1 }} onChange={(e) => setCoinQty(e.target.value)} required />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" type='submit'>
                                Add
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>
        );
    }

    export default Portfolio;