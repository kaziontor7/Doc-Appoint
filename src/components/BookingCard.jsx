import { Button } from "@heroui/react";
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { IoCallOutline, IoPersonOutline } from "react-icons/io5";
// "patientName": "Kazi Pazi",
//     "phone": "+8801647573000",
//     "doctorName": "Dr. Tanvir Hasan",
//     "doctorImage": "https://images.unsplash.com/photo-1537368910025-700350fe46c7",
//     "date": "2026-05-29",
//     "session": "03:00 PM - 06:00 PM",
//     "availability": ["08:00 AM - 11:00 AM", "03:00 PM - 06:00 PM"]
const BookingCard = ({ booking }) => {
    return (
        <div className="bg-white rounded-4xl p-6 shadow">
            <div className="flex items-center gap-3">
                <Image src={booking.doctorImage} alt={booking.doctorName} height={64} width={64} className="rounded-full"></Image>
                <div className="">
                    <p className="title text-lg">{booking.doctorName}</p>
                    <p className="primary">cardiology</p>
                </div>
            </div>
            <div className="bg-[#f8f9ff] rounded-2xl p-3 border border-[#C3C6D7]/40 mt-6">
                <div className="grid grid-cols-2 items-center   border-b border-[#C3C6D7]/40 pb-3">
                    <div>
                        <p className="flex items-center gap-1 text-xs font-semibold text"><CiCalendar className="mb-0.5" />
                            Date</p>
                        <p className="text-sm secondary font-medium">{new Date(booking.date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                        })}</p>
                    </div>
                    <div>
                        <p className="flex items-center gap-1 text-xs font-semibold text "><IoMdTime
                            className="mb-0.5" />
                            Session</p>
                        <p className="text-sm secondary font-medium">{booking.session}</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 items-center  pt-3">
                    <div>
                        <p className="flex items-center gap-1 text-xs font-semibold text"><IoPersonOutline
                            className="mb-0.5" />
                            Patient</p>
                        <p className="text-sm secondary font-medium">{booking.patientName}</p>
                    </div>
                    <div className="">
                        <p className="flex items-center gap-1 text-xs font-semibold text"><IoCallOutline

                            className="" />
                            Phone</p>
                        <p className="text-sm secondary font-medium">{booking.phone}</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-end gap-4 mt-6">
                <Button variant="outline" className={'text-[#BA1A1A] border border-[#BA1A1A]/30 font-medium text-sm rounded-2xl'}>Delete</Button>
                <Button variant="secondary" className={'primary bg-[#DBE1FF]/50 font-medium text-sm rounded-2xl'}>Update</Button>
            </div>
        </div>
    );
};

export default BookingCard;