import React, { useState } from 'react'
import { Button, Popover, Rate, Avatar, Image } from 'antd'
import { ExclamationCircleOutlined, LineOutlined, UserOutlined } from '@ant-design/icons'
import { FormOtzyvy } from '../form2/FormOtzyvy'
// import img1 from '../../images/portfolio/12.webp'


const content = (
	<div>
		<p>Отзыв будет опубликован только если это отзыв клиента нашего СТО и после проверки модератора.</p>
	</div>
)

export const OtzyvySection2 = () => {
	const [add, setAdd] = useState(false)



	return (
		<section className='py-12 w-full z-10 bg-white min-h-[60vh]' id='otzyvy'>
			<div className='container px-10'>
				<div className='text-center mb-12'>
					<h2 className='text-4xl text-orange-500 uppercase'>Наши<span className='text-black'> отзывы</span></h2>
					<LineOutlined style={{ color: '#f8862e', fontSize: '3rem' }} />
				</div>

				<div className=''>
					<div className='border-b pb-4'>
						<div className='flex'>
							<div className=''>
								<Avatar>
									Д
								</Avatar>
							</div>
							<div className='ml-3 w-1/2'>
								<p className='mb-0 text-lg'>Луцевич Денис</p>
								<p className='text-xs mb-1'>Audi A8</p>
								<p className='text-[10px] text-gray-400'>23.08.2019</p>
								<Rate allowHalf defaultValue={5} />

							</div>
							<div className='w-1/4'>
								<Image src='https://via.placeholder.com/150' className='rounded-sm' />
							</div>
						</div>
						<div className='pl-6 mt-2'>
							<p className='text-left text-sm mt-4'>
								Поломалась АКПП, эвакуатор приехал быстро, машина большая я всё переживал как будут тянуть, что-бы бампер не повредить. Видно что водитель опытный, сделал все безупречно и затянул и спустил.
							</p>
						</div>
						<div className='pl-10 mt-6'>
							<div className='flex'>
								<Avatar icon={<UserOutlined />} size='small' />
								<div className='ml-2'>
									<p className='text-sm mb-0'>Мария</p>
									<p className='text-[10px] text-gray-400'>администратор</p>
								</div>
							</div>
							<div className='pl-8'>
								<p className='text-xs text-gray-500 inline'>Спасибо за Ваш отзыв.</p>
							</div>
						</div>
					</div>


					<div className='border-b py-4'>
						<div className='flex'>
							<div className=''>
								<Avatar>
									А
								</Avatar>
							</div>
							<div className='ml-3 w-1/2'>
								<p className='mb-0 text-lg'>Лукашевич Александр</p>
								<p className='text-xs mb-1'>Hummer</p>
								<p className='text-[10px] text-gray-400'>11.04.2020</p>
								<Rate allowHalf defaultValue={4.5} />

							</div>
							<div className='w-1/4'>
								<Image src='https://via.placeholder.com/150' className='rounded-sm' />
							</div>
						</div>
						<div className='pl-6 mt-2'>
							<p className='text-left text-sm mt-4'>
								Что-то в двигателе застучало, остановился на светофоре и всё. Очень не приятно поломаться на перекрестке в час пик. Позвонил по телефону срочной эвакуации, машин свободных не было, но ребята решили вопрос и машина приехала через 10 минут. Огромное спасибо.
							</p>

						</div>
						<div className='pl-10 mt-6'>
							<div className='flex'>
								<Avatar icon={<UserOutlined />} size='small' />
								<div className='ml-2'>
									<p className='text-sm mb-0'>Мария</p>
									<p className='text-[10px] text-gray-400'>администратор</p>
								</div>
							</div>
							<div className='pl-8'>
								<p className='text-xs text-gray-500 inline'>Спасибо за отзыв. Мы делали свою работу.</p>
							</div>
						</div>
					</div>


					<div className='border-b py-4'>
						<div className='flex'>
							<div className=''>
								<Avatar>
									C
								</Avatar>
							</div>
							<div className='ml-3 w-1/2'>
								<p className='mb-0 text-lg'>Бакун Сергей</p>
								<p className='text-xs mb-1'>BMW E39</p>
								<p className='text-[10px] text-gray-400'>10.02.2021</p>
								<Rate allowHalf defaultValue={5} />

							</div>
							<div className='w-1/4'>
								<Image src='https://via.placeholder.com/150' className='rounded-sm' />
							</div>
						</div>
						<div className='pl-6 mt-2'>
							<p className='text-left text-sm mt-4'>
								Какой-то кошмар, вроде зимняя резина, чуть-чуть руля на скорости крутонул, раскрутило на встречку, чудом остался жив. Приехали быстро, вытянули, ничего не повредили, правда повозиться пришлось я сел и уже тихонечко поехал дальше. Мужики выручили, я вам очень благодарен. Спасибо.
							</p>

						</div>
						<div className='pl-10 mt-6'>
							<div className='flex'>
								<Avatar icon={<UserOutlined />} size='small' />
								<div className='ml-2'>
									<p className='text-sm mb-0'>Александра</p>
									<p className='text-[10px] text-gray-400'>администратор</p>
								</div>
							</div>
							<div className='pl-8'>
								<p className='text-xs text-gray-500 inline'>Спасибо за тёплые слова. Приятных Вам мгновений за рулём.</p>
							</div>
						</div>
					</div>

					<div className='border-b py-4'>
						<div className='flex'>
							<div className=''>
								<Avatar>
									А
								</Avatar>
							</div>
							<div className='ml-3 w-1/2'>
								<p className='mb-0 text-lg'>Кравчинко Артём</p>
								<p className='text-xs mb-1'>Mercedes Sprinter</p>
								<p className='text-[10px] text-gray-400'>02.09.2021</p>
								<Rate allowHalf defaultValue={5} />

							</div>
							<div className='w-1/4'>
								<Image src='https://via.placeholder.com/150' className='rounded-sm' />
							</div>
						</div>
						<div className='pl-6 mt-2'>
							<p className='text-left text-sm mt-4'>
								Заглох мой спринтер под Москвой. Звонил по московским эвакуаторам, цены космос, не знал что делать. Друг подсказал этих ребят, цена в три раза дешевле чем в Москве. Приехали, забрали, по дороге пообщались, Сергей очень приятный собеседник. Хороший сервис, приятные цены. Рекомендую.
							</p>

						</div>
						<div className='pl-10 mt-6'>
							<div className='flex'>
								<Avatar icon={<UserOutlined />} size='small' />
								<div className='ml-2'>
									<p className='text-sm mb-0'>Александра</p>
									<p className='text-[10px] text-gray-400'>администратор</p>
								</div>
							</div>
							<div className='pl-8'>
								<p className='text-xs text-gray-500 inline'>Спасибо за рекомендацию и отзыв. Безопасных Вам дорог.</p>
							</div>
						</div>
					</div>


					<div className='border-b py-4'>
						<div className='flex'>
							<div className=''>
								<Avatar>
									М
								</Avatar>
							</div>
							<div className='ml-3 w-1/2'>
								<p className='mb-0 text-lg'>Ходосевич Марина</p>
								<p className='text-xs mb-1'>Mercedes</p>
								<p className='text-[10px] text-gray-400'>22.07.2022</p>
								<Rate allowHalf defaultValue={4.7} />

							</div>
							<div className='w-1/4'>
								<Image src='https://via.placeholder.com/150' className='rounded-sm' />
							</div>
						</div>
						<div className='pl-6 mt-2'>
							<p className='text-left text-sm mt-4'>
								Подхожу к машине, а она на правой стороне лежит на дороге, впритык к бордюру. Позже оказалось лопнула пружина, пробила колесо, кошмар. Одним эвакуаторщикам позвонила, объяснила ситуацию, сказали что нет какой-то тележки, может связываться не захотели, потому что я девушка и не умею объяснять, не знаю. Потом нашла этот эвакуатор, приехал он через 20 минут, сделал всё очень быстро. Круто. Приятно иметь дело с профессионалами.
							</p>

						</div>
						<div className='pl-10 mt-6'>
							<div className='flex'>
								<Avatar icon={<UserOutlined />} size='small' />
								<div className='ml-2'>
									<p className='text-sm mb-0'>Александра</p>
									<p className='text-[10px] text-gray-400'>администратор</p>
								</div>
							</div>
							<div className='pl-8'>
								<p className='text-xs text-gray-500 inline'>Спасибо за потраченное время на написание этого отзыва. Хороших дорог.</p>
							</div>
						</div>
					</div>
				</div>

				<div className='mt-14'>
					<div
						style={{
							marginBottom: 16,
						}}
						className='flex items-center justify-end'
					>

						<Popover content={content} title={<div className='text-center'><ExclamationCircleOutlined className='text-2xl text-orange-500 ml-3' /></div>} trigger="click">
							<ExclamationCircleOutlined className='text-xl mr-5 text-orange-400' />
						</Popover>
						<Button onClick={() => setAdd(true)}>Добавить отзыв</Button>
					</div>
				</div>

				{
					add && <FormOtzyvy setAdd={setAdd} />
				}
			</div>
		</section>
	)
}
