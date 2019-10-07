import React from 'react';
import './home.scss';
import HeaderElement from '../../components/header/header';
import SlideItems from '../../components/slide/slide';


const slideImages = [
    'https://picsum.photos/id/1018/1920/500' ,
    'https://picsum.photos/id/1020/1920/500' ,
    'https://picsum.photos/id/898/1400/500',
    'https://picsum.photos/id/1006/1920/500',
    'https://picsum.photos/id/1015/1920/500',
  ];

class HomePage extends React.Component{
    render(){
        return(
            <React.Fragment>
               <SlideItems item={slideImages}></SlideItems>
            </React.Fragment>    
        )
    }
}

export default HomePage