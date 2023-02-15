import React, { useState, useContext, useEffect } from 'react'
import {
	Row, Col, Button, Space, Badge, Tooltip,
	notification,
	FloatButton,
	message, Popconfirm,
} from 'antd'
import {
	PhoneOutlined, FormOutlined,
	UsergroupAddOutlined, SettingOutlined,
	InfoCircleOutlined, QuestionCircleOutlined
} from '@ant-design/icons'
import { useScreens } from '../../Constants/constants'
import DrawerWindow from '../../components/drawer/DrawerWindow'
import { Context } from '../../App'
import { Helmet } from "react-helmet"
import { ModalComp } from '../../components/modal/ModalComp'


function MainPage() {
	const { data } = useContext(Context)
	const screens = useScreens()
	const [active, setActive] = useState(1)
	const [open, setOpen] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [title, setTitle] = useState('')

	const showModal = (title) => {
		setIsModalOpen(true)
		setTitle(title)
	 };
  
	 const handleCancel = () => {
		setIsModalOpen(false)
	 };

	const scroll = () => {
		setTimeout(() => window.scrollBy({
			top: 600,
			left: 0,
			behavior: 'smooth',
		}), 150)
	}
	useEffect(() => {
		const link = window.location
		if (link.href === 'https://remont-avto.by/#price') {
			scroll()
		}
	}, [])


	const showDrawer = () => {
		setOpen(true)
	}
	const openNotification = (placement, message, description) => {
		notification.info({
			message: `${message}`,
			description:
				`${description}`,
			placement,
			duration: 15,
			icon: (
				<InfoCircleOutlined
					style={{
						color: 'green',
					}}
				/>
			),
		})
	}
	const toggleBtn = (num) => setActive(num)
	const confirm = () => message.info('Звонок на станцию')

	return (
		<>


			<section id='main' className='main-section border-b border-orange-600'>

				<FloatButton.Group
					shape="circle"
					style={{
						right: 24,
					}}
				>
					<Popconfirm
						placement="leftBottom"
						title='Остались вопросы? Позвоните нам и мы ответим.'
						onConfirm={confirm}
						okText={<a href='tel:8029000000'>Позвонить</a>}
						cancelText="Закрыть"
					>
						<FloatButton icon={<QuestionCircleOutlined />} />
					</Popconfirm>
					<FloatButton.BackTop />
				</FloatButton.Group>
				<div className={data ? 'main-block-mobile' : 'main-block'}>
					<div className='container pb-5'>
						{/* <div className='h-20'></div> */}
						<Row gutter={[10, 10]} className=''>
							<Col lg={12} md={24} sm={24} xs={24}
								className={`mt-16 ${screens.md ? 'text-left' : 'text-center'}`}
							>
								<h1 className={`text-[#fff] ${screens.xs ? 'text-[4em]' : 'text-[5em]'}`}>
									СТО в Минске<br />
								</h1>
								<Space className='mb-9' size={[15]}>
									<Button type="primary" size={screens.xs ? 'small' : 'large'} ghost={active === 1 ? false : true} onClick={() => toggleBtn(1)} shape="round">
										Телефон
									</Button>
									<Button type="primary" size={screens.xs ? 'small' : 'large'} ghost={active === 2 ? false : true} onClick={() => toggleBtn(2)} shape="round">
										Адрес
									</Button>
									<Button type="primary" size={screens.xs ? 'small' : 'large'} ghost={active === 3 ? false : true} onClick={() => toggleBtn(3)} shape="round">
										Режим работы
									</Button>
								</Space>
								{active === 1 &&
									<div className='flex flex-col text-lg'>
										<a href='tel:80290000000'
											className='mb-6 text-white text-xl hover:text-orange-600'
											onClick={() => window.gtag_report_conversion('tel:80290000000')}
										>
											<Tooltip title="A1">
												+375 29 000-00-00
											</Tooltip>
											<Button type="primary" shape="circle" size='large' className='ml-5' icon={<PhoneOutlined className='animate-pulse' />} />
										</a>


										<div className='text-center'>
											<p
												className='uppercase text-base text-orange-600 cursor-pointer'
												onClick={() => showModal('Задать вопрос')}
											>
												Задать вопрос
											</p>
										</div>
									</div>
								}
								{
									active === 2 &&
									<div className='text-white text-lg'>
										<p>г. Минск</p>
										<p><span className='font-thin text-sm'>микрорайон</span> Минск</p>
										<p>ул. Минская </p>
										<Button type='link' href='https://yandex.by/maps/29630/minsk-district/house/Zk4YcgVmSkQGQFtpfXR0dH9lYw==/?ll=27.426311%2C53.855367&z=16.81' className='text-orange-600' style={{ paddingLeft: '0' }} target='_blank'>Посмотреть на карте</Button>
									</div>
								}
								{
									active === 3 &&
									<div className=''>
										<Space direction="vertical" >
											<Badge status="error" style={{ color: '#f03226' }} text="Пн: выходной" />
											<Badge status="success" style={{ color: '#fff' }} text="Вт: 8:00-18:00" />
											<Badge status="success" style={{ color: '#fff' }} text="Ср: 8:00-18:00" />
											<Badge status="success" style={{ color: '#fff' }} text="Чт: 8:00-18:00" />
											<Badge status="success" style={{ color: '#fff' }} text="Пт: 8:00-18:00" />
											<Badge status="success" style={{ color: '#fff' }} text="Сб: 8:00-18:00" />
											<Badge status="success" style={{ color: '#fff' }} text="Вс: 8:00-18:00" />
										</Space>
									</div>
								}
								<div className=''>
									<Button
										type='primary'
										ghost
										shape='round'
										className='mt-6' icon={<FormOutlined />}
										onClick={showDrawer}
									>
										Записаться на ремонт
									</Button>
								</div>
							</Col>
							{
								!screens.xs &&
								<Col lg={12} md={24} sm={24} xs={24}>
									<div className='w-full h-full flex justify-center items-end mt-16'>
										<div
											className='bg-gradient-to-r from-orange-400 to-orange-600 w-full h-96 
									rounded-3xl opacity-80 relative
									overflow-hidden
									'
										>
											<span
												className='absolute top-[75%] 
									right-0 left-[85%] rotate-[270deg]
									text-5xl font-bold
									'>
												#автосервис
											</span>
											<div
												className='
										absolute t-[50%]
										bottom-[35%]
										left-5  font-bold'>
												<p className={`text-white ${screens.xs && 'text-3xl'}  ${screens.sm && 'text-4xl'} ${screens.xl && 'text-4xl'}`}>Опыт работы 10+ лет</p>
												<p className='text-white text-2xl'>Дружелюбный персонал</p>
												<p className='text-white text-xl'>Акции и скидки</p>
												<p className='text-white text-sm'>Гарантия</p>
											</div>
											<span className='absolute top-1 right-16 text-[#ffffff0d] text-[7vw]'>best</span>
											<span className='absolute bottom-1 left-8 font-bold text-[#ffffff0d] text-[12vw]'>best</span>
										</div>
									</div>
								</Col>
							}
						</Row>
						<div className={`${screens.xs ? 'mt-20' : 'mt-40'} flex justify-start ${screens.xs && 'pl-5'} ${screens.xs ? 'flex-col' : 'flex-wrap'}`}>

							<div
								onClick={() => openNotification('topRight', 'Приведи друга', 'Приводите к нам друзей и получайте скидку на ремонт вместе.')}
								className={`cursor-pointer flex items-center ${screens.md && 'mr-5'}`}
							>
								<Button
									type="primary" shape="round"
									icon={<UsergroupAddOutlined />}
									size={screens.xs ? 'small' : ''}
								/>
								<p className='text-white mt-3 ml-3 font-light'>
									Приведи друга<span className='text-[#fff]'> и получи...</span>
								</p>
							</div>
							<div
								onClick={() => openNotification('bottomRight', 'Диагностика авто будет бесплатная', 'Если  будут выполняться ремонтные работы по устранению неисправностей обнаруженных в ходе диагностики.')}
								className='cursor-pointer flex items-center'
							>
								<Button
									type="primary" shape="round"
									ghost
									icon={<SettingOutlined />}
									size={screens.xs ? 'small' : ''}
								/>
								<p className='text-white mt-3 ml-3 font-light'>
									Диагностика <span className='text-[#fff]'>бесплатно...</span>
								</p>
							</div>
						</div>
					</div>
					<DrawerWindow open={open} setOpen={setOpen} />
					<ModalComp isModalOpen={isModalOpen} title={title} handleCancel={handleCancel} question={true} />
				</div>
			</section>
		</>
	)
}

export default MainPage

