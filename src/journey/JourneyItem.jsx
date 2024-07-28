import React from 'react';

const JourneyItem = ({ company, title, startMonth, endMonth, summary, points, logo, logoUrl }) => {
	return (
		<div className="relative flex my-20">
			{/* Logo */}
			{logo && (
				<a
					href={logoUrl}
					target='_blank'
					rel="noreferrer"
				><img
						src={process.env.REACT_APP_BASE_URL + logo}
						alt={`${company} logo`}
						className="absolute left-0 top-1/4 w-12 h-12 ml-4 sm:ml-8 bg-black"
					/>
				</a>
			)}
			{/* Experience Details */}
			<div className={`ml-20 pr-4 sm:pr-6 bg-black text-left ${logo ? 'pl-4 sm:pl-20 md:pl-40 ' : ''} `}>
				<h3 className="text-xl font-semibold text-white mb-2">{company}</h3>
				<p className="text-gray-100 mb-1">{title}</p>
				<p className="text-gray-400 mb-4">{startMonth} - {endMonth}</p>
				<p className="text-gray-100 mb-4">{summary}</p>
				<div className="text-gray-100 space-y-2">
					{points.map((point, index) => (
						<div key={index} className="flex items-center space-x-2">
							<span className="w-px h-4 bg-gray-500" />
							<span>{point}</span>
						</div>
					))}
				</div>




			</div>
		</div>
	);
};

export default JourneyItem;
