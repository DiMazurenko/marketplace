import Link from 'next/link';

const ProductCard = ({ id, title, description, imageUrl }) => {
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg">
			<img className="w-full" src={imageUrl} alt={title} />
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{title}</div>
				<p className="text-gray-700 text-base">
					{description}
				</p>
			</div>
			<div className="px-6 pt-4 pb-2">
				<Link className="inline-block bg-indigo-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:bg-indigo-600" href={`/product/${id}`}>
					Подробнее
				</Link>
			</div>
		</div>
	);
};

export default ProductCard;
