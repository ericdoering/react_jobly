import React, { useState, useEffect } from "react"
import {v4 as uuid} from "uuid";
import JoblyApi from "./api/api";
import { useHistory } from "react-router-dom";


function SearchBar() {
      const history = useHistory()
      const [searchItem, setSearch] = useState("");
      const [isLoading, setIsLoading] = useState(true);
      const [setCompanies] = useState([]);


    
      const handleChangeSearchItem = evt => {
        setSearch(evt.target.value);
      };

      const handleSubmit = (evt) => {
        evt.preventDefault();
        async function Search() {
   
          const companyRes = await JoblyApi.getCompany(searchItem);
          console.log("TESTING:", companyRes)
          setCompanies(companyRes);
          if(companyRes) {
            history.push('/companies')
          }
        }
        Search()
    };
    
      return (
        <div>
            <form onSubmit={handleSubmit}>
                    <label htmlFor="searchItem">Search:</label>
                        <input
                        id="searchItem"
                        name="searchItem"
                        type="text"
                        placeholder="Search..."
                        onChange={handleChangeSearchItem}
                        value={searchItem}
                        />
                <button>Search</button>
            </form>
        </div>
      )
}

export default SearchBar;