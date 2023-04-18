import Link from 'next/link';
import styles from "../../styles/App.module.css"

function Footer() {
    return (
        <div style={{ background: '#f2ecfd' }}>
            <div className="container">
                <div className="row py-5 px-4">
                    <hr />
                    <div className="col-lg-8 pt-4 order-lg-2">
                        <div className="row">
                            <div className="col-xxl-3 col-6 mt-3">
                                <h6>App</h6>
                                <h6 className='text-muted'>Swap</h6>
                                <h6 className='text-muted'>Tokens</h6>
                                <h6 className='text-muted'>NFTs</h6>
                                <h6 className='text-muted'>Pools</h6>
                            </div>
                            <div className="col-xxl-3 col-6 mt-3">
                                <h6>Protocol</h6>
                                <h6 className='text-muted'>Community</h6>
                                <h6 className='text-muted'>Governance</h6>
                                <h6 className='text-muted'>Developers</h6>
                            </div>
                            <div className="col-xxl-3 col-6 mt-3">
                                <h6>Company</h6>
                                <h6 className='text-muted'>Careers</h6>
                                <h6 className='text-muted'>Blog</h6>
                            </div>
                            <div className="col-xxl-3 col-6 mt-3">
                                <h6>Get Help</h6>
                                <h6 className='text-muted'>Contact Us</h6>
                                <h6 className='text-muted'>Help Center</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 pt-4 mt-5 text-center mb-lg-0 mb-5">
                        <i class="fa fa-twitter mx-2" style={{ color: 'gray', fontSize:'24px' }}></i>
                        <i class="fa fa-linkedin mx-2" style={{ color: 'gray', fontSize:'24px' }}></i>
                        <i class="fa fa-facebook mx-2" style={{ color: 'gray', fontSize:'24px' }}></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;