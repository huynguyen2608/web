import React from 'react';
import { Col, Row } from 'reactstrap';
import "./index.scss";

function ViewTv(props) {
    return (
        <div className='mb-250 view-tv'>
            <div className='mt-30 img-1' style={{ display: "flex", justifyContent: "center" }}>
                <img
                    className='img-tv-1'
                    src="https://tongdaifpt24.online/wp-content/uploads/2021/04/FPT_Play_Box-1519x470-1.png"
                    alt="Fpt Play Box 1519x470" loading="lazy"
                    sizes="(max-width: 1000px) 100vw, 1000px"
                />
            </div>
            <div className='justify-content-center mt-30 img-2'>
                <img
                    className='img-tv-2'
                    src="https://internetfpttoanquoc.com/wp-content/uploads/2021/11/truyenhinh.png"
                    alt="Truyenhinh"
                    sizes="(max-width: 1000px) 100vw, 1000px"
                />
            </div>
            <div className='justify-content-center text-tv-1'>
                <p className='mt-20'> <strong>Truyền hình: </strong> FPT Play sở hữu Gói kênh MAX và VIP với 200 kênh truyền hình trong nước và quốc tế hấp dẫn, trong đó có 70 kênh chất lượng HD</p>

            </div>
            
        </div>
    );
}

export default ViewTv;