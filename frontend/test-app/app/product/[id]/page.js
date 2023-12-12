import Link from 'next/link';
import ProductSlider from '@/app/components/ProductSlider/ProductSlider';

const ProductDetail = ({ product }) => {
	return (
		<section className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-6">Детали товара {product.id}</h1>
			<ProductSlider images={product.images}/>
			<p className="my-6">{product.description}</p>
			<Link className="text-indigo-600 hover:text-indigo-800" href={`/`}>
				Назад
			</Link>
		</section>
	);
};

export async function getStaticPaths() {
	const response = await fetch('http://yourkirbydomain.com/api/get-product-ids');
	const products = await response.json();

	const paths = products.map(product => ({
		params: { id: product.id.toString() },
	}));

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const response = await fetch(`http://yourkirbydomain.com/api/get-product/${params.id}`);
	const product = await response.json();

	return { props: { product } };
}

export default ProductDetail;
