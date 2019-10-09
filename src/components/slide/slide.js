import React from 'react';
import './slide.scss';
import { Slide } from 'react-slideshow-image';
import SlideImage from './image/image';
import SlideProduct from './product/product';


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

class SlideItems extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
                  <div className="slide-container">
                    <Slide {...properties}>
                    {
                        this.props.item.map(
                            (v,i)=>(
                                this.props.product ? <SlideProduct title={v}></SlideProduct> : <SlideImage key={i} imgPath={v} />
                            )
                        )
                    }
                    </Slide>
                </div>  
            </React.Fragment>
        )
    }
}

export default SlideItems