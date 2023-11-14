import Link from 'next/link';

const ProductDetail = ({params}) => {

	return (
		<section>
			<h1>Детали товара {params.id}</h1>
			<p>Описание товара</p>
			<Link href={`/`}>Назад</Link>
		</section>
	);
};

export default ProductDetail;