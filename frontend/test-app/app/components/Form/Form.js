'use client'

import React from 'react';
import { useForm } from 'react-hook-form';

const FeedbackForm = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = data => {
		console.log(data);
		// Обработка данных формы
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label htmlFor="name">Имя:</label>
				<input
					id="name"
					{...register('name', { required: true })}
				/>
				{errors.name && <span>Это поле обязательно</span>}
			</div>

			<div>
				<label htmlFor="email">Электронная почта:</label>
				<input
					id="email"
					type="email"
					{...register('email', { required: true })}
				/>
				{errors.email && <span>Это поле обязательно</span>}
			</div>

			<div>
				<label htmlFor="message">Сообщение:</label>
				<textarea
					id="message"
					{...register('message', { required: true })}
				></textarea>
				{errors.message && <span>Это поле обязательно</span>}
			</div>

			<button type="submit">Отправить</button>
		</form>
	);
};

export default FeedbackForm;