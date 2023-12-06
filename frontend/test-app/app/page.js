import ProductCard from './components/ProductCard/ProductCard';
import styles from './page.module.css'
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
		<section className={styles.section}>
			<h1>Главная страница</h1>
			<div className={styles.cards}>
				{products.map(product => (
					<ProductCard key={product.id} {...product} />
				))}
			</div>
			<div>
				<div className={styles.slider} >
					<PhotoSlider images={images} />
				</div>
				<div className={styles.slider}>
					<h2>Часто задаваемые вопросы</h2>
					<FAQAccordion />
				</div>
				<div>
					<h2>Форма обратной связи</h2>
					<FeedbackForm/>
				</div>
			</div>
		</section>

	);
};

export default HomePage;