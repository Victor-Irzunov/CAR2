import { Button } from 'antd'
import React, { useState, useContext } from 'react'
import { DrawerComp } from '../drawerComp/DrawerComp'
import { Context } from '../../App'


export const FooterSection = () => {
	const [open, setOpen] = useState(false)
	const { data } = useContext(Context)
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
		<section className=' w-full z-10 relative' id='contact'>
			<div className={data ? 'fon2-mobile' : 'fon2'}>
				<div className='container text-center pt-7 pb-2'>
					<div className=''>
						<h2 className='text-xl text-white uppercase tracking-wider'>
							Качественное<span className='text-orange-500'> СТО</span>  в Минске
						</h2>
					</div>
					<div className=''>
						<p className='text-white font-light text-sm'>
							Предлагаем профессональную диагностику и качественный ремонт Вашего автомобиля.</p>
					</div>

					<h3 className='text-white  font-light uppercase'>Записаться на ремонт</h3>

					<div className='text-orange-500 mb-6 mt-5'>
						<a href='tel:80291466601' className='text-4xl'>+375 29 146-66-01</a>
						{/* <p className=''>
						+375 29 278-08-78
					</p> */}
					</div>

					<div className='text-white'>
						<p className='text-xs uppercase'>
							запишитесь заранее на определёное время и получите скидку<span className='text-orange-500 text-sm'> 5%</span> на ремонт Вашего автомобиля.
						</p>
						<Button
							type='primary'
							className='uppercase'
							onClick={() => showDrawer('right', 'Записаться на дату', 'date')}
						>
							Записаться
						</Button>
					</div>

					<div className="
    w-full 
    flex
    justify-center
    items-center 
    md:flex-row
    flex-col 
    sm:pt-4 
    xx:pt-1
    border-t-[1px]
    border-t-[#3F3E45]
	 mt-10
    ">
						<p className="
      font-poppins
      font-normal
      text-center
      sm:text-[14px]
      xy:text-[10px]
      text-white
    text-gray-400/50
		mb-0 leading-3 pt-1
      ">
							Copyright Ⓒ 2018-2023. Created & Designed By
							<a href="https://vi-tech.by" className="text-cyan-500" target="_blank"> VI:TECH</a>
							. &nbsp; Все права защищены. Информация на сайте не является публичной офертой.
						</p>
					</div>
				</div>
			</div>
			<DrawerComp open={open} placement={placement} title={title} setOpen={setOpen} isActiveForm={isActiveForm} />
		</section>
	)
}
