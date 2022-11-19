import React, { memo } from 'react'

const HeaderComponent = ({
    items,
    clickHandler
}) => {
    return (
        <header className="header position-sticky top-0 bg-white w-100 d-flex justify-content-between align-items-center px-4 py-3">
            <div>
                <h3 className='mb-0'><i className="fa-solid fa-cart-shopping pe-1"></i> Shopkart</h3>
            </div>
            <div className='cart-icon position-relative'>
                <i className="fa-solid fa-bag-shopping text-danger" onClick={() => clickHandler()}>
                </i>
                {
                    Array.isArray(items) &&
                    items.length !== 0 &&
                    <div className='cart-badge position-absolute d-flex justify-content-center align-items-center fw-bold text-white'>
                        <span>
                            {
                                items.length <= 10 ? items.length : items.length > 10 ? "10+" : ""
                            }
                        </span>
                    </div>
                }
            </div>
        </header>
    )
}

export default memo(HeaderComponent)