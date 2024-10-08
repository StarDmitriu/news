/*import '../components/MainArticle.css'

type MainArticleProps = {
	data: { [key: string]: any }[]
}

const MainArticle = ({ data }: MainArticleProps) => {
  if (!data) {
		return <p>No data available</p>
	}

  let itemMain = data[1]
  const keys = Object.keys(itemMain)
  return (
		<div className='MainCard'>
			<img src={itemMain.urlToImage} alt='' className='card__img-main' />
			<div>
				<div className='card__header'>
					<p className='card__author-main'>{itemMain.author}</p>
					<p className='card__publishedAt-main'>{itemMain.publishedAt}</p>
				</div>
				
				<div className='card__main'>
					<h1 className='card__title-main'>{itemMain.title}</h1>
					<p className='card__description-main'>{itemMain.description}</p>
				</div>
				<div className='card__footer'>
					<a className='card__link-main' href={itemMain.url}>
						Read
					</a>
				</div>
			</div>
		</div>
	)
}

export default MainArticle*/







import '../components/MainArticle.css'

type MainArticleProps = {
	data: { [key: string]: any }[]
}

const MainArticle = ({ data }: MainArticleProps) => {
	if (!data) {
		return <p>No data available</p>
	}

	let itemMain = data[1]

	if (!itemMain) {
		return <p>No main article available</p>
	}

	const keys = Object.keys(itemMain)

	return (
		<div className='MainCard'>
				<img src={itemMain.urlToImage} alt='' className='card__img-main' />
			<div>
				<div className='card__header'>
					<p className='card__author-main'>{itemMain.author}</p>
					<p className='card__publishedAt-main'>{itemMain.publishedAt}</p>
				</div>

				<div className='card__main'>
					<h1 className='card__title-main'>{itemMain.title}</h1>
					<p className='card__description-main'>{itemMain.description}</p>
				</div>
				<div className='card__footer'>
					<a className='card__link-main' href={itemMain.url}>
						Read
					</a>
				</div>
			</div>
		</div>
	)
}

export default MainArticle
