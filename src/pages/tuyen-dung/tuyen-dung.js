import React from 'react';
import './tuyen-dung.scss';
import { Container, Row, Col } from 'react-bootstrap';


class TuyendungPage extends React.Component{
    render(){
        return(
            <React.Fragment>
              <Container>
                <Row className="justify-content-md-center td">
                  <Col xs={8}>
                    <p>Green Adecamy thường xuyên tìm những người bạn đồng hành năng động, nhiệt huyết và hơn hết là yêu 
                      thích thời trang gia nhập vào đại gia đình. Chúng tôi không ngại tạo cho những bạn trẻ những cơ hội 
                      trải nghiệm và thử thách trong một môi trường thời trang phát triển không ngừng.
                    </p>
                  </Col>
                </Row>

                <Row className="justify-content-md-center">
                  <Col xs={8}>
                    <p className="nd">Các Vị Trí Tuyển Dụng:</p>
                  </Col>
                </Row>
            
                <Row className="justify-content-md-center">
                  <Col xs={8}>
                    <p>- Nhân viên Sales Marketing</p>
                    <p>- Nhân viên quản lý Website</p>
                    <p>- Nhân viên thiết kế UIUX</p>
                    <p>- Nhân viên lập trình về ReactJS</p>
                  </Col>
                </Row>

                <Row className="justify-content-md-center">
                  <Col xs={8}>
                    <p className="nd">Nếu bạn muốn:</p>
                  </Col>
                </Row>

                <Row className="justify-content-md-center">
                  <Col xs={8}>
                    <p>- Được trải nghiệm môi trường trẻ trung, chuyên nghiệp, định hướng phát triển rõ ràng.</p>
                    <p>- Thoả sức thể hiện bản thân trong một môi luôn chuyển động, nhiều cơ hội học hỏi.</p>
                    <p>- Có cơ hội phát triển trong nghề nghiệp.</p>
                    <p>- Được hưởng đãi ngộ lương thưởng tốt.</p>
                  </Col>
                </Row>

                <Row className="justify-content-md-center">
                  <Col xs={8}>
                    <p className="nd">Yêu cầu cơ bản:</p>
                  </Col>
                </Row>

                <Row className="justify-content-md-center">
                  <Col xs={8}>
                    <p>- Nam/Nữ trong độ tuổi từ 18-35 tuổi.</p>
                    <p>- Kinh nghiệm trong lĩnh vực chuyên môn.</p>
                    <p>- Có hiểu biết cơ bản về vị trí tuyển</p> 
                  </Col>
                </Row>

                <Row className="justify-content-md-center">
                  <Col xs={8}>
                    <p className="nd">Bạn chỉ cần:</p>
                  </Col>
                </Row>

                <Row className="justify-content-md-center">
                  <Col xs={8}>
                    <p>- Ghi rõ vị trí ứng tuyển ở phần subject của mail (Ví dụ: [Sales person] Tên của bạn) và gửi về greenadecamy@.com.vn</p>
                    <p>Chúng tôi sẽ liên hệ với các ứng viên đạt yêu cầu, hi vọng được gặp gỡ và hợp tác với các bạn.</p> 
                  </Col>
                </Row>

              </Container>  
            </React.Fragment>
        )
    }
}
    export default TuyendungPage