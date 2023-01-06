import { useState, useEffect, FC } from 'react'
import { Categories, Sort, PizzaBlock } from 'common/components'
import { PizzaBlockSkeleton } from 'common/components/loaders'
import { IPizza } from 'common/models/PizzaModel'

type Props = {}

export const Home: FC = (props: Props) => {
	const [items, setItems] = useState<IPizza[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)

	useEffect(() => {
		fetch('https://63b7886f4d97e82aa3bf67f7.mockapi.io/items')
			.then((res) => {
				return res.json()
			})
			.then((data) => {
				setItems(data)
				setIsLoading(false)
			})
	}, [])

	return (
		<>
			<div className='content__top'>
				<Categories />
				<Sort />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isLoading
					? [...new Array(6)].map((_, index) => (
							<PizzaBlockSkeleton key={index} />
					  ))
					: items.map((pizza) => {
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
		</>
	)
}
