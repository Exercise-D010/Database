import React from 'react';
import './khoa-dao-tao.scss';
import SlideItems from '../../components/slide/slide';


const Courses = [
    'Tiếng Nhật',
    'Tiếng Hàn',
    'Tiếng Anh',
    'Tiếng Hoa',
    'Web Design',
    'FullStack',
    'Mobile developer',
]


class KhoaDaoTaoPage extends React.Component{
    render(){
        return(
            <React.Fragment>
                 <SlideItems items={Courses} product={true}></SlideItems>
            </React.Fragment>
        )
    }
}
    export default KhoaDaoTaoPage