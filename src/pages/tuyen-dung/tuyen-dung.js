import React from 'react';
import './tuyen-dung.scss';
import { Container, Row, Col, Button } from 'react-bootstrap';


class TuyendungPage extends React.Component{
    render(){
        return(
            <React.Fragment>
              <Container>
                <Row className="justify-content-md-center td">
                  <Col xs={8} className="khung">
                    <p className="ts">TUYỂN SINH TIẾNG HÀN</p>
                    <h4>Trung tâm dạy tiếng Hàn Quốc tại TP.HCM</h4>
                    <img src="https://greenacademy.edu.vn/wp-content/uploads/2019/10/1505890072_Han-Sakura-1400x663.jpg"  alt=""/>
                    <p className="nd">Hàn Quốc là một trong những quốc gia được nhiều bạn trẻ yêu thích, bởi con người, phong cảnh và món ăn nơi đây. 
                    Nếu bạn muốn đến với đất nước xinh đẹp này thì trước tiên bạn phải biết giao tiếp cơ bản với người Hàn Quốc. 
                    Và bạn đang muốn tìm một trung. </p>
                    <Button className="btn btn-primary nut">
                        Continue Reading
                    </Button>
                  </Col>

                  <Col xs={8} className="khung">
                    <p className="ts">TUYỂN SINH PHOTOSHOP</p>
                    <h4>Designer nghành Hot, nâng cao sự sáng tạo</h4>
                    <img src="https://greenacademy.edu.vn/wp-content/uploads/2019/10/Hoc-Design-kho-khong-1400x785.jpg"  alt=""  className="ha"/>
                    <p className="nd">Nhắc đến Designer, có lẽ các bạn sẽ tưởng tượng ra một anh chàng thật ngầu với bộ trang phục thật phong cách, 
                    hoặc một cô nàng với sự sáng tạo toát ra cả vẻ bề ngoài. Nhưng, bạn có thực sự hiểu công việc của một Designer là gì? Ngành nghề siêu hot trong.</p>
                    <Button className="btn btn-primary nut">
                        Continue Reading
                    </Button>
                  </Col>

                  <Col xs={8} className="khung">
                    <p className="ts">TUYỂN SINH LẬP TRÌNH</p>
                    <h4>Trở thành lập trình viên - Bạn đã sẵn sàng chưa</h4>
                    <img src="https://greenacademy.edu.vn/wp-content/uploads/2019/10/1691.jpg"  alt=""  className="ha1"/>
                    <p className="nd">Làm lập trình chắc lương cao lắm? Học công nghệ thông tin chắc khó lắm, toàn là thuật toán và code thôi. 
                    Đối với một bạn mới bắt đầu, chưa tìm hiểu về ngành lập trình công nghệ thông tin, chắc hẳn đây là những câu hỏi mà bạn đang thắc mắc. Thời đại công</p>
                    <Button className="btn btn-primary nut">
                        Continue Reading
                    </Button>
                  </Col>
                </Row>
              </Container>  
            </React.Fragment>
        )
    }
}
    export default TuyendungPage