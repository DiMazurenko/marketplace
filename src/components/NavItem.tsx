'use client';

import {Button} from '@/components/ui/button';
import {PRODUCT_CATEGORIES} from '@/config';
import {ChevronDown} from 'lucide-react';
import {cn} from '@/lib/utils';

type Category = typeof PRODUCT_CATEGORIES[number];

interface NavItemProps {
	category: Category;
	handleOpen: () => void;
	isOpen: boolean;
	isAnyOpen: boolean;
}

const NavItem = (
	{
		category,
		isOpen,
		isAnyOpen,
		handleOpen
	}: NavItemProps) => {

	return (
		<div className="flex">
			<div className="relative flex items-center">
				<Button
					className="gap-1.5"
					onClick={handleOpen}
					variant={isOpen ? 'secondary' : 'ghost'}
				>
					{category.label}
					<ChevronDown className={cn(
						'h-4 w-4 transition-all text-muted-foreground',
						{
							'-rotate-180': isOpen
						}
					)}/>
				</Button>
			</div>
		</div>
	);
};

export default NavItem;