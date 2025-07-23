import React from 'react';

function Team() {
    return (  
        <div className="container">
      <div className="row p-5  mt-5 border-top">
        <h1 className=" text-center ">
         People
        </h1>
      </div>

      <div className="row p-5  border-top text-muted " style={{lineHeight:"1.8", fontSize:"1.2em"}}>
      
       <div className="col-6 p-5 text-center">
<img 
  src="media/img.jpg" 
  alt="Profile"
  style={{
    width: '350px',
    height: '500px',              // Show only 500px height
    objectFit: 'cover',
    objectPosition: 'bottom center', //  Focus on bottom, crop from top
    borderRadius: '10px'
  }} 
/>
<h4 className='mt-5'> Prayapti</h4>
<h6>  Founder, CEO </h6>

</div>
         <div className="col-6 p-5">
           <p>Prayapti is a passionate technologist and developer with a strong foundation in web development and a curiosity that fuels her constant learning in the world of tech. She's driven by the thrill of building impactful projects and solving real-world problems through clean, scalable code.</p>
             <p>When she’s not immersed in code, Prayapti loves exploring user experience design, diving into open-source communities, and understanding how tech shapes society. She’s also deeply interested in AI tools, product thinking, and creating things that are not just functional — but delightful.</p>
               <p>Her goal? To become a developer who not only writes code but designs meaningful digital experiences that make lives easier.</p>
                 <p>Connect with her on the on <a href=''>HomePage</a>/
                  <a href=''> Gmail
                    </a>/
                     <a href=''> LinkedIn
                    </a> </p>
         </div>
      </div>
    </div>
    );
}

export default Team;