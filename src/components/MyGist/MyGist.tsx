'use client';

import dynamic from 'next/dynamic';
import './MyGist.scss';
import { IGist } from '@/interfaces/interfaces';
import Loading from '../global/Loading/Loading';
const Gist = dynamic(() => import('react-embed-gist'), {
	ssr: false,
});

const MyGist: React.FC<IGist> = ({ fileName, gistUrl, className }: IGist): JSX.Element => {
	return (
		<div className={`${className ? className : ''}`}>
			<Gist
				gist={gistUrl}
				wrapperClass='gist'
				loadingClass='loading__screen'
				titleClass='gist__title'
				errorClass='gist__error'
				contentClass='gist__content'
				key={gistUrl}
				file={fileName}
			/>
		</div>
	);
};

export default MyGist;
