import { Table, Image } from 'antd'
import React, { useState } from 'react'
import { DownOutlined, RightOutlined } from '@ant-design/icons'
import imageGajka from '../../images/foto-price/1.webp'
import imageSupport from '../../images/foto-price/2.webp'
import imageVtulka from '../../images/foto-price/3.webp'
import imageAmortizator from '../../images/foto-price/4.webp'
import imageRichag from '../../images/foto-price/5.webp'
import imageDiagnostik from '../../images/foto-price/6.webp'
import imageLampa from '../../images/foto-price/7.webp'
import imageSharov from '../../images/foto-price/8.webp'
import imagepodshipnik from '../../images/foto-price/9.webp'
import imageRulNakonech from '../../images/foto-price/10.webp'
import imageShrus from '../../images/foto-price/11.webp'
import imageKomputer from '../../images/foto-price/12.webp'
import imageMaslo from '../../images/foto-price/13.webp'
import imageGrm from '../../images/foto-price/14.webp'
import imageGlush from '../../images/foto-price/15.webp'
import imageSceple from '../../images/foto-price/16.webp'
import imageTorSistema from '../../images/foto-price/17.webp'
import imageKoleso from '../../images/foto-price/18.webp'

const columns = [
	{
		title: <span className='font-bold'>Наименование</span>,
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: <span className='font-bold'>Стоимость (руб)</span>,
		dataIndex: 'price',
		key: 'price',
		// width: '40%',
		align: 'center',
	},
	Table.EXPAND_COLUMN,
]
const data = [
	{
		'Ремонт подвески': [
			{
				key: 1,
				name: 'Диагностика подвески',
				time: 'от 1:00',
				price: "15,00",
				description: 'Полная проверка задней и передней подвески.',
				image:imageDiagnostik,
			},
			{
				key: 2,
				name: 'Замена шаровой опоры',
				time: 'от 1:00',
				price: "от 30,00",
				description: 'Цена зависит от время потраченного на снятие старой шаровой.',
				image: imageSharov,
			},
			{
				key: 3,
				name: 'Замена ступичного подшипника',
				time: 'от 50:00',
				price: "от 50,00",
				description: 'Время и цена зависит от время потраченного на снятие старого подшипника.',
				image: imagepodshipnik,
			},
			{
				key: 4,
				name: 'Замена опорных подшипников',
				time: 'от 1:00',
				price: "от 60,00",
				description: 'Время и цена зависит от время потраченного на снятие амортизатора.',
				image: imageAmortizator,
			},
			{
				key: 5,
				name: 'Замена рулевых наконечников',
				time: 'от 1:00',
				price: "от 15,00",
				description: 'Время и цена зависит от время потраченного на снятие старого наконечника.',
				image: imageRulNakonech,
			},
			{
				key: 6,
				name: 'Замена шруса',
				time: 'от 1:00',
				price: "от 40,00",
				description: 'Время и цена зависит от состояния старого шруса.',
				image: imageShrus,
			},
		]
	},
	{
		'Ремонт электрооборудования': [
			{
				key: 1,
				name: 'Компьютерная диагностика',
				time: 'от 1:00',
				price: "от 20,00",
				description: '',
				image: imageKomputer,
			},
		]
	},
	{
		'Ремонт двигателя': [
			{
				key: 1,
				name: 'Замена масла',
				time: 'от 1:00',
				price: "от 25,00",
				description: 'Замена масла в двигателе.',
				image:imageMaslo,
			},
			{
				key: 2,
				name: 'Замена ремня ГРМ',
				time: 'от 1:00',
				price: "от 150,00",
				description: 'Замена всех роликов и ремня.',
				image:imageGrm,
			},
			{
				key: 3,
				name: 'Замена глушителя',
				time: 'от 1:00',
				price: "от 25,00",
				description: 'Цена зависит от кол-ва заменяемых банок и от время потраченного на снятие старого глушителя.',
				image:imageGlush,
			},
		]
	},
	{
		'Ремонт коробки передач': [
			{
				key: 1,
				name: 'Замена сцепления',
				time: 'от 1:00',
				price: "от 250,00",
				description: 'Цена зависит нужна ли замена корзины и выжимного подшипника.',
				image:imageSceple,

			},
		]
	},
	{
		'Ремонт тормозной системы': [
			{
				key: 1,
				name: 'Ремонт тормозной системы',
				time: 'от 1:00',
				price: "от 60,00",
				description: 'Цена зависит от заменяемых элементов.',
				image:imageTorSistema,
			},
			{
				key: 2,
				name: 'Замена тормозных колодок',
				time: 'от 1:00',
				price: "от 25,00",
				description: 'Цена зависит от состояния суппортов и скоб.',
				image:imageSupport,
			},
		]
	},
	// {
	// 	'Ремонт элементов кузова': [
	// 		{
	// 			key: 1,
	// 			name: 'Замена свечей накаливания',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 2,
	// 			name: 'Ремонт',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 3,
	// 			name: 'Диагностика подвески',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 4,
	// 			name: 'Ремонт',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 5,
	// 			name: 'Диагностика подвески',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 6,
	// 			name: 'Ремонт',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 7,
	// 			name: 'Ремонт',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 	]
	// },
	// {
	// 	'Мойка и хим. чистка авто': [
	// 		{
	// 			key: 1,
	// 			name: 'Замена свечей накаливания',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 2,
	// 			name: 'Ремонт',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 3,
	// 			name: 'Диагностика подвески',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 4,
	// 			name: 'Ремонт',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 5,
	// 			name: 'Диагностика подвески',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 6,
	// 			name: 'Ремонт',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 7,
	// 			name: 'Ремонт',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 	]
	// },
	// {
	// 	'Машину трясёт': [
	// 		{
	// 			key: 1,
	// 			name: 'Замена свечей накаливания',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 2,
	// 			name: 'Ремонт',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 3,
	// 			name: 'Диагностика подвески',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 4,
	// 			name: 'Ремонт',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 5,
	// 			name: 'Диагностика подвески',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 6,
	// 			name: 'Ремонт',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 7,
	// 			name: 'Ремонт',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 	]
	// },
	// {
	// 	'Машина дергается при движении': [
	// 		{
	// 			key: 1,
	// 			name: 'Замена свечей накаливания',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 2,
	// 			name: 'Ремонт',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 3,
	// 			name: 'Диагностика подвески',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 4,
	// 			name: 'Ремонт',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 5,
	// 			name: 'Диагностика подвески',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 6,
	// 			name: 'Ремонт',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 7,
	// 			name: 'Ремонт',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 	]
	// },
	// {
	// 	'Машина не заводится': [
	// 		{
	// 			key: 1,
	// 			name: 'Замена свечей накаливания',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 2,
	// 			name: 'Ремонт',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 3,
	// 			name: 'Диагностика подвески',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 4,
	// 			name: 'Ремонт',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 5,
	// 			name: 'Диагностика подвески',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 6,
	// 			name: 'Ремонт',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 7,
	// 			name: 'Ремонт',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 	]
	// },
	// {
	// 	'Что-то стучит': [
	// 		{
	// 			key: 1,
	// 			name: 'Замена свечей накаливания',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 2,
	// 			name: 'Ремонт',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 3,
	// 			name: 'Диагностика подвески',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 4,
	// 			name: 'Ремонт',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 5,
	// 			name: 'Диагностика подвески',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 6,
	// 			name: 'Ремонт',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 7,
	// 			name: 'Ремонт',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 	]
	// },
	// {
	// 	'Диагностика авто': [
	// 		{
	// 			key: 1,
	// 			name: 'Замена свечей накаливания',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 2,
	// 			name: 'Ремонт',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 3,
	// 			name: 'Диагностика подвески',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 4,
	// 			name: 'Ремонт',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 5,
	// 			name: 'Диагностика подвески',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 6,
	// 			name: 'Ремонт',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 		{
	// 			key: 7,
	// 			name: 'Ремонт',
	// 			time: 'от 1:00',
	// 			price: "от 5,00",
	// 			description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	// 		},
	// 	]
	// },
	{
		'Шиномонтаж': [
			{
				key: 1,
				name: '4 колеса',
				time: 'от 1:00',
				price: "от 40,00",
				description: 'Время и цена зависит от состояния болтов крепления колеса.',
				image:imageKoleso,
			},
			
		
		]
	},
]
const TablePrice = () => {
	const [active, setActive] = useState({
		'Ремонт подвески': false,
		'Ремонт электрооборудования': false,
		'Ремонт двигателя': false,
		'Ремонт коробки передач': false,
		'Ремонт тормозной системы': false,
		'Шиномонтаж': false,
	})
	const f1 = key => {
		for (let el in active) {
			if (el === key) setActive({...active, [key]: !active[key]})
		}
	}

	const color = '#fff'
	const text = 'text-[#fff]'
	return (
		<>
			{
				data.map((el, idx) => {
					return (
						<div key={idx}>
							<div
								className='flex justify-start mt-4 mb-4 border-b border-[#9595956d] pb-3'
								onClick={() => f1(Object.keys(el)[0])}
								key={idx}
							>
								{active[Object.keys(el)[0]] ? <DownOutlined style={{ fontSize: '.8em', color }} className='mr-3' />
									:
									<RightOutlined style={{ fontSize: '.8em', color }} className='mr-3' />
								}
								<h3 className={`pr-2 mb-0 ${text} cursor-pointer`}>
									{Object.keys(el)}
								</h3>
							</div>
							{
								active[Object.keys(el)[0]] &&
								Object.values(el).map((elem, i) => {
									return (
										<Table
											columns={columns}
											key={i}
											pagination={false}
											expandable={{
												expandedRowRender: (record) => {
													return (
														<div style={{ display: 'flex' }}>
															<Image src={record.image} style={{ borderRadius: '2em' }} />
															<p style={{ margin: 0, paddingLeft: '2em' }}>
																{record.description}
															</p>
														</div>
													)
												},
											}}
											scroll={{
												x: 500,
											}}
											dataSource={elem}
										/>
									)
								})
							}
						</div>
					)
				})
			}
		</>
	)
}
export default TablePrice