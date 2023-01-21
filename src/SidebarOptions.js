import React from 'react';
import './SidebarOptions.css';
import img1 from './img/sub01.jpg';
import { Add } from '@material-ui/icons';

function SidebarOptions() {
    return(
        <div className='SidebarOptions'>
            <div className='sidebarOption'>
                <img src={img1} width="300px" alt="first image"/>
                <p>분류1</p>
                
            </div>
            <div className='sidebarOption'>
                <img src='http://drive.google.com/uc?export=view&id=1WUcEpzqCqRVi8v29f3xQ2xXhsbyGp7bR' width="100px" alt="first image"/>
                <p>분류2</p>
                
            </div>
            <div className='sidebarOption'>
                <img src='http://drive.google.com/uc?export=view&id=1WUcEpzqCqRVi8v29f3xQ2xXhsbyGp7bR' width="100px" alt="first image"/>
                <p>분류3</p>
                
            </div>
            <div className='sidebarOption'>
                <img src='http://drive.google.com/uc?export=view&id=1WUcEpzqCqRVi8v29f3xQ2xXhsbyGp7bR' width="100px" alt="first image"/>
                <p>분류4</p>
                
            </div>
            <div className='sidebarOption'>
                <img src='http://drive.google.com/uc?export=view&id=1WUcEpzqCqRVi8v29f3xQ2xXhsbyGp7bR' width="100px" alt="first image"/>
                <p>분류5</p>
                
            </div>
            <div className='sidebarOption'>
                <Add/>
                <p className='text'>더보기</p>
                
            </div>
      
      
            
        

        </div>
    );

}

export default SidebarOptions;
