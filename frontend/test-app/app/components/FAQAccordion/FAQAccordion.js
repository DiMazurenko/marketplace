
import React from 'react';
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel
} from 'react-accessible-accordion';

const FAQAccordion = ({ items }) => {
	return (
		<Accordion allowZeroExpanded className="divide-y divide-gray-200">
			{items.map((item, index) => (
				<AccordionItem key={index} className="py-4">
					<AccordionItemHeading>
						<AccordionItemButton className="text-lg font-medium text-gray-900">
							{item.question}
						</AccordionItemButton>
					</AccordionItemHeading>
					<AccordionItemPanel className="mt-2">
						<p>{item.answer}</p>
					</AccordionItemPanel>
				</AccordionItem>
			))}
		</Accordion>
	);
};

export default FAQAccordion;

