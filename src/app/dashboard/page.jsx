import BookingCard from "@/components/BookingCard";
import UpdateProfile from "@/components/UpdateProfile";
import { auth } from "@/lib/auth";
import { Tabs } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdPerson } from "react-icons/md";



const DashboardPage =async () => {
    const session = await auth.api.getSession({
    headers: await headers() 
})
  const user = session?.user
    const res = await fetch(`http://localhost:5000/bookings/${user?.id}`);
    const bookings = await res.json();
    
    return (
        <div>
            <Tabs
                className="w-full  flex flex-col md:flex-row gap-6 "
            >
                <Tabs.ListContainer className="w-full md:w-1/4 ">
                    <Tabs.List
                        aria-label="Options"
                        className=" flex flex-row md:flex-col w-full bg-white px-2 rounded-2xl py-2 shadow"
                    >
                        <Tabs.Tab className="secondary font-medium text-sm flex items-center justify-start gap-1 " id="bookings"><FaRegCalendarAlt className="mb-0.5" />
                            My Bookings<Tabs.Indicator className="bg-[#DBE1FF] text-[#00174B]" /></Tabs.Tab>
                        <Tabs.Tab className="secondary font-medium text-sm flex items-center justify-start gap-1" id="profile"><MdPerson />
                            My Profile<Tabs.Indicator className="bg-[#DBE1FF] text-[#00174B]" /></Tabs.Tab>
                    </Tabs.List>
                    <div className="secondary text-sm space-y-1 bg-[#eff4ff] rounded-4xl mt-3 p-6 shadow max-md:hidden">
                        <p>Need help?</p>
                        <p>Contact our support team for
                            assistance with your bookings.</p>
                         <p className="primary">support@docappoint.com</p>
                    </div>
                </Tabs.ListContainer>

                <div className="">
                    <Tabs.Panel className="px-4" id="bookings">
                        <h3 className="title text-3xl">My Bookings</h3>
                        <p className="text">Manage your upcoming and past medical appointments.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                            {bookings.map((booking,i) => <BookingCard key={i} booking={booking}></BookingCard>)}
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel className="px-4" id="profile">
                        <h3 className="title text-3xl">My Profile</h3>
                        <p className="text">Manage your profile information.</p>
                        <div className="bg-white p-6 rounded-4xl shadow mt-2  gap-6 max-w-sm">
                         <div>
                           <Image src={user?.image} alt={user?.name} height={64} width={64} className="rounded-full mx-auto mb-4 border-2 border-[#00174B]"></Image>
                         </div>
                         <  div className="mt-4">
                            <div className=" text-sm font-medium secondary border-t border-[#C3C6D7]/40 pt-4 space-y-2">
                            <div className="flex items-center gap-7 overflow-hidden  justify-between">
                            <p>Name : <span className="text">{user?.name}</span></p>
                            <p className="">Patient ID : <span className="text">{user?.id.slice(0, 8)}</span></p>
                            </div>
                            <p>Email : <span className="text">{user?.email}</span></p>
                            </div>
                         </div>
                         <div className="flex justify-end">
                            <UpdateProfile user={user}></UpdateProfile>
                         </div>
                        </div>
                    </Tabs.Panel>

                </div>
            </Tabs>
        </div>
    );
};

export default DashboardPage;