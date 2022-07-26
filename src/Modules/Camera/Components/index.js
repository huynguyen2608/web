import React from 'react';
import { Col, Row } from 'reactstrap';
import "./index.scss";

function CameraView(props) {
    return (
        <div className='camera-app'>
            <div className='box-1'>
                <h3 className='p-bold'>GIỚI THIỆU VỀ CAMERA FPT</h3>
                <p className='text-review'>Camera FPT là sản phẩm mới và chuyên biệt nhất của FPT Telecom. Sản phẩm này không sử dụng ổ cứng lưu trữ thông thường mà toàn bộ video/hình ảnh sẽ được xử lý mã hóa và chuyển thẳng lên server. Chỉ duy nhất chủ nhân camera mới có thể quan sát và theo dõi video và hình ảnh của camera quan sát được</p>
            </div>
            <p className='justify-content-center mt-30'>
                <table style={{ borderCollapse: "collapse", width: "100%;" }}>
                    <tbody>
                        <tr>
                            <td style={{ width: "50%;" }}>
                                <img
                                    class="alignnone size-full wp-image-124"
                                    src="https://internetfpttoanquoc.com/wp-content/uploads/2021/11/camindoor.jpg"
                                    alt="Camindoor" width="540" height="310"
                                    srcset="https://tongdaifpt24.online/wp-content/uploads/2021/11/camindoor.jpg 1000w, https://tongdaifpt24.online/wp-content/uploads/2021/11/camindoor-300x200.jpg 300w, https://tongdaifpt24.online/wp-content/uploads/2021/11/camindoor-768x512.jpg 768w"
                                    sizes="(max-width: 1000px) 100vw, 1000px"
                                />
                            </td>
                            <td style={{ width: "50%;" }}>
                                <img
                                    loading="lazy"
                                    class=" ml-15"
                                    src="https://internetfpttoanquoc.com/wp-content/uploads/2021/11/camout.jpg"
                                    alt="Camout" width="540" height="310"
                                    srcset="https://tongdaifpt24.online/wp-content/uploads/2021/11/camout.jpg 672w, https://tongdaifpt24.online/wp-content/uploads/2021/11/camout-300x200.jpg 300w"
                                    sizes="(max-width: 672px) 100vw, 672px"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </p>
            <p>
                <Row>
                    <Col xs="6">
                        <p className='pl-25 border-left'>Sản phẩm Camera FPT trong nhà</p>
                        <p className='text-li'>Camera trong nhà FPT Telecom đã sử dụng những công nghệ</p>
                        <p className='text-li'>
                            <li>Cảm biến 1/2.8” Sony IMX307 – Full HD 1080P</li>
                            <li>Ống kính 3.6 mm @F2.0 – góc nhìn 102°</li>
                            <li>Tầm nhìn xa hồng ngoại : 10m</li>
                            <li>Chống ngược sáng WDR</li>
                            <li>Kết nối wifi hoặc LAN</li>
                            <li style={{color:"red"}}>Giá bán: 900.000vnd (áp dụng khi đang sử dụng mạng FPT )</li>
                            <li style={{color:"red"}}>Giá bán : 1.100.000vnd (áp dụng đối với khách hàng không dùng mạng FPT )</li>
                        </p>
                    </Col>
                    <Col xs="6">
                        <p className='pl-25 border-left'>Sản phẩm Camera FPT ngoài trời</p>
                        <p className='text-li'>Camera ngoài trời FPT Telecom đã sử dụng những công nghệ</p>
                        <p className='text-li'>
                            <li>Cảm biến 1/2.8” Sony IMX307 Full HD 1080P</li>
                            <li>Ống kính 3.6 mm @F2.0 – góc nhìn 95°</li>
                            <li>Tầm nhìn xa hồng ngoại : 20m</li>
                            <li>Chống ngược sáng WDR</li>
                            <li>Vỏ hợp kim chống nước</li>
                            <li>Chuẩn kết nối RJ45 – Hỗ trợ PoE</li>
                            <li>Chuẩn kháng nước IP66</li>
                            <li style={{color:"red"}}>Giá bán : 1.100.000vnd (áp dụng khi đang sử dụng mạng FPT )</li>
                            <li style={{color:"red"}}>Giá bán: 1.300.000vnd (áp dụng đối với khách hàng không dùng mạng FPT )</li>
                        </p>
                    </Col>
                </Row>
            </p>
        </div>
    );
}

export default CameraView;