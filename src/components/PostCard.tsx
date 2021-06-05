import { FC } from 'react';
import moment from 'moment';
import { Card } from 'react-bootstrap';
import Avatar from '../assets/avatar.jpg';

interface IProps {
	article: {
		title: string;
		source: {
			name: string;
		};
		author: string;
		publishedAt: string;
		description: string;
		urlToImage: string;
	};
}

const spanStyle = {
	fontSize: 15,
	color: 'gray',
	fontWeight: 600,
};

const cardFooterStyle = {
	display: 'grid',
	gridTemplateColumns: '1fr 1fr 1fr',
	alignContent: 'space-between',
	alignItems: 'center',
};

const cardHeaderStyle = {
	display: 'flex',
	height: 68,
	marginBottom: 8,
	alignContent: 'space-between',
	alignItems: 'center',
};

const headerText = {
	fontWeight: 500,
	fontSize: 14,
	color: 'gray',
};

const imgStyle = {
	borderRadius: '50%',
	width: 60,
	height: 'auto',
};

const articleDescription = {
	marginTop: 16,
	color: 'grey',
	fontWeight: 500,
	// textAlign: 'justify',
};

const PostCard: FC<IProps> = ({ article }) => {
	return (
		<Card
			style={{
				marginBottom: 8,
				height: 800,
			}}
		>
			<Card.Header>
				<div className='' style={cardHeaderStyle}>
					<div className='avatar' style={{ padding: 4 }}>
						<img src={Avatar} alt='avatar' style={imgStyle} />
					</div>

					<div className='source-link' style={{ padding: 4 }}>
						<span
							style={{
								fontWeight: 600,
								color: 'purple',
								fontSize: 14,
							}}
						>
							{article.source.name}
						</span>
					</div>

					<div className='' style={{ padding: 4 }}>
						<span style={headerText}>{article.author}</span>
					</div>

					<div className='' style={{ padding: 4 }}>
						<span style={headerText}>
							{moment(article.publishedAt).calendar()}
						</span>
					</div>
				</div>
				<h6
					style={{
						fontWeight: 600,
						fontSize: 16,
						marginBottom: 16,
					}}
				>
					{article.title}
				</h6>
			</Card.Header>

			<Card.Body>
				<Card.Img variant='top' src={article.urlToImage}></Card.Img>

				<p style={articleDescription}>{article.description}</p>
			</Card.Body>

			<Card.Footer>
				<div className='custom-card-footer' style={cardFooterStyle}>
					<span style={spanStyle}>
						Partager
						<i className='fa fa-share' style={{ margin: '0px 8px' }}></i>
						149
					</span>

					<span style={spanStyle}>
						<i className='fa fa-heart' style={{ marginRight: 8 }}></i>
						20 J'aimes
					</span>

					<button type='button' className='btn-custom'>
						<i className='fa fa-microphone'></i> En parler
					</button>
				</div>
			</Card.Footer>
		</Card>
	);
};

export default PostCard;
