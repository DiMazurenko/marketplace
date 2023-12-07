'use client'

import React from 'react';
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel
} from 'react-accessible-accordion';

const FAQAccordion = () => {
	return (
		<Accordion allowZeroExpanded className="divide-y divide-gray-200">
			<AccordionItem className="py-4">
				<AccordionItemHeading>
					<AccordionItemButton className="text-lg font-medium text-gray-900">
						Какой возврат товара у вас предусмотрен?
					</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel className="mt-2">
					<p>У нас есть 30-дневная политика возврата без вопросов. Для возврата товара свяжитесь с нашей службой поддержки.</p>
				</AccordionItemPanel>
			</AccordionItem>

			<AccordionItem className="py-4">
				<AccordionItemHeading>
					<AccordionItemButton className="text-lg font-medium text-gray-900">
						Какие способы оплаты вы принимаете?
					</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel className="mt-2">
					<p>Мы принимаем различные способы оплаты, включая кредитные карты, PayPal и банковские переводы.</p>
				</AccordionItemPanel>
			</AccordionItem>

			<AccordionItem className="py-4">
				<AccordionItemHeading>
					<AccordionItemButton className="text-lg font-medium text-gray-900">
						Есть ли у вас международная доставка?
					</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel className="mt-2">
					<p>Да, мы осуществляем международную доставку. Стоимость и сроки доставки зависят от вашего местоположения.</p>
				</AccordionItemPanel>
			</AccordionItem>
		</Accordion>
	);
};

export default FAQAccordion;
