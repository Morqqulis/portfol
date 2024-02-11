const PageActions: React.FC = (): JSX.Element => {
	return (
		<div className='grid gap-10 p-6 flex-none absolute left-0 top-[60px]'>
			<button className='group/pageActionButton' type='button' aria-label='Page action button'>
				<svg
					className='fill-[#607B96] group-hover/pageActionButton:fill-accent-orange group-hover/pageActionButton:scale-125 duration-300'
					width='24.000000'
					height='24.000000'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					xmlnsXlink='http://www.w3.org/1999/xlink'>
					<defs>
						<clipPath id='clip64_1623'>
							<rect
								id='professional-info-icon'
								width='24.000000'
								height='24.000000'
								fill='white'
								fillOpacity='0'
							/>
						</clipPath>
					</defs>
					<g opacity='0.400000'>
						<rect
							id='professional-info-icon'
							width='24.000000'
							height='24.000000'
							fill='#FFFFFF'
							fillOpacity='0'
						/>
						<g clipPath='url(#clip64_1623)'>
							<path
								id='Vector'
								d='M3 3L21 3C21.2651 3 21.5195 3.10535 21.707 3.29291C21.8945 3.48041 22 3.7348 22 4L22 20C22 20.2652 21.8945 20.5196 21.707 20.7071C21.5195 20.8947 21.2651 21 21 21L3 21C2.73486 21 2.48047 20.8947 2.29297 20.7071C2.10547 20.5196 2 20.2652 2 20L2 4C2 3.7348 2.10547 3.48041 2.29297 3.29291C2.48047 3.10535 2.73486 3 3 3ZM12 15L12 17L18 17L18 15L12 15ZM8.41406 12L5.58594 14.828L7 16.243L11.2429 12L7 7.75702L5.58594 9.172L8.41406 12Z'
								fillOpacity='1.000000'
								fillRule='nonzero'
							/>
						</g>
					</g>
				</svg>
			</button>
			<button className='group/pageActionButton' type='button' aria-label='Page action button'>
				<svg
					className='fill-[#607B96] group-hover/pageActionButton:fill-accent-orange group-hover/pageActionButton:scale-125 duration-300 '
					width='24.000000'
					height='24.000000'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					xmlnsXlink='http://www.w3.org/1999/xlink'>
					<defs>
						<clipPath id='clip64_1620'>
							<rect
								id='personal-info-icon'
								width='24.000000'
								height='24.000000'
								fill='white'
								fillOpacity='0'
							/>
						</clipPath>
					</defs>
					<rect id='personal-info-icon' width='24.000000' height='24.000000' fill='#FFFFFF' fillOpacity='0' />
					<g clipPath='url(#clip64_1620)'>
						<path
							id='Vector'
							d='M5 20L19 20L19 22L5 22L5 20ZM12 18C9.87817 18 7.84351 17.1572 6.34326 15.6569C4.84277 14.1566 4 12.1217 4 10C4 7.8783 4.84277 5.84344 6.34326 4.34314C7.84351 2.84283 9.87817 2 12 2C14.1218 2 16.1565 2.84283 17.6567 4.34314C19.1572 5.84344 20 7.8783 20 10C20 12.1217 19.1572 14.1566 17.6567 15.6569C16.1565 17.1572 14.1218 18 12 18Z'
							fillOpacity='1.000000'
							fillRule='nonzero'
						/>
					</g>
				</svg>
			</button>
			<button className='group/pageActionButton' type='button' aria-label='Page action button'>
				<svg
					className='fill-[#607B96] group-hover/pageActionButton:fill-accent-orange group-hover/pageActionButton:scale-125 duration-300'
					width='24.000000'
					height='24.000000'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					xmlnsXlink='http://www.w3.org/1999/xlink'>
					<defs>
						<clipPath id='clip64_1617'>
							<rect id='hobbies-icon' width='24.000000' height='24.000000' fill='white' fillOpacity='0' />
						</clipPath>
					</defs>
					<g opacity='0.400000'>
						<rect id='hobbies-icon' width='24.000000' height='24.000000' fill='#FFFFFF' fillOpacity='0' />
						<g clipPath='url(#clip64_1617)'>
							<path
								id='Vector'
								d='M17 4C18.5913 4 20.1174 4.63214 21.2427 5.75739C22.3679 6.88257 23 8.40869 23 10L23 14C23 15.5913 22.3679 17.1174 21.2427 18.2426C20.1174 19.3679 18.5913 20 17 20L7 20C5.40869 20 3.88257 19.3679 2.75732 18.2426C1.63208 17.1174 1 15.5913 1 14L1 10C1 8.40869 1.63208 6.88257 2.75732 5.75739C3.88257 4.63214 5.40869 4 7 4L17 4ZM10 9L8 9L8 11L6 11L6 13L7.99902 13L8 15L10 15L9.99902 13L12 13L12 11L10 11L10 9ZM18 13L16 13L16 15L18 15L18 13ZM16 9L14 9L14 11L16 11L16 9Z'
								fillOpacity='1.000000'
								fillRule='nonzero'
							/>
						</g>
					</g>
				</svg>
			</button>
		</div>
	);
};

export default PageActions;
