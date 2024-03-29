import React from 'react';
import './chi-nhanh.scss';
import { Slide } from 'react-slideshow-image';

const slideImages = [
    'https://picsum.photos/id/1018/1920/500' ,
    'https://picsum.photos/id/1020/1920/500' ,
    'https://picsum.photos/id/898/1400/500',
    'https://picsum.photos/id/1006/1920/500',
    'https://picsum.photos/id/1015/1920/500',
  ];
   
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  }

class ChiNhanh extends React.Component{
    render(){
        return(
            <React.Fragment>
                 <div className="slide-container">
                    <Slide {...properties}>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                      
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                       
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                      
                        </div>
                    </div>
                    </Slide>
                </div>
            </React.Fragment>
        )
    }
}

export default ChiNhanh