import { List } from 'antd'
import React from 'react'
const data = [
	{
		title: 'Главная',
		link:'#home'
	},
	{
		title: 'Цены',
		link:'#price'
	},
	{
		title: 'Фото сервиса',
		link:'#foto'
	},
	{
		title: 'Вопрос-ответ',
		link:'#vopros'
	},
]
const ListMenu = ({onClose}) => (
	<>
		<List
			size="large"
			dataSource={data}
			renderItem={(item) => <List.Item>
				<a href={item.link}
					className='text-black'
					onClick={onClose}
				>
					{item.title}
				</a>
			</List.Item>}
		/>
	</>
)
export default ListMenu