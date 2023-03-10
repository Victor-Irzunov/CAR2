import React, { useState } from 'react'
import { Button } from 'antd'
// import { motion } from "framer-motion"
import { Link as LinkScroll } from 'react-scroll'
import { ShakeOutlined, CalendarOutlined } from '@ant-design/icons'
import { DrawerComp } from '../../drawerComp/DrawerComp'
// import { Link } from 'react-router-dom'

export const MenuMobil = ({ onClose }) => {
	const [open, setOpen] = useState(false)

	const [placement, setPlacement] = useState('')
	const [title, setTitle] = useState('')
	const [isActiveForm, setIsActiveForm] = useState({
		tel: false,
		date: false,
		menu: false,
	})

	const showDrawer = (position, title, str) => {
		setOpen(true)
		setPlacement(position)
		setTitle(title)
		switch (str) {
			case 'tel': setIsActiveForm(prev => ({ ...prev, tel: true, date: false, menu: false }))
				break
			case 'date': setIsActiveForm(prev => ({ ...prev, tel: false, date: true, menu: false }))
				break
		}
	}


	return (
		<div className='max-h-screen'>
			<nav className='text-center flex flex-col justify-between'>
				<ul className='h-[35vh] flex flex-col justify-between items-center text-lg text-[#ff001d] cursor-pointer'>
					<li>
						<LinkScroll to='main'
							smooth={true}
							offset={-100}
							duration={800}
							className="cursor-pointer"
							onClick={onClose}
						>
							Главная
						</LinkScroll>
					</li>
					<li>
						<LinkScroll to='price'
							smooth={true}
							offset={-100}
							duration={800}
							className="cursor-pointer"
							onClick={onClose}
						>
							Цены
						</LinkScroll>
					</li>
					<li>
						<LinkScroll to='galereya'
							smooth={true}
							offset={-100}
							duration={800}
							className="cursor-pointer"
							onClick={onClose}
						>
							{/* <Link to='/'> */}
								Галерея
							{/* </Link> */}
						</LinkScroll>
					</li>
					{/* <li>
						<Link to='/otzyvy'
							onClick={onClose}
						>
							Отзывы
						</Link>
					</li> */}
					<li>
						<LinkScroll to='vopros'
							smooth={true}
							offset={-100}
							duration={800}
							className="cursor-pointer"
							onClick={onClose}
						>
							Вопросы
						</LinkScroll>
					</li>

					<li>
						<LinkScroll to='contact'
							smooth={true}
							offset={-100}
							duration={800}
							className="cursor-pointer"
							onClick={onClose}
						>
							Контакты
						</LinkScroll>
					</li>
				</ul>


				<div className='w-full text-center'>
					<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A4d4460cb020f3511b05d617dbf8d39b517124c6896604700241f0ebbe4e12960&amp;source=constructor" width="330" height="330" frameborder="0"></iframe>
				</div>

				<div className='flex justify-between absolute bottom-3'>
					<Button type='primary' className='mr-2' onClick={() => showDrawer('top', 'Заказать звонок', 'tel')}>
						<ShakeOutlined /> Заказать звонок
					</Button>


					<Button type='primary' className='ml-2' onClick={() => showDrawer('right', 'Записаться на дату', 'date')}>
						<CalendarOutlined /> Записаться
					</Button>
				</div>
			</nav>
			<DrawerComp open={open} placement={placement} title={title} setOpen={setOpen} isActiveForm={isActiveForm} />
		</div>
	)
}
