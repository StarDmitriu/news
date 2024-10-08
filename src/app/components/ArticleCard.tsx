import './ArticleCard.css'
import Link from 'next/link'

type MainArticleProps = {
	data: { [key: string]: any }[]
}

const ArticleCard = ({ data }: MainArticleProps) => {
	if (!data) {
		return <p>No data available</p>
	}

	return (
		<>
			{data.map((item, index) => (
				<div key={index} className='card'>
					<Link href={`/data/${index}`}>
						<div>
							<img src={item.urlToImage} alt='' className='card__img' />
							<div className='cards__main'>
								<h4>{item.author}</h4>
								<p className='card__publishedAt'>{item.publishedAt}</p>
								<h3>{item.title}</h3>
								<p className='card__description'>{item.description}</p>
							</div>
						</div>
					</Link>
				</div>
			))}
		</>
	)
}

export default ArticleCard
