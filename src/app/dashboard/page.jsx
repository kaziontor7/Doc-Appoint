import BookingCard from "@/components/BookingCard";
import { Tabs } from "@heroui/react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdPerson } from "react-icons/md";

const bookings = [
    {
        "patientName": "Kazi Pazi",
        "phone": "+8801647573000",
        "doctorName": "Dr. Tanvir Hasan",
        "doctorImage": "https://images.unsplash.com/photo-1537368910025-700350fe46c7",
        "date": "2026-05-29",
        "session": "03:00 PM - 06:00 PM",
        "availability": ["08:00 AM - 11:00 AM", "03:00 PM - 06:00 PM"]
    },
    {
        "patientName": "Sarah Ahmed",
        "phone": "+8801712345678",
        "doctorName": "Dr. Fahmida Rahman",
        "doctorImage": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
        "date": "2026-05-30",
        "session": "09:00 AM - 12:00 PM",
        "availability": ["09:00 AM - 12:00 PM", "02:00 PM - 05:00 PM"]
    },
    {
        "patientName": "Arif Chowdhury",
        "phone": "+8801987654321",
        "doctorName": "Dr. Sajid Islam",
        "doctorImage": "https://images.unsplash.com/photo-1622253692010-333f2da6031d",
        "date": "2026-06-01",
        "session": "06:00 PM - 09:00 PM",
        "availability": ["10:00 AM - 01:00 PM", "06:00 PM - 09:00 PM"]
    }
]

const DashboardPage = () => {
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
                            {bookings.map(booking => <BookingCard key={booking.patientName} booking={booking}></BookingCard>)}
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel className="px-4" id="profile">
                        <h3 className="title text-3xl">My Profile</h3>
                        <p className="text">Manage your profile information.</p>
                    </Tabs.Panel>

                </div>
            </Tabs>
        </div>
    );
};

export default DashboardPage;