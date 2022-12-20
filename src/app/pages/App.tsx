import { Categories, Header, PizzaBlock, Sort } from 'common/components'

import 'app/assets/scss/app.scss'

function App() {
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
						<PizzaBlock title={'Мексиканская'} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default App