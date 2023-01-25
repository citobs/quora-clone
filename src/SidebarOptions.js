import React from 'react';
import './SidebarOptions.css';
import img1 from './img/sub01.jpg';
import { Add } from '@material-ui/icons';

function SidebarOptions() {
    return(
        <div className='SidebarOptions'>
            {/* <div className='sidebarOption'>
                <img src={img1} width="300px" alt="first"/>
                <p>분류1</p>
                
            </div> */}
            <div className='sidebarOption2'>
                <p>sideBar</p>
                </div>
                
            <div className='sidebarOption'>
                <img src='http://drive.google.com/uc?export=view&id=15MsI8f6uQ-cJ5YXEtgPOMO_f-dVkQgGm' width="100px" height="100px" alt="second"/>
                <p>계묘년</p>
                
            </div>
            <div className='sidebarOption'>
                <img src='http://drive.google.com/uc?export=view&id=1-3_HoEVlZUddiNhIiWjfZHbtLrYCLtwl' width="100px" alt="third"/>
                <p>새해</p>
                
            </div>
            <div className='sidebarOption'>
                <img src='http://drive.google.com/uc?export=view&id=1WUcEpzqCqRVi8v29f3xQ2xXhsbyGp7bR' width="100px" alt="fourth"/>
                <p>복(福)</p>
                
            </div>
            <div className='sidebarOption'>
                <img src='http://drive.google.com/uc?export=view&id=1-3xZJWMDKGnc10f8kTV6IkzspXTfe87u' width="100px" alt="fifth"/>
                <p>많이 받으세요!</p>
                
            </div>
            <div className='sidebarOption'>
                <Add/>
                <p className='text'>더보기</p>
                
            </div>
      
      
            
        

        </div>
    );

}

export default SidebarOptions;
