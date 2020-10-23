import React from 'react'

//import image 
import ProfilePicture from 'assets/images/profile.png'
import { ReactComponent as PitoLogoSmall } from 'assets/images/pito-small.svg'
import { ReactComponent as DashboardIcon } from 'assets/images/dashboard-icon.svg'
import { ReactComponent as ProfileIcon } from 'assets/images/profile-icon.svg'
import { ReactComponent as NotificationIcon } from 'assets/images/notif-icon.svg'
import { ReactComponent as TicketIcon } from 'assets/images/ticketsup-icon.svg'
import { ReactComponent as LogoutIcon } from 'assets/images/logout-icon.svg'
import { ReactComponent as Hamburger } from 'assets/images/hamburger.svg'

//import components
import ListMenu from './listMenu/index'

//Import toastify notify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SideNavbarMerchant = ({ history }) => {
    const classNameSVG = "icon mx-auto"
    const [token] = React.useState(localStorage.getItem('PITO:token'))

    function logout() {
        if (token) {
            toast.success('Berhasil Logout')
            setTimeout(() => {
                localStorage.removeItem('PITO:token')
                window.location.reload();
            }, 3000);
        }
    }

    return (
        <>
            <ToastContainer position="top-right" />
            <div className="w-full flex justify-between md:hidden bg-gray-800 items-center">
                <div className="px-4 py-3">
                    <PitoLogoSmall />
                </div>
                <div className="mb-navbar flex items-center px-4 py-3">
                    <h5 className="text-white text-sm text-right px-2">Hello, <br /><span className="font-medium text-red-600 text-base">Trumps</span></h5>
                    <img src={ProfilePicture} className="px-2" alt="" />
                    <Hamburger />
                </div>

            </div>
            <div className="sidebar hidden md:block">
                <div className="w-full py-4">
                    <button className="px-4 py-4 md:hidden focus:outline-none float-right">
                        <svg fill="#FFFFFF" viewBox="0 0 20 20" className="w-6 h-6">
                            <path x-show="open" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                        </svg>
                    </button>
                </div>
                <div className="py-10 w-full">
                    <PitoLogoSmall className="mx-auto" />
                    <div className="profile pt-6 text-center">
                        <img src={ProfilePicture} className="mx-auto" alt="" />
                        <h5 className="text-white mt-4 text-sm">Hello, <br /><span className="font-medium text-red-600 text-base">Trumps</span></h5>
                    </div>
                    <section className="mt-2">
                        <ListMenu linkTo="/merchant/dashboard">
                            <DashboardIcon className={classNameSVG} />
                        </ListMenu>
                        <ListMenu linkTo="/merchant/profile">
                            <ProfileIcon className={classNameSVG} />
                        </ListMenu>
                        <ListMenu linkTo="/merchant/notification">
                            <NotificationIcon className={classNameSVG} />
                        </ListMenu>
                        <ListMenu linkTo="/merchant/support">
                            <TicketIcon className={classNameSVG} />
                        </ListMenu>
                        <ListMenu button="button" logout={logout}>
                            <LogoutIcon className={classNameSVG} />
                        </ListMenu>
                    </section>
                </div>
            </div>
        </>
    )
}

export default SideNavbarMerchant;
