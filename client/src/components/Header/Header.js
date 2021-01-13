import { PageHeader, Image } from 'antd';
import logo from '../../assets/GoThereLogoNoBackground.png';

const Header = () => {
	return (
		<PageHeader className="site-page-header" style={{ height: '100px', width: '100px' }}>
			<img
				src={logo}
				style={{
					// width: '36%',

					height: '100px',
					position: 'relative',
					// position: 'absolute',
				}}
			/>
		</PageHeader>
	);
};

export default Header;
