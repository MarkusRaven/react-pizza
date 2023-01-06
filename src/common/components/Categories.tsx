import { FC, useState } from 'react'

export const Categories: FC = () => {
	const [activeIndex, setActiveIndex] = useState<number>(0)

	const categories = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	]

	const onClickCategory = (index: number) => {
		setActiveIndex(index)
	}

	return (
		<div className='categories'>
			<ul>
				{categories.map((category, index) => {
					return (
						<li
							onClick={() => onClickCategory(index)}
							key={index}
							className={activeIndex === index ? 'active' : ''}>
							{category}
						</li>
					)
				})}
			</ul>
		</div>
	)
}
