import React from 'react';
import './home.scss';
import FooterElement from '../../components/footer/footer';

class HomePage extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="home-page">
                    <div className="what-we-do-contact">
                        <div className="what-we-do">
                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </div>
                        <div className="contact">
                            contact
                        </div>
                    </div>

                    <div className="card-item">
                        <div className="item">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </div>
                        <div className="item">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </div>
                        <div className="item">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </div>

                    </div>
                
                </div> 
            <FooterElement></FooterElement> 
            </React.Fragment>
            
        )
    }
}

export default HomePage