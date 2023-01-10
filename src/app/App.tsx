import { Routes, Route } from 'react-router-dom'

import { Cart, Home, NotFound } from 'app/pages'
import { Header } from 'common/components'

import 'app/assets/scss/app.scss'
import { useState } from 'react'

const App = () => {
	const [searchValue, setSearchValue] = useState('')

	return (
		<div className='wrapper'>
			<Header searchValue={searchValue} setSearchValue={setSearchValue} />
			<div className='content'>
				<Routes>
					<Route
						path={'/'}
						element={<Home searchValue={searchValue} />}
					/>
					<Route path={'/cart'} element={<Cart />} />
					<Route path={'/*'} element={<NotFound />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
