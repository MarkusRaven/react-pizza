import { Routes, Route } from 'react-router-dom'

import { Cart, Home, NotFound } from 'app/pages'
import { Header } from 'common/components'

import 'app/assets/scss/app.scss'

const App = () => {
	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<div className='container'>
					<Routes>
						<Route path={'/'} element={<Home />} />
						<Route path={'/cart'} element={<Cart />} />
						<Route path={'/*'} element={<NotFound />} />
					</Routes>
				</div>
			</div>
		</div>
	)
}

export default App
