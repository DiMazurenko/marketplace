import Link from 'next/link';
import styles from './ProductCard.module.css'

const ProductCard = ({ id, title, description, imageUrl }) => {
	return (
		<div className={ styles.card }>
			<img className={styles.img} src={imageUrl} alt={title} />
			<h2>{title}</h2>
			<p>{description}</p>
			<Link href={`/product/${id}`}>
				Подробнее
			</Link>
		</div>
	);
};

export default ProductCard;