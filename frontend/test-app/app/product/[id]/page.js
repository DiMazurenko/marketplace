import Link from 'next/link';
import ProductSlider from '@/app/components/ProductSlider/ProductSlider';

const ProductDetail = ({params}) => {
	const images = [
		'url_to_first_image.jpg',
		'url_to_second_image.jpg',
		'url_to_third_image.jpg',
		'url_to_first_image.jpg',
		'url_to_second_image.jpg',
		'url_to_third_image.jpg',
	];

	return (
		<section>
			<h1>Детали товара {params.id}</h1>
			<ProductSlider images={images}/>
			<p>Описание товара</p>
			<Link href={`/`}>Назад</Link>
		</section>
	);
};

export default ProductDetail;