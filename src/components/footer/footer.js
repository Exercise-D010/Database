import React from 'react';
import './footer.scss';
import { Container, Row, Col } from 'react-bootstrap';

class FooterElement extends React.Component{
    render(){
        return(
            <React.Fragment>
                 <div className="footerpage">
                 <Container>
                    <Row>
                        <Col className="col-md-4 cot">
                            <h5>Về Green Adecamy</h5>
                            <hr/>
                            <p>Học viện hàng đầu đến từ Hàn Quốc 100% - đất nước đi đầu về Thiết Kế và IT. Chúng tôi mở ra một cánh cửa mới cho các học viên tại Việt Nam bởi lộ trình giảng dạy chuẩn Quốc Tế. Sứ mệnh của chúng tôi chính là “chắp cánh” con đường tương lai cho các thế hệ sau.</p>
                        </Col>
                        <Col className="col-md-4 cot">
                            <h5>Liên Hệ</h5>
                            <hr/>
                            <p>CN1: 67, Nguyễn Thị Minh Khai, Phường Bến Thành, Quận 1, TP.HCM</p>
                            <p>CN2: 38 Huỳnh Lan Khanh, Phường 2, Quận Tân Bình, TP.HCM</p>
                            <p>+(84) 28 3926 0022</p>
                            <p>https://greenacademy.edu.vn</p>
                            <p>contact@greenacademy.edu.vn</p>
                        </Col>
                        <Col className="col-md-4 cot">
                            <h5>Kết Nối</h5>
                            <hr/>
                            <p><a href="#"><i className="fab fa-facebook-f"></i>Facbook</a></p>
                            <p><a href="#"><i className="fab fa-youtube-square"></i>Youtube</a></p>
                            <p><a href="#"><i className="fab fa-instagram"></i>Instagram</a></p>
                        </Col>
                    </Row>
                    <Row>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center ">
                            <div className="tiny-footer">
                                <p>Copyright © All Rights Reserved 2020 </p>
                            </div>
                        </div>
                    </Row>
                </Container>

                </div>  
            </React.Fragment> 
        )
    }
}

export default FooterElement