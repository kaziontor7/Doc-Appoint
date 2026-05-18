import { Button } from "@heroui/react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaMoneyBills } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { TbCoinTaka } from "react-icons/tb";


const DocCard = ({ doctor }) => {
    return (
        <div className="p-6 bg-white rounded-4xl shadow">
            <div className="flex justify-between items-start border-b border-[#C3C6D7] pb-6">
                <div className="flex items-center gap-3">
                    <Image src={doctor.image} alt={doctor.name} height={64} width={64} className="rounded-full"></Image>
                    <div className="">
                        <p className="title text-lg">{doctor.name}</p>
                        <p className="primary">{doctor.specialty}</p>
                        <p className="text text-sm">{doctor.experience} of experience</p>
                    </div>

                </div>
                <p className="text flex items-center gap-0.5 pt-2.5"><FaStar className="text-[#F59E0B]" /> {doctor.rating.score}</p>
            </div>
            <div className="pt-6">
                <p className="text flex items-center gap-1"><FiMapPin /> {doctor.hospital}
                </p>
                <div className="flex items-center justify-between py-2">
                <p className="text flex items-center gap-1"><FaMoneyBills />
                    Consultation Fee
                </p>
                <p className="secondary font-semibold text-lg">৳{doctor.fee}</p>
                </div>
                <Button variant="outline" className={'primary border border-[#004AC6] rounded-2xl w-full bg-[#F8F9FF]'}>View Details</Button>
            </div>

        </div>
    );
};

export default DocCard;