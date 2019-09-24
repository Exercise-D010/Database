import React from 'react';
import './header.scss';
import Logo from "../../assets/images/02.jpg";
import Logo1 from "../../assets/images/03.jpg";
import Logo2 from "../../assets/images/04.jpg";
import { Carousel } from "react-bootstrap";

class HeaderElement extends React.Component{
    render(){
        return(
            <div className="headerpage">
                <Carousel >
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Logo}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ Logo1 }
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ Logo2 }
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                
            </div>
        )
    }
}

export default HeaderElement