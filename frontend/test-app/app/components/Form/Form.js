'use client'

import { useState } from 'react';
import styles from './Form.module.css'

const SubscribeForm = () => {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Подписка:', { name, phone });
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder="Имя"
				required
			/>
			<input
				type="tel"
				value={phone}
				onChange={(e) => setPhone(e.target.value)}
				placeholder="Телефон"
				required
			/>
			<button type="submit">Подписаться</button>
		</form>
	);
};

export default SubscribeForm;