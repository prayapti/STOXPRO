import React from 'react';

function Pricing () {
    return ( 
       <div className='container '> 
       <div className='row'> 
       <div className='col-4'>
        <h1 className='mb-3 fs-2'> Unbeatable pricing </h1>
        <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges. </p>
           <a href='' className='mx-5' style={{textDecoration:"none"}}>See Pricing <i class="fa-solid fa-arrow-right"></i>
                        </a>
       </div>
        <div className='col-2'></div>
         <div className='col-6 '>
            <div className='row text-center'>
                  <div className='col p-3 border'>
                    <h1 className='mb-3'><i class="fa-solid fa-indian-rupee-sign"></i>0</h1>
                    <p> Free equality delivery and <br></br> direct mutual funds</p>
                  </div>
                   <div className='col p-3 border'>
                    <h1 className='mb-3'><i class="fa-solid fa-indian-rupee-sign"></i>20</h1>
                    <p className='mb-5'> Intraday and F&O</p>
                   </div>
            </div>
         </div>
       </div>
       </div>

       
     );
}

export default Pricing ;