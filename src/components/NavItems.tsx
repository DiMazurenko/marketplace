'use client';

import {useEffect, useRef, useState} from 'react';
import {PRODUCT_CATEGORIES} from '@/config';
import NavItem from '@/components/NavItem';
import {useOnClickOutside} from '@/hooks/use-on-click-outside';
import {handler} from 'tailwindcss-animate';

const NavItems = () => {
	const [activeIndex, setActiveIndex] = useState<null | number>(null);

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setActiveIndex(null);
			}
		};

		document.addEventListener('keydown', handler);

		return () => {
			document.removeEventListener('keydown', handler);
		};
	}, []);

	const isAnyOpen = activeIndex !== null;

	const navRef = useRef<HTMLDivElement | null>(null);

	useOnClickOutside(navRef, () => setActiveIndex(null));

	return (
		<div className="flex gap-4 h-full" ref={navRef}>
			{PRODUCT_CATEGORIES.map((category, i) => {
				const handleOpen = () => {
					if (activeIndex === i) {
						setActiveIndex(null);
					} else {
						setActiveIndex(i);
					}
				};

				const isOpen = (i === activeIndex);

				return (<NavItem
					key={category.value}
					category={category}
					handleOpen={handleOpen}
					isOpen={isOpen}
					isAnyOpen={isAnyOpen}
				/>);
			})}
		</div>
	);
};

export default NavItems;