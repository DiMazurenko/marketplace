'use client'

import React from 'react';
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel
} from 'react-accessible-accordion';

// Импорт стилей для аккордеона
import 'react-accessible-accordion/dist/fancy-example.css';

const FAQAccordion = () => {
	return (
		<Accordion allowZeroExpanded>
			<AccordionItem>
				<AccordionItemHeading>
					<AccordionItemButton>
						Какой возврат товара у вас предусмотрен?
					</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>
					<p>У нас есть 30-дневная политика возврата без вопросов. Для возврата товара свяжитесь с нашей службой поддержки.</p>
				</AccordionItemPanel>
			</AccordionItem>

			<AccordionItem>
				<AccordionItemHeading>
					<AccordionItemButton>
						Какие способы оплаты вы принимаете?
					</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>
					<p>Мы принимаем различные способы оплаты, включая кредитные карты, PayPal и банковские переводы.</p>
				</AccordionItemPanel>
			</AccordionItem>

			<AccordionItem>
				<AccordionItemHeading>
					<AccordionItemButton>
						Есть ли у вас международная доставка?
					</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>
					<p>Да, мы осуществляем международную доставку. Стоимость и сроки доставки зависят от вашего местоположения.</p>
				</AccordionItemPanel>
			</AccordionItem>
		</Accordion>
	);
};

export default FAQAccordion;