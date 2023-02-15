import React from 'react'
import { Drawer, Divider, Badge } from 'antd'
import { useScreens } from '../../Constants/constants'
import ZapisatsyaForm from '../form/zapisatsyaForm/ZapisatsyaForm'



const DrawerWindow = ({ open, setOpen }) => {
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
				title="Запишитесь на ремонт" placement="right"
				onClose={onClose} open={open}
				size={screens.lg && 'large'}
				
			>
				<ZapisatsyaForm />
				<Divider />
				<Badge status="processing" text={<span className='text-slate-500'>Выберите число и время для ремонта, если на это время не будет свободных мест, администратор Вам перезвонит и предложит другое удобное для Вас время.</span>} />

			</Drawer>
		</>
	)
}

export default DrawerWindow