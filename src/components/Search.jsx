'use client'
import {Description, Label, SearchField, Surface} from "@heroui/react";
const Search = ({ link }) => {
    const searchHandler = (e) => {
       console.log('hey');
       const value = e.target.value;
       console.log(value);
       
    }
    return (
        <div>
              <Surface className="flex w-full  flex-col gap-4 rounded-3xl p-3 border border-[#C3C6D7] ">
      <SearchField name="search" variant="secondary"  >
        <SearchField.Group className={'bg-[#f8f9ff] border border-[#C3C6D7] rounded-2xl'}>
          <SearchField.SearchIcon />
          <SearchField.Input onChange={searchHandler}  className="w-full " placeholder="Search..." />
          <SearchField.ClearButton />
        </SearchField.Group>
        
      </SearchField>
      </Surface>
        </div>
    );
};

export default Search;