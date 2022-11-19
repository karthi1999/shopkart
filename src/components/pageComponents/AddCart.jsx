import React, { memo } from 'react'

const AddCart = (
	{
		clickHandler,
		items,
		setItems,
	}
) => {
	const incrementHandler = (itemId) => {
		const cloneCartItem = [...items]
		let index = cloneCartItem.findIndex((data) => data.id === itemId)
		cloneCartItem[index]['productCount'] = items[index]['productCount'] + 1
		setItems([...cloneCartItem])
	}
	const decrementHandler = (itemId) => {
		const cloneCartItem = [...items]
		let index = cloneCartItem.findIndex((data) => data.id === itemId)
		cloneCartItem[index]['productCount'] = items[index]['productCount'] > 1 ? items[index]['productCount'] - 1 : 1
		setItems([...cloneCartItem])
	}
	const trashHandler = (itemId) => {
		const cloneCartItem = [...items]
		let index = cloneCartItem.findIndex((data) => data.id === itemId)
		cloneCartItem.splice(index, 1)
		setItems([...cloneCartItem])
	}
	const total = () => {
		let totalprice = 0;
		Array.isArray(items) &&
			items.length &&
			items.map((data) => {
				return (
					totalprice = totalprice + (data.price * data.productCount)
				)
			})
		return totalprice.toFixed(2)
	}

	return (
		<div className='cart position-fixed end-0'>
			<i className="fa-solid fa-xmark p-4 text-end w-100 pb-2" onClick={() => clickHandler()}></i>
			<p className='w-75 mx-auto text-center'>Your Cart</p>
			<hr className='w-75 mx-auto' />
			<div className='cart-list d-flex flex-column align-items-center me-2'>
				{
					Array.isArray(items) &&
						items.length !== 0 ?
						items.map((item, index) => {
							const {
								id,
								image,
								title,
								price,
								productCount
							} = item
							return (
								<div className='add-Cart card p-3 my-3 w-75' key={index}>
									<div className='image text-center mb-2'>
										<img src={image} alt='trends' />
									</div>
									<p className='mb-2 text-center'>{title}</p>
									<div className=' mb-2 d-flex justify-content-center quantity align-items-center'>
										<i className="fa-solid fa-plus d-flex justify-content-center align-items-center text-white fw-bold p-1 p-sm-2" onClick={() => incrementHandler(id)}></i>
										<span className='px-3'>
											<input
												type='text'
												className='form-control text-center p-1 p-sm-2'
												value={productCount ? productCount : 0}
												readOnly
											/>
										</span>
										<i className="fa-solid fa-minus d-flex justify-content-center align-items-center text-white fw-bold p-1 p-sm-2" onClick={() => decrementHandler(id)}></i>
									</div>
									<div className='mb-0 d-flex justify-content-between align-items-center'>
										<p className='mb-0'>
											<i className="fa-solid fa-indian-rupee-sign pe-2"></i>
											{price}
										</p>
										<div className='text-danger text-end'>
											<i className="fa-solid fa-trash p-2" onClick={() => trashHandler(id)}></i>
										</div>
									</div>
								</div>
							)
						}) :
						"Your cart is empty!"
				}
			</div>
			<hr className='w-75 mx-auto' />
			<div className='w-75 mx-auto'>
				<p>Total<span className='float-end'><i className="fa-solid fa-indian-rupee-sign me-2"></i>{total()}</span></p>
			</div>
		</div>
	)
}

export default memo(AddCart)