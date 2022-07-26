import React from "react";
import { Col, Row } from "reactstrap";
import "./AppFooter.scss";

class AppFooter extends React.Component {

    render() {
        return (
            <div>
                <Row className="m-0 footer-app pb-30">
                    {/* <Col xs="2"></Col> */}
                    <Col xs="4">
                        <h1>THÔNG TIN LIÊN HỆ</h1>
                        <h6>Người đại diện: Đào Tuấn Anh</h6>
                        {/* <p>Số giấy chứng nhận ĐKKD: 0101778163 do Sở Kế Hoạch Đầu Tư Thành Phố Hà Nội cấp vào ngày 28/07/2005</p> */}
                        <p>Giấy phép Cung cấp Dịch vụ Viễn thông Số 147/GP-CVT do Cục Viễn Thông thuộc Bộ Thông tin và Truyền Thông cấp ngày 02/05/2013</p>
                    </Col>
                    <Col xs="4">
                        <h1>DỊCH VỤ CUNG CẤP</h1>
                        <li>Lắp Mạng Internet FPT</li>
                        <li>Truyền Hình FPT</li>
                        <li>Đầu Thu FPT Play Box</li>
                        <li>Lắp Camera FPT</li>
                    </Col>
                    <Col xs="4">
                        <h1>ĐĂNG KÝ NHANH</h1>
                    </Col>
                    {/* <Col xs="3" className="mb-10">
                        <h1>THEO DÕI CHÚNG TÔI</h1>
                        <div class="social-icons follow-icons">
                            <i class="icon-facebook"></i>
                            <a href="#" target="_blank" data-label="Facebook" rel="noopener noreferrer nofollow" class="icon primary button circle facebook tooltip tooltipstered">
                                <i class="icon-facebook"></i>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer nofollow" data-label="Instagram" class="icon primary button circle instagram tooltip tooltipstered">
                                <i class="icon-instagram"></i>
                            </a>
                            <a href="#" target="_blank" data-label="Twitter" rel="noopener noreferrer nofollow" class="icon primary button circle twitter tooltip tooltipstered">
                                <i class="icon-twitter"></i>
                            </a>
                            <a href="mailto:#" data-label="E-mail" rel="nofollow" class="icon primary button circle email tooltip tooltipstered">
                                <i class="icon-envelop"></i>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer nofollow" data-label="LinkedIn" class="icon primary button circle linkedin tooltip tooltipstered">
                                <i class="icon-linkedin"></i>
                            </a>
                        </div>
                        <div>
                            <iframe
                                style={{ border: "none; overflow: hidden;" }}
                                src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/fptelecom.net/&amp;tabs=timeline&amp;height=500&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId=948110208640186"
                                frameborder="0"
                                scrolling="no">
                            </iframe>
                        </div>
                    </Col> */}
                    {/* <Col xs="1"></Col> */}
                </Row>
                <Row className="m-0 text-botton">
                    <div>Copyright 2022 © FPT Telecom lắp mạng fpt</div>
                </Row>
            </div>
        );
    }
}

export default AppFooter;
