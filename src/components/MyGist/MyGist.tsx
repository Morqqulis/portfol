'use client';

import dynamic from 'next/dynamic';
import './MyGist.scss';
import { IGist } from '@/interfaces/interfaces';

const Gist = dynamic(() => import('react-embed-gist'), {
	ssr: false,
	loading: () => <div className='max-w-[560px]'>Loading...</div>,
});

const MyGist: React.FC<IGist> = ({ fileName, gistUrl, className }: IGist): JSX.Element => {
	return (
		<div className={`border border-border-color rounded-2xl overflow-hidden ${className ? className : ''}`}>
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
