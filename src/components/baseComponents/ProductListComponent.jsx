import React, { memo } from 'react';
import datas from '../utilities/sampledata.json';

const ProductListComponent = (
    {
        category,
        addCartHandler,
    }
) => {
    const flipFrontCard = (cardIndex) => {
		document.getElementById(cardIndex).classList.add("flipcard")
	}
	const flipBackCard = (cardIndex) => {
		document.getElementById(cardIndex).classList.remove("flipcard")
	}
    return (
        <>
            <h4 className='w-75 mx-auto text-center'>{category.toUpperCase()}</h4>
            <hr className='w-25 mx-auto' />
            <div className='products d-grid m-4 mt-5 px-xxl-4'>
                {
                    Array.isArray(datas) &&
                    datas.length !== 0 &&
                    datas.filter(data => data.category === category).map((data, index) => {
                        const {
                            id,
                            image,
                            price,
                            title,
                            description,
                            rating: {
                                rate,
                                count
                            }
                        } = data
                        return (
                            <div className="flip-card" key={index} onMouseLeave={() => flipBackCard(`card-${category}-${index}`)}>
                                <div id={`card-${category}-${index}`} className="flip-card-inner position-relative text-center">
                                    <div className='flip-card-front d-flex flex-column justify-content-between mx-auto p-3 w-100 position-absolute text-dark' id={id}>
                                        <div className='image-container w-100 d-flex justify-content-center align-items-center position-relative'>
                                            <i
                                                className="info-icon fa-solid fa-circle-info p-2 fs-4 position-absolute top-0 end-0"
                                                title="Click to view description"
                                                onClick={() => !document.getElementById(`card-${category}-${index}`).classList.contains("flipcard") && flipFrontCard(`card-${category}-${index}`)}
                                            ></i>
                                            <img
                                                src={image}
                                                alt='trends'
                                            />
                                        </div>
                                        <div className='product-content d-flex flex-column justify-content-center align-items-center'>
                                            <p className='mb-0 text-center'>{title}</p>
                                            <div className='d-flex justify-content-center align-items-center mt-2'>
                                                <span className='badge d-flex justify-content-center align-items-center bg-success rounded-1'>
                                                    <span className="text-white rate">{rate}</span>
                                                    <i className="fa-solid fa-star text-white ms-2"></i>
                                                </span>
                                                <span className='ms-2 count'>{`( ${count} )`}</span>
                                            </div>

                                        </div>
                                        <div className='mb-0 py-2 d-flex justify-content-between align-items-center'>
                                            <p className='mb-0'>
                                                <i className="fa-solid fa-indian-rupee-sign pe-2"></i>
                                                {price}
                                            </p>
                                            <div>
                                                <button
                                                    type='submit'
                                                    className="p-2 btn text-white btn-primary"
                                                    onClick={() => addCartHandler(data)}>
                                                    Add Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flip-card-back d-flex justify-content-center mx-auto p-3 w-100 align-items-center text-dark">
                                        <i className="cancel-icon fa-solid fa-circle-xmark position-absolute top-0 end-0 p-4 fs-4"
                                            onClick={() => flipBackCard(`card-${category}-${index}`)}
                                        ></i>
                                        <p className='mb-0 text-center'>
                                            {description ? description : "No description available"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default memo(ProductListComponent)