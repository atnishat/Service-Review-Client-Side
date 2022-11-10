import React from 'react';
import chef1 from '../../asset/chef/chef1.jpg'
import chef2 from '../../asset/chef/chef2.jpg'
import chef3 from '../../asset/chef/chef3.jpg'
import chef4 from '../../asset/chef//chef4.jpg'
import './Chef.css'

const Chef = () => {
    return (
        <div>
            <div className='chef-title'> <p className="text-6xl font-bold text-orange-600">Our Team Member</p></div>
          
              <div className='chef'>
                <div className='chef1'><img src={chef1} alt="" /></div>
                <div className='chef1'><img src={chef2} alt="" /></div>
                <div className='chef1'><img src={chef3} alt="" /></div>
                <div className='chef1'><img src={chef4} alt="" /></div>
            
                
            </div>
          </div>
        
    );
};

export default Chef;