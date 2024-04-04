
import moment from 'moment';
import logo from '../../../assets/logo.png'

const Header = () => {
   
    return (
        <div className='flex justify-center mt-4'>
            <div className='text-center space-y-2'>
                <img  src={logo} alt="" />
                <p>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM D, YYYY h:mm:ss a")}</p>
            </div>
        </div>
    );
};

export default Header;