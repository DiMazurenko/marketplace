import React from 'react';
import ProductCard from './components/ProductCard/ProductCard';
import PhotoSlider from '@/app/components/Slider/PhotoSlider';
import FeedbackForm from '@/app/components/Form/Form';
import FAQAccordion from '@/app/components/FAQAccordion/FAQAccordion';

const HomePage = ({ products, images }) => {
	return (
		<section className="container mx-auto px-4">
			<h1 className="text-4xl font-bold text-center my-10">Главная страница</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
				{products.map(product => (
					<ProductCard key={product.id} {...product} />
				))}
			</div>
			<div>
				<div className="mb-8">
					<PhotoSlider images={images} />
				</div>
				<div className="mb-8">
					<h2 className="text-2xl font-semibold mb-4">Часто задаваемые вопросы</h2>
					<FAQAccordion items={faqItems} />
				</div>
				<div>
					<h2 className="text-2xl font-semibold mb-4">Форма обратной связи</h2>
					<FeedbackForm />
				</div>
			</div>
		</section>
	);
};

export async function getStaticProps() {
	const productsResponse = await fetch('http://yourkirbydomain.com/api/get-products');
	const products = await productsResponse.json();

	const imagesResponse = await fetch('http://yourkirbydomain.com/api/get-slider-images');
	const images = await imagesResponse.json();

	const faqResponse = await fetch('http://yourkirbydomain.com/api/get-faq');
	const faqItems = await faqResponse.json();

	return {
		props: {
			products,
			images,
			faqItems
		},
	};
}


export default HomePage;
