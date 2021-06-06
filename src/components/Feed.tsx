import { useRef, FC } from 'react';
import { useSelector } from 'react-redux';
import {
	List,
	AutoSizer,
	CellMeasurer,
	CellMeasurerCache,
} from 'react-virtualized';
import Article from './Article';

const newsFeedStyle = {
	width: 'auto',
	height: '87vh',
};

const Feed: FC = () => {
	const news = useSelector((state: any) => state.newsReducer.news);

	const cache = useRef(
		new CellMeasurerCache({
			fixedWidth: true,
			defaultHeight: 750,
		})
	);

	return (
		<div style={newsFeedStyle}>
			<AutoSizer>
				{({ width, height }) => (
					<List
						width={width}
						height={height}
						rowHeight={cache.current.rowHeight}
						deferredMeasurementCache={cache.current}
						rowCount={news.length}
						rowRenderer={({ key, index, style, parent }) => {
							const article = news[index];

							return (
								<CellMeasurer
									key={key}
									cache={cache.current}
									parent={parent}
									columnIndex={0}
									rowIndex={index}
								>
									<div key={key} style={style}>
										<Article article={article} />
									</div>
								</CellMeasurer>
							);
						}}
					/>
				)}
			</AutoSizer>
		</div>
	);
};

export default Feed;
