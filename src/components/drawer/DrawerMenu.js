import React from 'react'
import { Drawer, Divider, Tooltip, Button, Image } from 'antd'
import { useScreens } from '../../Constants/constants'
import ListMenu from '../listMenu/ListMenu'
import {
	InstagramOutlined,
	WhatsAppOutlined,
	YoutubeOutlined,
	CoffeeOutlined,
	WifiOutlined,
	CommentOutlined,
} from '@ant-design/icons'
import map from '../../images/map.webp'



const DrawerMenu = ({ open, setOpen }) => {
	const screens = useScreens()
	// const [open, setOpen] = useState(false);
	// const showDrawer = () => {
	// 	setOpen(true);
	// };
	const onClose = () => {
		setOpen(false)
	}

	return (
		<>
			<Drawer
				title="Меню" placement="right"
				onClose={onClose} open={open}
				drawerStyle={{ background: '#038fd4' }}
			>
				<ListMenu onClose={onClose} />
				<Divider />
				<Image src={map} />
				<div className='w-full mt-5'>
					<div className='flex justify-evenly'>
						<Tooltip title="кофе & чай">
							<Button
								shape="circle"
								icon={<CoffeeOutlined />}
								style={{ background: 'transparent', border: '1px solid #222' }}
							/>
						</Tooltip>
						<Tooltip title="бесплатный wifi">
							<Button
								shape="circle"
								style={{ background: 'transparent', border: '1px solid #222' }}
								icon={<WifiOutlined />}
							/>
						</Tooltip>
						<Tooltip title="общение с мастером">
							<Button
								shape="circle"
								icon={<CommentOutlined />}
								style={{ background: 'transparent', border: '1px solid #222' }}
							/>
						</Tooltip>
					</div>
					<Divider />
					{/* <div className='pb-6 pl-8 pr-8 flex justify-around'>
						<InstagramOutlined style={{ fontSize: '1.7em' }} />
						<WhatsAppOutlined style={{ fontSize: '1.7em' }} />
						<YoutubeOutlined style={{ fontSize: '1.7em' }} />
					</div> */}
					<div className='flex justify-evenly' >
						<span className=''>Телефон: +375 29 701-22-51</span>
					</div>
				</div>
			</Drawer>
		</>
	)
}

export default DrawerMenu

