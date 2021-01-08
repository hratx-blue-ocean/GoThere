import { PageHeader, Image } from 'antd';
import logo from '../../assets/GoThereLogoinBlue.png';

const Header = () => {
	return (
		<PageHeader className="site-page-header" title="GoThere">
			<img
				src={logo}
				style={{ width: '30%', height: '30%', position: 'relative' }}
			/>
		</PageHeader>
	);
};

export default Header;
