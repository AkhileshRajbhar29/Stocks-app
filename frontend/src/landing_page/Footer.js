import React from 'react'
import "./Footer.css";

const Footer = () => {
    return (
        <footer style={{background:"rgb(250, 250, 250)"}}>
        <div className='container-fluid border-top mt-5 footer-container'>
            <div className='row mt-5'>
                <div className='col'>
                    <img src="media/images/TradeX_logo.svg" style={{ width: "50%"}}  alt="Logo" />
                    <p>
                        &copy; 2026, TradeX. All rights reserved.
                    </p>
                </div>
                <div className='col' >
                    <p className='fw-bold'>Company</p>
                    <a style={{textDecoration:"none", color:"black"}} className='mb-3'>Products</a><br />
                    <a style={{textDecoration:"none", color:"black"}} className='mb-3'>About</a><br />
                    <a style={{textDecoration:"none", color:"black"}}  className='mb-3'>Pricing</a><br />
                    <a style={{textDecoration:"none", color:"black"}}  className='mb-3'>Referral program</a><br />
                    <a style={{textDecoration:"none", color:"black"}} className='mb-3'>Careers</a><br />
                    {/* <a  href="#"  style={{textDecoration:"none", color:"black"}} className='mb-3'>Zerodha.tech</a><br />
                    <a  href="#"  style={{textDecoration:"none", color:"black"}} className='mb-3'>Press & media</a><br />
                    <a  href="#"  style={{textDecoration:"none", color:"black"}} className='mb-3'>Zerodha cares (CSR)</a> */}
                </div>
                <div className='col'>
                    <p className='fw-bold'>Support</p>
                    <a style={{textDecoration:"none", color:"black"}} >Contact</a><br />
                    <a style={{textDecoration:"none", color:"black"}} >Support Center</a><br />
                    <a style={{textDecoration:"none", color:"black"}} >Help & FAQs</a><br />
                    <a style={{textDecoration:"none", color:"black"}} >Trading Resources</a><br />
                    <a style={{textDecoration:"none", color:"black"}} >Downloads</a><br />
                </div>
                <div className='col'>
                    <p className='fw-bold'>Account</p>
                    <a style={{textDecoration:"none" , color:"black"}} >Open an account</a><br />
                    <a style={{textDecoration:"none" , color:"black"}}>Login</a><br />
                    <a style={{textDecoration:"none" , color:"black"}}>Fund Your Account</a><br />
                </div>

            </div>
            <div className=' mt-5 text-muted' style={{fontSize:"14px"}}>
                <p>
                    TradeX is a stock market learning and trading platform project designed to provide users with a simple and modern interface for exploring financial markets.
                </p>
                <p>
                    The information and features available on this platform are provided for educational and demonstration purposes and should not be considered investment advice or a recommendation to buy or sell any security.
                </p>
                <p>
                    Investments in securities markets are subject to market risks. Users should carefully understand the risks and relevant documents before making any investment decisions.
                </p>
                <p>
                    Never share your passwords, OTPs, PINs, or other confidential account information with anyone. Always verify the source before providing personal or financial information.
                </p>
                <p>
                    TradeX does not guarantee profits or returns from trading or investing. Users should conduct their own research and make decisions according to their individual circumstances and risk tolerance.
                </p>
                <p>
                    <b>Disclaimer:</b> TradeX is a project/demo platform and is not represented as a SEBI-registered stock broker, investment adviser, or depository participant unless and until the appropriate registrations and regulatory requirements are actually obtained.
                </p>
                 
            </div>
        </div>
        </footer>
    );
}

export default Footer;