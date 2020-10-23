import React from 'react'
import SideNavbarMerchant from 'components/SideNavbarMerchant'
import Notification from 'components/notification'

const Notif = () => {
    return (
        <>
            <section className="flex flex-col md:flex-row">
                <SideNavbarMerchant />
                <div className="py-10 md:py-20 shadow-2xl w-full md:w-4/5 mx-auto">
                    <div className="flex justify-end md:px-20">
                        <h6 className="text-red-600 mx-4 font-bold md:text-lg border-b-2 border-red-600">Dismiss All</h6>
                        <h6 className="text-red-600 mx-4 font-bold md:ext-lg border-b-2 border-red-600">Marsk All as Read</h6>
                    </div>
                    <div className="mt-4">
                        <Notification />
                        <Notification />
                        <Notification />
                        <Notification />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Notif;