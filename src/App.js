import React, { useState } from 'react';
import BannerComponent from './components/pageComponents/BannerComponent';
import HeaderComponent from './components/pageComponents/HeaderComponent';
import AddCart from './components/pageComponents/AddCart';
import ProductsComponent from './components/pageComponents/ProductsComponent';
import FooterComponent from './components/pageComponents/FooterComponent';
import datas from './components/utilities/sampledata.json';

function App() {
	const [flag, setFlag] = useState(false);
	const [items, setItems] = useState([]);
	const clickHandler = () => {
		setFlag(!flag)
	}
	let categorys = []
	for (let product in datas) {
		Array.isArray(categorys) &&
			!categorys.some(data => data === datas[product].category) &&
			categorys.push(`${datas[`${product}`].category}`)
	}
	return (
		<div className="App">
			<HeaderComponent
				items={items}
				clickHandler={clickHandler}
			/>
			<BannerComponent />
			<ProductsComponent
				setItems={setItems}
				items={items}
				categorys={categorys}
			/>
			{
				flag &&
				<AddCart
					clickHandler={clickHandler}
					items={items}
					setItems={setItems}
				/>
			}
			<FooterComponent />
		</div>
	);
}

export default App;
