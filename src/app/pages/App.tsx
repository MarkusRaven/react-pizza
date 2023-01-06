import { useEffect, useState } from 'react'
import { Categories, Header, PizzaBlock, Sort } from 'common/components'

import 'app/assets/scss/app.scss'
import { IPizza } from 'common/models/PizzaModel'

const App = () => {
	const [items, setItems] = useState<IPizza[]>([])

	useEffect(() => {
		fetch('https://63b7886f4d97e82aa3bf67f7.mockapi.io/items')
			.then((res) => {
				return res.json()
			})
			.then((data) => setItems(data))
	}, [])

	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<div className='container'>
					<div className='content__top'>
						<Categories />
						<Sort />
					</div>
					<h2 className='content__title'>Все пиццы</h2>
					<div className='content__items'>
						{items.map((pizza) => {
							return (
								<PizzaBlock
									key={pizza.id}
									title={pizza.title}
									price={pizza.price}
									imageUrl={pizza.imageUrl}
									sizes={pizza.sizes}
									types={pizza.types}
								/>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
