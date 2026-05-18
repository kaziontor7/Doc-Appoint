import { Button } from "@heroui/react";
import Link from "next/link";

const TopRated = () => {
    return (
        <div>
            <div className="flex items-end justify-between">
                <div>
            <h1 className="title text-3xl">Top Rated Doctors</h1>
            <p className="text">Trusted specialists ready to assist you.</p>
                </div>
                <Link href={'/appointments'}>
             <Button variant="ghost" className={'primary font-medium text-sm'}>View all doctors</Button>
                </Link>
            </div>

        </div>
    );
};

export default TopRated;