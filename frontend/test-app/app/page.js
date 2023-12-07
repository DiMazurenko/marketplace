import ProductCard from './components/ProductCard/ProductCard';
import PhotoSlider from '@/app/components/Slider/PhotoSlider';
import FeedbackForm from '@/app/components/Form/Form';
import FAQAccordion from '@/app/components/FAQAccordion/FAQAccordion';

const HomePage = () => {

	const products = [
		{ id: 1, title: 'Товар 1', description: 'Описание 1', imageUrl: '/path/to/image1.jpg' },
		{ id: 2, title: 'Товар 2', description: 'Описание 2', imageUrl: '/path/to/image2.jpg' },
		{ id: 3, title: 'Товар 3', description: 'Описание 3', imageUrl: '/path/to/image3.jpg' }
	];

	const images = [
		'url_to_first_image.jpg',
		'url_to_second_image.jpg',
		'url_to_third_image.jpg',
		'url_to_first_image.jpg',
		'url_to_second_image.jpg',
		'url_to_third_image.jpg'
	];

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
					<FAQAccordion />
				</div>
				<div>
					<h2 className="text-2xl font-semibold mb-4">Форма обратной связи</h2>
					<FeedbackForm />
				</div>
			</div>
		</section>
	);
};

export default HomePage;
