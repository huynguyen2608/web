import React from 'react';
import "./HomeView.scss";

function HomeView(props) {
    return (
        <div>
            <div class="img-inner dark pl-10 pr-10">
                <img
                    src="https://tongdaifpt24.online/wp-content/uploads/2022/06/banner_fpt.vn_.jpg"
                    className="size-original"
                    alt="Banner Fpt.vn"
                    loading="lazy"
                    srcset="https://tongdaifpt24.online/wp-content/uploads/2022/06/banner_fpt.vn_.jpg 1000w, https://tongdaifpt24.online/wp-content/uploads/2022/06/banner_fpt.vn_-300x82.jpg 300w, https://tongdaifpt24.online/wp-content/uploads/2022/06/banner_fpt.vn_-768x210.jpg 768w"
                    sizes="(max-width: 1000px) 100vw, 1000px"
                />
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <div>
                    <h3 className="title-h3">CHƯƠNG TRÌNH SIÊU KHUYẾN MẠI</h3>
                    <span>Siêu khuyến mại tháng 7</span>
                    <p className='text-1'>Thủ tục đơn giản – Lắp đặt siêu tốc – Đăng ký hôm nay – Nhận ngay ưu đãi</p>
                    <strong>
                        <p className='view-text'>
                            <img
                                class="wp-image-654 alignnone tie-appear lazyloaded"
                                src="https://fpttelecom24h.com.vn/wp-content/uploads/2019/09/iconkhuyenmai.gif"
                                alt="khuyến mại lắp mạng fpt" width="75" height="25"
                                data-src="https://fpttelecom24h.com.vn/wp-content/uploads/2019/09/iconkhuyenmai.gif">
                            </img>
                            Gói combo: Internet + Truyền Hình 4K Ultra HD chỉ 185k/Tháng
                            <img class="wp-image-654 alignnone tie-appear lazyloaded" src="https://fpttelecom24h.com.vn/wp-content/uploads/2019/09/iconkhuyenmai.gif" alt="khuyến mại lắp mạng fpt" width="75" height="25" data-src="https://fpttelecom24h.com.vn/wp-content/uploads/2019/09/iconkhuyenmai.gif"></img>
                        </p>
                        <p className='view-text'>
                            <img class="wp-image-654 alignnone tie-appear lazyloaded" src="https://fpttelecom24h.com.vn/wp-content/uploads/2019/09/iconkhuyenmai.gif" alt="khuyến mại lắp mạng fpt" width="75" height="25" data-src="https://fpttelecom24h.com.vn/wp-content/uploads/2019/09/iconkhuyenmai.gif" />
                            Truyền hình FPT Play đăng ký lẻ giá 88.000đ/tháng – Bản quyền độc quyền FPT
                            <img class="wp-image-654 alignnone tie-appear lazyloaded" src="https://fpttelecom24h.com.vn/wp-content/uploads/2019/09/iconkhuyenmai.gif" alt="khuyến mại lắp mạng fpt" width="75" height="25" data-src="https://fpttelecom24h.com.vn/wp-content/uploads/2019/09/iconkhuyenmai.gif" />
                        </p>
                        <p className='view-text'>
                            <img class="wp-image-654 alignnone tie-appear lazyloaded" src="https://fpttelecom24h.com.vn/wp-content/uploads/2019/09/iconkhuyenmai.gif" alt="khuyến mại lắp mạng fpt" width="75" height="25" data-src="https://fpttelecom24h.com.vn/wp-content/uploads/2019/09/iconkhuyenmai.gif" />
                            Siêu phẩm Camera FPT chỉ từ 900.000đ/mắt, Công nghệ lưu trữ Cloud
                            <img class="wp-image-654 alignnone tie-appear lazyloaded" src="https://fpttelecom24h.com.vn/wp-content/uploads/2019/09/iconkhuyenmai.gif" alt="khuyến mại lắp mạng fpt" width="75" height="25" data-src="https://fpttelecom24h.com.vn/wp-content/uploads/2019/09/iconkhuyenmai.gif" />
                        </p>
                    </strong>
                    <p className='view-text'>Trang bị modem WiFi băng tần kép trị giá 2.3000.000đ</p>
                    <p className='view-text'>Tặng bộ giải mã FPT TV 4K FX6 hỗ trợ cả TiVi thường trị giá 2.700.000đ</p>
                    <h4 className="title-h4">
                        <a href="https://internetfpttoanquoc.com/wp-content/uploads/2021/04/trang-chu-7.gif"><img loading="lazy" class="size-full wp-image-16" src="https://internetfpttoanquoc.com/wp-content/uploads/2021/04/trang-chu-7.gif" width="20" height="11" /></a>
                        Hotline: 0983.428.407
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default HomeView;