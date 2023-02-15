import React from 'react'
import { Drawer } from 'antd'
import { FormTel } from '../form2/FormTel';
import { FormDate } from '../form2/FormDate';
import { MenuMobil } from '../header/mobilMenu/MenuMobil';

export const DrawerComp = ({ open, placement, setOpen, isActiveForm, title }) => {
	const onClose = () => {
		setOpen(false)
	}

	return (
		<Drawer
			title={title}
			placement={placement}
			onClose={onClose}
			open={open}
			key={placement}
		>
			{
				isActiveForm.tel && <FormTel />
			}
			{
				isActiveForm.date && <FormDate />
			}
			{
				isActiveForm.menu && <MenuMobil onClose={onClose} />
			}
		</Drawer>
	)
}
