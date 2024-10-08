"use client"
import { GetStaticProps, GetStaticPaths } from 'next'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import useStoreE from '../store'
import '../index.css'
import { useEffect, useState } from 'react'

type Article = {
	title: string
	author: string
	urlToImage: any
	publishedAt: string
	description: string
	url: string
	// Добавьте другие поля, которые есть в ваших данных
}

type MainArticleProps = {
	data: Article[]
}

interface useStore {
	queryNew: string
}



const NewMainArticle = () => {
	const router = useRouter()
	const { id } = router.query
	const [data, setData] = useState<Article>({
		title: '',
		author: '',
		urlToImage:
			'https://get.wallhere.com/photo/landscape-mountains-lake-nature-reflection-grass-sky-river-national-park-valley-wilderness-Alps-tree-autumn-leaf-mountain-season-tarn-loch-mountainous-landforms-mountain-range-590185.jpg',
		publishedAt: '',
		description: '',
		url: '',
	})

	const itemIndex = parseInt(id as string, 10)

	async function setQuery(query: string) {
		console.log(query)
		const res = await fetch(
			`https://newsapi.org/v2/everything?q=${query}&apiKey=5a767398c779420e9bd15b92c3d0118d`
		)
		const json = await res.json()
		const main: Article[] = json.articles
		setData(main[itemIndex])
		console.log(main)
	}
	useEffect(() => {
		const query = localStorage.getItem('query')
		setQuery(query ? query : '')
		console.log(query)
	}, [])

	/*if (!data || !id) {
		return <p>No data available{id}</p>
	}*/

	return (
		<div>
			<div className='MainCard'>
				<img src={data.urlToImage} alt='' className='card__img-main' />
				<div>
					<div className='card__header'>
						<p className='card__author-main'>{data?.author}</p>
						<p className='card__publishedAt-main'>{data?.publishedAt}</p>
					</div>

					<div className='card__main'>
						<h1 className='card__title-main'>{data?.title}</h1>
						<p className='card__description-main'>{data?.description}</p>
					</div>
					<div className='card__footer'>
						<a className='card__link-main' href={data?.url}>
							Read
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
/*
export const getServerSideProps: GetServerSideProps = async context => {
	const query = useStoreE(state => state.query)
	const res = await fetch(
		`https://newsapi.org/v2/everything?q=${query}&apiKey=5a767398c779420e9bd15b92c3d0118d`
	)
	const json = await res.json()
	const data: Article[] = json.articles

	return {
		props: {
			data,
		},
	}
}


export const getStaticPaths: GetStaticPaths = async () => {
	const query = process.env.QUERY || 'sport'
	const res = await fetch(
		`https://newsapi.org/v2/everything?q=${query}&apiKey=5a767398c779420e9bd15b92c3d0118d`
	)
	const json = await res.json()
	const data: Article[] = json.articles

	const paths = data.map((_, index) => ({
		params: { id: index.toString() },
	}))

	return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async () => {
	const query = process.env.QUERY || 'sport'
	const res = await fetch(
		`https://newsapi.org/v2/everything?q=${query}&apiKey=5a767398c779420e9bd15b92c3d0118d`
	)
	const json = await res.json()
	const data: Article[] = json.articles

	return {
		props: {
			data,
		},
	}
}
*/
export default NewMainArticle

