import React,{useContext} from 'react'
import { Row, Col, Image } from 'antd'
import { LineOutlined } from '@ant-design/icons'
import foto1 from '../images/foto-service/service-1.webp'
import foto2 from '../images/foto-service/service-2.webp'
import foto3 from '../images/foto-service/service-3.webp'
import foto4 from '../images/foto-service/service-4.webp'
import {Context} from '../App'
function FotoCarService() {
	const { data } = useContext(Context)
	const color = '#f97316'
	return (
		<section id='galereya' className='border-b border-orange-600'>
			<div className={data ? 'fon4-mobile':'fon4'}>
				<div className='h-20'></div>
					<div className='container'>
						<div className='text-center'>
							<h2 className='text-white text-3xl'>
								Фото нашего автосервиса
							</h2>
							<LineOutlined style={{ color, fontSize: '3em' }} />
						</div>
						<div className='mt-12'>
							<Row gutter={[20, 20]}>
								<Col lg={12}>
									<Image src={foto1} className='rounded-3xl' />
								</Col>
								<Col lg={12}>
									<Image src={foto2} className='rounded-3xl' />
								</Col>
								<Col lg={12}>
									<Image src={foto3} className='rounded-3xl' />
								</Col>
								<Col lg={12}>
									<Image src={foto4} className='rounded-3xl' />
								</Col>
							</Row>
						</div>
					</div>
					<div className='h-20'></div>
			</div>
		</section>
	)
}
export default FotoCarService