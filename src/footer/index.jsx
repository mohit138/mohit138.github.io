import React, { useEffect, useState } from 'react';
import { IconLink } from '../utils/IconLink';

const Footer = () => {
	const [personalData, setData] = useState(null);
	const fetchJson = () => {
		fetch('./personalLinks.json')
			.then(response => {
				return response.json();
			}).then(data => {
				setData(data);
			}).catch((e) => {
				console.log(e.message);
			});
	}
	useEffect(() => {
		fetchJson();
	}, [])
	return (
		<footer className="bg-neutral-900 py-24">
			<div className="max-w-7xl mx-auto px-6 text-center text-white">
				<h2 className="text-3xl font-bold mb-4">Let's Connect!</h2>
				<p className="text-lg mb-8 my-16">
					I'm always open to discussions, opportunities, and connections. Feel free to reach out!
				</p>
				<a href={`mailto:${personalData?.mailId}`}>
					<button className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-700 transition duration-300">
						Say Hello
					</button>
				</a>
			</div>
			<div className='space-x-6 sm:hidden pt-16 flex justify-center items-center'>
			 <IconLink  item={personalData?.linkedIn} />
        <IconLink item={personalData?.github} />
        <IconLink item={personalData?.leetcode} />
        <IconLink item={personalData?.codeforces} />
			</div>
		</footer>
	);
};

export default Footer;
