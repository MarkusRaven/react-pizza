import { FC } from 'react'

import styles from './NotFoundBlock.module.scss'

export const NotFoundBlock: FC = () => {
	return (
		<div className={styles.root}>
			<h1>
				<span>😕</span>
				<br />
				Not Found
			</h1>
			<p className={styles.description}>
				К сожалению данная страница отсутствует в нашем
				интернет-магазине
			</p>
		</div>
	)
}
