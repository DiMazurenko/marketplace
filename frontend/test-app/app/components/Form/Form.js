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
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
			<div>
				<label htmlFor="name" className="block text-sm font-medium text-gray-700">Имя:</label>
				<input
					id="name"
					{...register('name', { required: true })}
					className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
				/>
				{errors.name && <span className="text-red-500 text-xs">Это поле обязательно</span>}
			</div>

			<div>
				<label htmlFor="email" className="block text-sm font-medium text-gray-700">Электронная почта:</label>
				<input
					id="email"
					type="email"
					{...register('email', { required: true })}
					className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
				/>
				{errors.email && <span className="text-red-500 text-xs">Это поле обязательно</span>}
			</div>

			<div>
				<label htmlFor="message" className="block text-sm font-medium text-gray-700">Сообщение:</label>
				<textarea
					id="message"
					{...register('message', { required: true })}
					className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
				></textarea>
				{errors.message && <span className="text-red-500 text-xs">Это поле обязательно</span>}
			</div>

			<button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
				Отправить
			</button>
		</form>
	);
};

export default FeedbackForm;
