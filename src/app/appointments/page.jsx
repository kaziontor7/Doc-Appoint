import DocCard from "@/components/DocCard";
import { getDoctors } from "@/data";
import {Description, Label, SearchField, Surface} from "@heroui/react";
const Appointments = async () => {
    const doctors= await getDoctors('http://localhost:5000/appoints')
    return (
        <div>
            <h2 className="title text-3xl">Find Your Specialist</h2>
            <p className="text text-lg">Search and book appointments with top medical professionals.</p>
            <div className="mt-6 mb-12">
                <Surface className="flex w-full  flex-col gap-4 rounded-3xl p-3 border border-[#C3C6D7] ">
      <SearchField name="search" variant="secondary" >
        <SearchField.Group className={'bg-[#f8f9ff] border border-[#C3C6D7] rounded-2xl'}>
          <SearchField.SearchIcon />
          <SearchField.Input className="w-full " placeholder="Search..." />
          <SearchField.ClearButton />
        </SearchField.Group>
        
      </SearchField>
      </Surface>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                {doctors.map(doctor => <DocCard key={doctor._id} doctor={doctor}></DocCard>)}
            </div>
        </div>
    );
};

export default Appointments;