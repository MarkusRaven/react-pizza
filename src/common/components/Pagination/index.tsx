import { FC } from 'react'
import ReactPaginate from 'react-paginate'

import styles from 'common/components/Pagination/Pagination.module.scss'

interface IPagination {
	onChangePage: (page: number) => void
}

export const Pagination: FC<IPagination> = ({ onChangePage }) => {
	return (
		<ReactPaginate
			className={styles.root}
			breakLabel='...'
			nextLabel='>'
			previousLabel='<'
			onPageChange={(event) => onChangePage(event.selected + 1)}
			pageRangeDisplayed={4}
			pageCount={3}
			renderOnZeroPageCount={() => null}
		/>
	)
}
