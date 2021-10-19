import React from 'react';
import Image from '../components/elements/Image';

const HowToManageTime = () => {
    return (
         <div class="easter-egg-avocado">
           How to manage time
    
           <div class="inner-avacado">
                Having a planner works great for  busy schedule 
           
            </div>

            <div class="inner-avacado">
                I found this one at Walmart
           
            </div>
            <div class="">
                <Image
                        src={require('../assets/images/calander.jpg')}
                        src={require('../assets/images/planner.jpg')}
                        width={480}
                        height={720} />
            </div>
        </div> 
    
   );

};
export default HowToManageTime;

    