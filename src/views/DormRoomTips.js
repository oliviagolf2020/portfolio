import React from 'react';
import Image from '../components/elements/Image';

const DormRoomTips = () => {
    return (
         <div class="easter-egg-avocado">
           Dorm room tips
    
           <div class="inner-avacado">
                Olivia
           
            </div>

            <div class="inner-avacado">
                Southwestern
           
            </div>
            <Image
                        src={require('../assets/images/Shelf.jpg')}
                        width={480}
                        height={720} />
        </div> 
   );

};
export default DormRoomTips;

    