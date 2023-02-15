import {
	Button,
	Select,
	Form,
	Input,
	DatePicker,
	TimePicker,
	message,
} from 'antd'
import React from 'react'
import axios from "axios"
import { useScreens } from '../../../Constants/constants'

import { sendOrderTelegram } from '../../../http/telegramAPI'

const dateFormat = 'DD.MM.YYYY'
const { TextArea } = Input

const ZapisatsyaForm = () => {
	const screens = useScreens()
	const [form] = Form.useForm()

	const onFinish = (values) => {
		console.log('values: ', values)
		const dataForm = {
			name: values.name,
			phone: values.tel,
			date: !values.date ? '-' : values.date.$d.toLocaleDateString("ru-RU"),
			time: {
				from: !values.time ? '-' : values.time[0].$d.toLocaleTimeString("ru-RU"),
				before: !values.time ? '-' : values.time[1].$d.toLocaleTimeString("ru-RU")
			},
			polomka: values.polomka,
			message: values.message,
		}
		let messageForm = `<b>Заказ с сайта</b>\n`
		messageForm += `<b> </b>\n`
		messageForm += `<b>Дата: </b> ${dataForm.date} \n`
		messageForm += `<b>Время: </b> ${dataForm.time.from} — ${dataForm.time.before}\n`
		messageForm += `<b>Необходимо: </b> ${!dataForm.polomka ? '-' : dataForm.polomka}\n`
		messageForm += `<b>Сообщение: </b> <i>«${!dataForm.message ? '-' : dataForm.message}»</i>\n`
		messageForm += `<b> </b>\n`
		messageForm += `<b>Отправитель: </b> ${!dataForm.name ? '-' : dataForm.name}\n`
		messageForm += `<b>Телефон: </b> ${dataForm.phone}\n`
		message.success('Запрос на запись отправлена');

		sendOrderTelegram(messageForm)
			.then(data => {
				if (data.ok) message.success('Заказ принят')
			}).then(res => {
			if (res.status === 200) {
				message.success('Запрос принят')
				form.resetFields()
			}
		})
	}
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo)
	}
	return (
		<Form
			name="basic"
			layout="horizontal"
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
			labelCol={{
				span: 24,
			}}
			wrapperCol={{
				span: 24,
			}}
		>
			<Form.Item
				label="Имя"
				name="name"
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Телефон"
				name="tel"
				rules={[
					{
						required: true,
						message: 'Пожалуйста введите номер!',
					},
				]}
			>
				<Input />
			</Form.Item>


			<Form.Item
				label="Выберите число"
				name="date"
			>
				<DatePicker format={dateFormat} style={{
					width: '100%',
				}} />
			</Form.Item>


			<Form.Item
				label="Выберите время"
				name="time"
			>
				<TimePicker.RangePicker
					style={{
						width: '100%',
					}}
				/>
			</Form.Item>



			<Form.Item
				label="Поломка"
				name="polomka"
			>
				<Select>
					<Select.Option value="шиномотаж">шиномотаж</Select.Option>
					<Select.Option value="развал-схождение">развал-схождение</Select.Option>
					<Select.Option value="антикор">антикор</Select.Option>
					<Select.Option value="тормозная система">тормозная система</Select.Option>
					<Select.Option value="автоэлектрик">автоэлектрик</Select.Option>
					<Select.Option value="кондиционер">кондиционер</Select.Option>
					<Select.Option value="коробка передач">коробка передач</Select.Option>
					<Select.Option value="замена масла">замена масла</Select.Option>
					<Select.Option value="диагностика">диагностика</Select.Option>
					<Select.Option value="ремонт авто">ремонт авто</Select.Option>
					<Select.Option value="другое">другое</Select.Option>
				</Select>
			</Form.Item>

			<Form.Item
				label="Сообщение"
				name="message"
			>
				<TextArea rows={4} />
			</Form.Item>

			<Form.Item
				wrapperCol={{
					offset: 15,
					span: 24,
				}}
			>
				<Button type="primary" htmlType="submit">
					Записаться
				</Button>
			</Form.Item>
		</Form>
	);
};
export default ZapisatsyaForm