import { FC, useState } from 'react'

interface ICategoriesProps {
	value: number
	onClickCategory: (value: number) => void
}

export const Categories: FC<ICategoriesProps> = ({
	value,
	onClickCategory,
}) => {
	const categories = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	]

	return (
		<div className='categories'>
			<ul>
				{categories.map((category, index) => {
					return (
						<li
							onClick={() => onClickCategory(index)}
							key={index}
							className={value === index ? 'active' : ''}>
							{category}
						</li>
					)
				})}
			</ul>
		</div>
	)
}
