import React, { useState } from 'react'
import { Image, Popover, Affix,Badge } from 'antd'
import logo from '../../../images/logo.webp'
import telegram from '../../../images/social-icon/telegram.svg'
import viber from '../../../images/social-icon/viber.svg'
import whatsapp from '../../../images/social-icon/WhatsApp.svg'
import { ClockCircleOutlined, PhoneOutlined, ShakeOutlined, } from '@ant-design/icons'
import { useScreens } from '../../../Constants/constants'
import { DrawerComp } from '../../drawerComp/DrawerComp'




export const HeaderInfo = ({ setIsVisible }) => {
	const screens = useScreens()
	const [open, setOpen] = useState(false)

	const showDrawer = () => {
		setOpen(true)
	}
	return (
		<>
			{
				screens.md
					?
					<div className='bg-white'>
						<div className='container flex justify-between items-center py-2'>
							
							<div className='flex justify-start items-center'>
								<Image src={logo} preview={false} width='150px' />
							</div>

							<div className='flex text-xl items-center text-[#f8862e]'>
								<ClockCircleOutlined />
								<span className='uppercase ml-2 font-semibold mr-0.5'>режим работы 8:00-20:00</span>
								<span>/</span>
								<span className='uppercase ml-0.5 font-semibold'>7</span>
							</div>


							<div className=''>
								{/* <div className='flex text-lg'>
									<PhoneOutlined className='rotate-90 mr-3 text-2xl text-[#fb923c]' />
									<div className='flex items-end'>
										<a href='tel:80299441276' className='text-2xl text-gray-600'>+375 29 944-12-76 </a>
										<span className='ml-1.5 font-extralight text-[#fb923c]'>велком</span>
									</div>
								</div> */}
								<div className='flex text-lg text-[#f8862e]'>
									<PhoneOutlined className='rotate-90 mr-3 text-2xl text-[#fb923c]' />
									<div className='flex items-end'>
										<a href='tel:80291466601' className='text-2xl'>+375 29 146-66-01</a>
										<span className='ml-1.5 font-extralight text-[#fb923c]'>A1</span>
									</div>
								</div>
							</div>

							<div className='flex flex-col items-center'>
								<p className='text-sm text-[#f8862e] mb-1'>Напишите нам</p>
								<div>
									<a fref='https://t.me/@sergey_avtohelp'><Image src={telegram} style={{ width: '30px' }} /></a>
									<a fref='http://wa.me/375292780878?text=нужен%20эвакуатор%20'><Image src={whatsapp} style={{ width: '30px', marginLeft: '8px' }} /></a>
									<a fref='viber://add?number=375292780878'><Image src={viber} style={{ width: '30px', marginLeft: '8px' }} /></a>
								</div>
							</div>
						</div>
					</div>
					:
					<div className='flex flex-col justify-between items-center pt-20 pb-1 relative z-10 bg-white'>
						<div className='flex text-lg items-center text-[#f8862e]'>
							<ClockCircleOutlined />
							<span className='uppercase ml-2 font-semibold mr-0.5'>8:00-20:00</span>
							<span>/</span>
							<span className='uppercase ml-0.5 font-semibold'>7</span>
						</div>
						<div className='mt-2 mb-3'>
							<div className='text-lg text-orange-500'>
								<div className='flex items-end pl-7'>
									<a href='tel:80291466601' className='text-2xl'>+375 29 000-00-00</a>
									<span className='ml-1 font-extralight text-[15px] text-[#fb923c]'>A1</span>
								</div>
							</div>
						</div>

						<div className='flex flex-col items-center mb-2'>
							<p className='text-sm text-[#f8862e] mb-3 uppercase cursor-pointer' onClick={() => showDrawer('top', 'Заказать звонок')}><ShakeOutlined /> Заказать звонок</p>
							<div>
								<a fref='https://t.me/@'><Image src={telegram} preview={false} style={{ width: '30px' }} /></a>
								<a fref='http://wa.me/375290000000?text=нужен%20ремонт%20'><Image src={whatsapp} preview={false} style={{ width: '30px', marginLeft: '1.5em' }} /></a>
								<a fref='viber://add?number=375290000000'><Image src={viber} preview={false} style={{ width: '30px', marginLeft: '1.5em' }} /></a>
							</div>
						</div>
						{/* <Button type='primary'>
							<a href='tel:80291466601'>
								<PhoneOutlined className='rotate-90 animate-pulse' /><span className='uppercase'> Заказать звонок</span>
							</a>
						</Button> */}

						<Affix offsetTop={30} onChange={() => setIsVisible(i => !i)}><div></div></Affix>
					</div>
			}
			<DrawerComp open={open} placement={'top'} title={'Заказать звонок'} setOpen={setOpen} isActiveForm={{ tel: true }} />
		</>
	)
}
