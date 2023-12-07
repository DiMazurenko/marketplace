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
		<section className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-6">Детали товара {params.id}</h1>
			<ProductSlider images={images}/>
			<p className="my-6">Описание товара</p>
			<Link className="text-indigo-600 hover:text-indigo-800" href={`/`}>
				Назад
			</Link>
		</section>
	);
};

export default ProductDetail;
