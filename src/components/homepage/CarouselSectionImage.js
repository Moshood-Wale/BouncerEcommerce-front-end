import React from 'react';
import { SliderWrapper  } from './CarouselStyledImage';


function CarouselSection() {
    return (
        <SliderWrapper>
            <div className="container-hero">
                <div className="hero-category">
                    <div>
                        <img src="img/iphone_ad.png" alt="Iphone_pic" />
                    </div>
                    <div>
                        <img src="img/oculus_rift_ad_nrpsc2.png" alt="object_pic" />
                    </div>
                    <div>
                        <img src="img/go_pro_ad_fumlul.png" alt="object-image_pic" />
                    </div>
                </div>
            </div>
        </SliderWrapper>
    )
}

export default CarouselSection