import React, { useEffect, useState } from 'react';
import { IconLink } from '../utils/IconLink';

const SideBar = () => {
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
    <div className="fixed z-10 right-1 top-1/3 hidden sm:flex flex-col items-center space-y-4 pr-2">
        <IconLink item={personalData?.linkedIn} />
        <IconLink item={personalData?.github} />
        <IconLink item={personalData?.leetcode} />
        <IconLink item={personalData?.codeforces} />
    </div>
  );
};

export default SideBar;
