import MainArticle from '@/app/components/MainArticle'
import ArticleCard from '@/app/components/ArticleCard'
import { useState, useEffect } from 'react'
import useStoreE from '@/pages/store'
import './index.css'

type Article = {
	id: string
	author: string
}

export default function Home() {
	const [data, setData] = useState<Article[]>([])
	const [inputValue, setInputValue] = useState('')
	const query = useStoreE(state => state.query)
	const setQuery = useStoreE(state => state.setQuery)

	const fetchData = async (query: string) => {
		const res = await fetch(
			`https://newsapi.org/v2/everything?q=${query}&apiKey=5a767398c779420e9bd15b92c3d0118d`
		)
		const json = await res.json()
		setData(json.articles)
		console.log('Fetched data:', json.articles)
	}

	useEffect(() => {
		fetchData(query)
		localStorage.setItem('query', query)
		console.log(query)
	}, [query])
	

	const handleChange = (event: any) => {
		setInputValue(event.target.value)
	}

	const handleSave = () => {
		setQuery(inputValue)
		console.log('Updated query:', query)
	}
console.log(setQuery)
console.log(query)
	return (
		<div>
			<SimpleInput
				inputValue={inputValue}
				handleChange={handleChange}
				handleSave={handleSave}
			/>
			<div className='mainCard'>
				<MainArticle data={data} />
			</div>
			<div className='cards'>
				<ArticleCard data={data} />
			</div>
		</div>
	)
}

const SimpleInput = ({ inputValue, handleChange, handleSave }: any) => {
	return (
		<div>
			<input type='text' value={inputValue} onChange={handleChange} />
			<button onClick={handleSave}>Save</button>
		</div>
	)
}