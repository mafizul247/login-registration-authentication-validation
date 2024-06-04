import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header />
            <div className='mx-5' style={{ minHeight: '90vh' }}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;