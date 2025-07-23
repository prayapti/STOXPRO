import React from 'react';
function Footer() {
    return ( 
        <footer style={{backgroundColor:"rgb(250,250,250)"}}>
        <div className='container border-top mt-5'>
            <div className='row mt-5'>
                <div className='col'>
                  <img src='media/stoxprologo.png' style={{width:"50%"}}/> 
                  <p> &copy; 2010 - 2025, Stoxpro Broking Ltd.

All rights reserved. </p>
                </div>
                   <div className='col '>
                     <p className="fw-bold text-secondary">Accounts</p>
                     <div className="col">
 
  <div className="d-flex flex-column gap-2">
    <a href="#" className="text-muted text-decoration-none">Open Demat Account</a>
    <a href="#" className="text-muted text-decoration-none">Minor Demat Account</a>
    <a href="#" className="text-muted text-decoration-none">NRI Demat Account</a>
    <a href="#" className="text-muted text-decoration-none">Commodity</a>
    <a href="#" className="text-muted text-decoration-none">Dematerialisation</a>
    <a href="#" className="text-muted text-decoration-none">Fund Transfer</a>
    <a href="#" className="text-muted text-decoration-none">MTF</a>
    <a href="#" className="text-muted text-decoration-none">Referral Program</a>
  </div>
</div>

                   
                   </div>
                      
                      <div className='col'>
                       <p className="fw-bold text-secondary">Support </p>
                         <div className="d-flex flex-wrap gap-3 mt-3">
  <a href="#" className="text-muted text-decoration-none">Contact Us</a>
  <a href="#" className="text-muted text-decoration-none">Support Portal</a>
  <a href="#" className="text-muted text-decoration-none">How to File a Complaint?</a>
  <a href="#" className="text-muted text-decoration-none">Status of Your Complaints</a>
  <a href="#" className="text-muted text-decoration-none">Bulletin</a>
  <a href="#" className="text-muted text-decoration-none">Circular</a>
  <a href="#" className="text-muted text-decoration-none">Z-Connect Blog</a>
  <a href="#" className="text-muted text-decoration-none">Downloads</a>
</div>

                      </div>
                         <div className='col'>
                               <p className="fw-bold text-secondary"> Company </p>
                             <div className="d-flex flex-wrap gap-3 mt-3">
  <a href="#" className="text-muted text-decoration-none">About</a>
  <a href="#"className="text-muted text-decoration-none">Philosophy</a>
  <a href="#"className="text-muted text-decoration-none">Press & Media</a>
  <a href="#" className="text-muted text-decoration-none">Careers</a>
  <a href="#" className="text-muted text-decoration-none">stoxpro Cares (CSR)</a>
  <a href="#" className="text-muted text-decoration-none">Stoxpro.tech</a>
  <a href="#" className="text-muted text-decoration-none">Open Source</a>
</div>

                         </div>
                         <div className='col'>
                              <p className="fw-bold text-secondary">Quicklinks </p>
                             <div className="d-flex flex-wrap gap-3 mt-3">
<a href="#"className="text-muted text-decoration-none" >Brokerage Charges</a>
<a href="#" className="text-muted text-decoration-none">Upcoming IPOs</a>
  <a href="#" className="text-muted text-decoration-none">Market Holidays</a>
  <a href="#" className="text-muted text-decoration-none">Economic Calendar</a>
  <a href="#" className="text-muted text-decoration-none">Calculators</a>
  <a href="#" className="text-muted text-decoration-none">Markets</a>
  <a href="#" className="text-muted text-decoration-none">Sectors</a>
</div>

                         </div>
                         <div className='mt-5 fs-9 text-muted'> 
                         <p>
                            Stoxpro Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through stoxpro Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Stoxpro Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Stoxpro Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@Stoxpro.com, for DP related to dp@stoxpro.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                         </p>
                         <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                         <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
                          <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                           <p>Attention investors: 1. Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2. Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3. Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                            <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
            </div>
        </div>
        </div>
        </footer>
     );
}

export default Footer;