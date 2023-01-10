import { useState, useEffect, FC } from 'react'
import { Categories, Sort, PizzaBlock, ISortType } from 'common/components'
import { PizzaBlockSkeleton } from 'common/components/loaders'
import { IPizza } from 'common/models/PizzaModel'
import { Pagination } from 'common/components/Pagination'

export const Home: FC<any> = (props: any) => {
	const [items, setItems] = useState<IPizza[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [categoryId, setCategoryId] = useState<number>(0)
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [sortType, setSortType] = useState<ISortType>({
		name: 'популярности',
		sortProperty: 'rating',
	})

	useEffect(() => {
		const category = categoryId > 0 ? `&category=${categoryId}` : ''
		const search = props.searchValue ? `&search=${props.searchValue}` : ''
		setIsLoading(true)
		fetch(
			`https://63b7886f4d97e82aa3bf67f7.mockapi.io/items?page=${currentPage}&limit=4${category}&sortBy=${sortType.sortProperty}&order=desc${search}`
		)
			.then((res) => {
				return res.json()
			})
			.then((data) => {
				setItems(data)
				setIsLoading(false)
			})

		window.scrollTo(0, 0)
	}, [categoryId, sortType, props.searchValue, currentPage])

	const pizzas = items.map((pizza) => {
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
	})
	const skeletons = [...new Array(6)].map((_, index) => (
		<PizzaBlockSkeleton key={index} />
	))

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories
					value={categoryId}
					onClickCategory={setCategoryId}
				/>
				<Sort value={sortType} onChangeSort={setSortType} />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isLoading ? skeletons : pizzas}
			</div>
			<Pagination onChangePage={setCurrentPage} />
		</div>
	)
}
