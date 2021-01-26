import { PageHeader } from 'antd';
import logo from '../../assets/GoThereLogoNoBackground.png';

const Header = () => {
    return (
        <PageHeader
            className="site-page-header"
            style={{
                height: '100px',
                width: '800px'
            }}
        >
            <img
                alt='logo'
                src={logo}
                style={{
                    height: '75px',
                    position: 'relative',
                    paddingBottom: '1em'
                }}
            />
            <p className="tagline">All-in-one travel application</p>
        </PageHeader>
    );
};

export default Header;
