import Link from 'next/link';
import Header from "./components/Header";
import styles from "../styles/App.module.css";
import Accordion from 'react-bootstrap/Accordion';
import Footer from './components/Footer';


export default function Home() {
  return (
    <div>
      <div className="section1 px-4" style={{ background: '#f2ecfd' }}>
        <Header />
        <div className="container-xl pb-5" style={{ paddingTop: '52px' }}>
          <div className="row py-md-5">
            <div className={`col-md-6 mt-5 ${styles.leftSideContent}`}>
              <h1 className={`${styles.sectionTitle}`} style={{ color: '#FF90EE' }}><b>Trade crypto and NFTs with confidence</b></h1>
              <p className={`${styles.sectionBody}`}><b>Buy, sell, and explore tokens and NFTs</b></p>
              <button type="button" className={`btn ${styles.btnStyle} px-5 mb-3`}>Get Started</button>
            </div>
            <div className="col-md-6 mt-5">
              <div className={`card ${styles.rightSideContent}`}>
                <div class="card-body">
                  <h5 class="card-title">Swap <span style={{ color: '#80859E' }}>Buy</span> <span style={{ color: '#80859E', float: 'right' }}><i class="fa fa-gear"></i></span></h5>
                  <input type="number" class="form-control mt-4" placeholder='0' style={{ background: '#F5F6FC', fontSize: '35px' }} />
                  <input type="number" class="form-control mt-2" placeholder='0' style={{ background: '#F5F6FC', fontSize: '35px' }} />
                  <button type="button" className={`${styles.colletWalletBtnStyle} w-100 mt-3`}>Connect Wallet</button>
                </div>
              </div>
            </div>
          </div>

          {/* <Accordion defaultActiveKey={['0', '1']} alwaysOpen className='mt-5'>
            <Accordion.Item eventKey="0">
              <Accordion.Header><span style={{ fontSize: '30px', fontWeight: '600', color: 'black' }}>Swap Token</span></Accordion.Header>
              <Accordion.Body className='p-0 m-0' style={{ background: 'url(https://app.uniswap.org/static/media/swapCard.1a0376fd.png) right center / auto 100% no-repeat border-box white' }}>
                <div className='p-4'>
                  <h3 className='mb-5'>Buy, sell, and explore tokens on Ethereum, Polygon, Optimism, and more.</h3>
                  <Link href="/" style={{ color: '#FF28D4', fontSize: '25px', textDecoration: 'none' }}>Trade Tokens</Link>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header><span style={{ fontSize: '30px', fontWeight: '600', color: 'black' }}>Trade NFTs</span></Accordion.Header>
              <Accordion.Body className='p-0 m-0' style={{ background: 'url(https://app.uniswap.org/static/media/nftCard.ec17cbfb.png) right center / auto 100% no-repeat border-box white' }}>
                <div className='p-4'>
                  <h3 className='mb-5'>Buy and sell NFTs across marketplaces to find more listings at better prices.</h3>
                  <Link href="/" style={{ color: '#FF28D4', fontSize: '25px', textDecoration: 'none' }}>Explore NFTs</Link>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion> */}

          <div className="row mt-5">
            <div className="col-lg-6 mt-3">
              <div class="card p-3 h-100" style={{ background: 'url(https://app.uniswap.org/static/media/swapCard.1a0376fd.png) right center / auto 100% no-repeat border-box white', boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", border: '0', borderRadius:'30px' }}>
                <div class="card-body">
                  <h2 class="card-title">Swap Token</h2>
                  <h5 class="card-subtitle mb-2 mt-5 pt-5 text-secondary">Buy, sell, and explore tokens on Ethereum, Polygon, Optimism, and more.</h5>
                  <Link href="/" style={{ color: '#FF28D4', fontSize: '25px', textDecoration: 'none' }}>Trade Tokens</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-3">
              <div class="card p-3 h-100" style={{ background: 'url(https://app.uniswap.org/static/media/nftCard.ec17cbfb.png) right center / auto 100% no-repeat border-box white', boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", border: '0', borderRadius:'30px' }}>
                <div class="card-body">
                  <h2 class="card-title">Trade NFTs</h2>
                  <h5 class="card-subtitle mb-2 mt-5 pt-5 text-secondary">Buy and sell NFTs across marketplaces to find more listings at better prices.</h5>
                  <Link href="/" style={{ color: '#FF28D4', fontSize: '25px', textDecoration: 'none' }}>Explore NFTs</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-4 mt-lg-0 mt-3">
              <div class="card p-3 h-100" style={{ background: '#F5F6FC', border: 'none', boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius:'30px' }}>
                <div class="card-body">
                  <h2 class="card-title">Buy Crypto <span style={{ float: 'right', color: '#6C757D' }}><i class="fa fa-dollar"></i></span></h2>
                  <h4 class="card-subtitle my-4 text-secondary">Buy crypto with your credit card or bank account at the best rates.</h4>
                  <Link href="/" style={{ color: '#FF28D4', fontSize: '20px', textDecoration: 'none' }}>Buy now</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-lg-0 mt-3">
              <div class="card p-3 h-100" style={{ background: '#F5F6FC', border: 'none', boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius:'30px' }}>
                <div class="card-body">
                  <h2 class="card-title">Earn <span style={{ float: 'right', color: '#6C757D' }}><i class="fa fa-line-chart"></i></span></h2>
                  <h4 class="card-subtitle my-4 text-secondary">Provide liquidity to pools on Uniswap and earn fees on swaps.</h4>
                  <Link href="/" style={{ color: '#FF28D4', fontSize: '20px', textDecoration: 'none' }}>Provide liquidity</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-lg-0 mt-3">
              <div class="card p-3 h-100" style={{ background: '#F5F6FC', border: 'none', boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius:'30px' }}>
                <div class="card-body">
                  <h2 class="card-title">Build dApps <span style={{ float: 'right', color: '#6C757D' }}><i class="fa fa-angle-double-right"></i></span></h2>
                  <h4 class="card-subtitle my-4 text-secondary">Build apps and tools on the largest DeFi protocol on Ethereum.</h4>
                  <Link href="/" style={{ color: '#FF28D4', fontSize: '20px', textDecoration: 'none' }}>Developer Docs</Link>
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: '#FF72ED', borderRadius: '30px' }} className='p-3 mt-5'>
            <div className="row px-lg-5 px-3 py-3 text-white">
              <div className="col-lg-9">
                <h3>Powered by the Uniswap Protocol</h3>
                <h5>The leading decentralized crypto trading protocol, governed by a global community.</h5>
              </div>
              <div className="col-lg-3 mt-lg-2 mt-5">
                <button type="button" className={`btn px-5 py-2`} style={{ border: '1px solid white', color: 'white', borderRadius: '20px' }}><b>Learn More</b></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
