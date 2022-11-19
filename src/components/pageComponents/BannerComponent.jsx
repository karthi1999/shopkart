import React, { memo } from 'react';

const BannerComponent = () => {
    return (
        <div className='banner d-flex align-items-center position-relative'>
            <div className='banner-box1'></div>
            <div className='banner-content d-flex'>
                <div className='d-none d-lg-block banner-img text-center bg-white'>
                    <img
                        src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
                        alt="jewelery"
                    />
                </div>
                <div>
                    <p className='mb-0'>Shop is fun</p>
                    <h1 className='mb-0'>Trending Fashion World</h1>
                    <p className='mb-0 para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quos nemo tenetur reiciendis nulla sunt cupiditate iste.</p>
                    <button type='submit' className='btn btn-primary'>Show more</button>
                </div>
            </div>
        </div>
    )
}

export default memo(BannerComponent)