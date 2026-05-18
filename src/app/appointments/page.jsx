import {Description, Label, SearchField, Surface} from "@heroui/react";
const Appointments = () => {
    return (
        <div>
            <h2 className="title text-3xl">Find Your Specialist</h2>
            <p className="text text-lg">Search and book appointments with top medical professionals.</p>
            <div>
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
        </div>
    );
};

export default Appointments;