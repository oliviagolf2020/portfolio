import React from 'react';
import Image from '../components/elements/Image';

const DormRoomTips = () => {
    return (
         <div class="easter-egg-avocado">
           Dorm room tips
    
           <div class="inner-avacado">
                Furniture ideas, 
           
            </div>

            <div class="inner-avacado">
                Having a shelf is great for organizing, plus it can fit under your bed or anywhere else to save room. 
           
            </div>
            <Image
                        src={require('../assets/images/Shelf.jpg')}
                        width={480}
                        height={720} />
        </div> 
   );

};
export default DormRoomTips;

    