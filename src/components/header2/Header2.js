import React, { useState, useRef, useCallback, useEffect } from 'react'
import { Badge, Popover } from 'antd'
import { NotificationOutlined, MenuFoldOutlined } from '@ant-design/icons'
import logo from '../../images/logo.webp'
import DrawerMenu from '../drawer/DrawerMenu'
import { useScreens } from '../../Constants/constants'
const text = <span className='text-xl text-orange-500'>Не пропустите</span>
const content = (
	<div>
		<p className='text-lg'>Только до конца года продлится акция</p>
		<p>на ремонт подвески скидка <span className='text-lg text-orange-500 font-bold'>10%</span>
		</p>
	</div>
)
function Header() {
	const [open, setOpen] = useState(false)
	const screens = useScreens()
	const el = useRef(null)
	const showDrawer = () => setOpen(true)
	const handleScrollMain = useCallback(() => {
		el.current.style.transition = '1.5s'
		if (window.pageYOffset > 100) el.current.style.opacity = '0'
		if (window.pageYOffset < 100) el.current.style.opacity = '1'
	}, [])
	useEffect(() => {
		window.addEventListener("scroll", handleScrollMain)
		return () => window.removeEventListener("scroll", handleScrollMain)
	}, [handleScrollMain])
	return (
		<header
			className="fixed top-0
			left-0 right-0
			z-50 pt-1 pb-1
			bg-transparent	
			"
			style={{ boxShadow: '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)' }}
		>
			<div className='container'>
				<div className='flex justify-between align-middle pl-2 pr-2'>
					<div className='mt-3'>
						<Popover placement="rightTop" title={text} content={content} trigger="click">

							<Badge dot offset={[-1, 4]}>
								<NotificationOutlined className={`text-2xl hover-icon`}
								/>
							</Badge>
						</Popover>
					</div>
					<img src={logo} ref={el} className={`${screens.xs ? 'w-28' : 'w-40'}`} />
					<MenuFoldOutlined
						className={`text-3xl mt-3 hover-icon`}
						onClick={showDrawer}
					/>
				</div>
			</div>
			<DrawerMenu open={open} setOpen={setOpen} />
		</header>
	)
}
export default Header