import PropTypes from 'prop-types';
import MyWalletIcon from '../assets/images/my-wallet.png';

export const Navbar = ({ savings }) => {
  return ( 
    <nav className="bg-white border-gray-300 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center">
            <img src={ MyWalletIcon } className="mr-3 h-6 sm:h-9" alt="My Wallet Icon" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">My Wallet</span>
        </div>

        <div className="flex items-center">
            <span className="mr-6 text-lg font-medium text-green-500 dark:text-white">{ `$${ savings }`}</span>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  savings: PropTypes.number.isRequired
}