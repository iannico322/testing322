import React, { useEffect, useState, useMemo } from "react";

import useDebounce from "../../../../components/debounce/debounce";
import UserTableData from "../../../../components/table-data/userTableData";
import Input from "../../../../components/input/input";
import axios from "./../../../../lib/main_connection";
import { userData } from "../../../../SampleData/userDataSample";

import { useTable, useSortBy } from "react-table";
import Pagination from "@mui/material/Pagination";

const UserManagementPage = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Full Name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },

      {
        Header: "position",
        accessor: "position",
      },
      {
        Header: " ",
        accessor: "",
      },
    ],
    []
  );

  // this is the row
  const data = useMemo(() => userData, []);

  const [creating, setcreating] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("name");
  const query = useDebounce(search, 500);
  
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setSearch(search);
    localStorage.setItem('page',0)
 
  }, [query]);

  {
    console.table(userData);
  }

  function getUsers() {
    axios
      .get("users/", {
        headers: {
          Authorization: `Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDNhYTkwZTZkYjNkMTc0ZjYzZDRjMmIiLCJlbWFpbCI6Im1hcmtHYWplc0BnbWFpbC5jb20iLCJuYW1lIjoiTWFyayBHYWplIiwiaWF0IjoxNjgyNDIyODA1LCJleHAiOjE2ODI1MDkyMDV9.jC3yMKoFi7vL0kgBbQlfBgiioQ34NnHeQW_u_15g1yg`,
        },
      })
      .then((response) => {
        console.table(response.data);
        // SetusersData(response.data)
        console.table(userData);
      });
  }

  // useEffect(() => {
  //   getUsers()
  // }, []);

  // this is the Table component
  function Table({ columns, data }) {
    const [currentPage, setCurrentPage] = useState(0);

   
    let dataPerPage = 8;  //number of data shows in table
    let startIndex = currentPage * dataPerPage;
    let endIndex = startIndex + dataPerPage;
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable({ columns, data }, useSortBy);
  
    // Get the first items max of 10, change the 10 to make it more than that.
    const firstPageRows = rows.slice(startIndex, endIndex);

    // Do not change anything, coz i dont understand why this works.
    return (
      <>
        <table
          className="w-full mt-5 border-separate border-spacing-0 "
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className=" text-xs  h-[40px]  w-full  mb-3  text-left "
              >
                {headerGroup.headers.map((column) => (
                  // Header Part on the table
                  // If you wish to change the text content in the header go to the top and change the columns header and accesor
                  <th
                    className="pl-3 first:pl-5 first:rounded-l-lg bg-gray last:rounded-r-lg"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                    {/* Add a sort direction indicator */}
                    <span>
                      {column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
  
            <div className="mb-3 " />
          </thead>
                
            {/* // Data Part in the Table */}
                  
            {/* If data is empty return no result,else return table data */}
            { firstPageRows.length ===0? 
              <tbody {...getTableBodyProps()} className="space-y-3 ">
                <td>
                  <div className=" w-full h-[200px] flex items-center justify-center">
                    <h1 className=" text-3xl font-bold text-[gray]"> No Result </h1>
                  </div>
                </td>

                <td>
                  <div className=" w-full h-[200px] flex items-center justify-center">
                    <h1 className=" text-3xl font-bold text-[gray]"> No Result </h1>
                  </div>
                </td>
                <td>
                  <div className=" w-full h-[200px] flex items-center justify-center">
                    <h1 className=" text-3xl font-bold text-[gray]"> No Result </h1>
                  </div>
                </td>
                </tbody>

                  :  //this is else
            
            
                <tbody {...getTableBodyProps()} className="space-y-3 ">
                
                { firstPageRows.map((row, i) => {
                    prepareRow(row);
                    return (
                      <>
                        {  /* for testing: this shows the data given to the mapping
                         {console.log(row.original)} */}
                        
                        <UserTableData
                          name={row.original.name}
                          org={row.original.org}
                          position={row.original.position}
                          email={row.original.email}
                        />
                      </>
                    );
                  })}
                </tbody>
            }
           
            
          
        </table>
        <br />
        {/* // Material UI: Pagination Part */}
        <div className="flex flex-col items-center justify-center gap-4 ">
          <Pagination
            count={Math.ceil(userData.length / 8)}
            onChange={(event, value) => {
              
              localStorage.setItem('page',value-1)
              setCurrentPage(localStorage.getItem('page'));
            }}
            variant="outlined"
            shape="rounded"
            color="standard"
          />
  
          <p className="text-sm ">
            Showing the first <b>{firstPageRows.length} results</b> of{" "}
            {userData.length} rows
          </p>
        </div>
      </>
    );
  }





  const [gender,setGender] = useState([0,""])
  return (
    <>
      <div
        className={
          creating
            ? " flex min-h-[400px]  mb-28   justify-center w-full  bg-[#E7E7E7] box-border"
            : "hidden"
        }
      >
        <div className="flex flex-col gap-10 w-[95%] min-h-[100px] py-10 mx-5  ">
          <div className=" border-dashed border-blue border-opacity-40 border-[1px] rounded-md w-full min-h-[260px] px-6 py-4 pt-7  flex-col flex  bg-white shadow-md">
            <div className="flex justify-between ">
              <div className="flex flex-col leading-4">
                <h1 className="self-start text-xl font-bold ">Users</h1>
                <p className="text-xs font-medium">Register Account</p>
              </div>

              <button
                className=" border-dashed border-blue border-opacity-40 border-[1px] rounded-sm  h-6 px-5 py-1 text-xs bg-[#FF9292] hover:bg-opacity-90"
                onClick={() => {
                  setcreating(!creating);
                }}
              >
                Cancel
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="flex flex-col  pb-8  gap-3 p-5 mt-3 mb-5 border-[1px] border-opacity-10 rounded-lg border-blue "
            >
              <div className="flex items-end gap-6">
                <Input label="Last Name" placeholder="Last Name" width="30%" />

                <Input
                  label="First Name"
                  placeholder="First Name"
                  width="30%"
                />

                <Input label="MI" placeholder="MI" width="5%" maxlength="2" />

                <Input
                  label="Birthday"
                  placeholder="Birthday"
                  type="date"
                  width="15%"
                />

                <Input
                  label="Gender"
                  placeholder="Gender"
                  type="dropdown"
                  width="15%"
                  maxlength="6"
                />




                {/* <div>
                  <p className="text-xs ">Gender</p>
                  <p className="text-xs ">{ Math.abs(gender[0])} % {gender[1]} </p>
                  
                  <input type="range" id="gender" className="cursor-pointer px-4rounded-lg text-yellow accent-yellow" onChange={(e,value)=>{
                    if(e.target.value <0){

                      setGender([e.target.value,"Male"])
                    }else if (e.target.value > 0) {
                      setGender([e.target.value,"Female"])
                    } else {
                      setGender([100,"LGBTQ"])
                    }
                    }} defaultValue={""} name="gender" min="-100"  max="100" step="1" list="tickmarks"/>
                    <datalist id="tickmarks">
                      <option value="-100" label="Male"></option>
                      <option value="0" label="LGBT"></option>
                      <option value="100" label="Female"></option>
                    </datalist>

                    <div className="flex justify-between w-full text-[9px] ">
                      <p>Male</p>
                      <p>LGBT</p>
                      <p>Female</p>
                    </div>
                </div> */}


                
              </div>

              <div className="flex items-end gap-6 ">
                <Input label="Email" placeholder="Email" width="40%" />

                <Input
                  label="Organization"
                  placeholder="Organization"
                  width="60%"
                />
              </div>

              <div className="flex items-start gap-6 ">
                <Input
                  label="Password"
                  placeholder="Password"
                  width="50%"
                  type="password"
                />

                <Input label="Position" placeholder="Position" width="50%" />
              </div>

              <div className="flex flex-col gap-5 mt-4">
              <div>
    

      {selectedImage && (
        <div className=" bg-[#f3f3f3b6] w-full min-h-[200px] p-5 rounded-lg mb-4 ">


          <div className=" relative min-h-[2px] min-w-0">
             <div className=" absolute flex justify-end bg-black opacity-0 hover:opacity-100 hover:rounded-md  hover:bg-opacity-40 h-[200px] w-[200px]  ">
              <span className="h-10 p-3 text-white cursor-pointer material-symbols-outlined"  onClick={() => setSelectedImage(null)}>
                cancel
                </span>
            </div>

            <img
            className={ selectedImage.type =="image/jpeg" && selectedImage.type =="image/jpeg"?" rounded-md h-[200px] w-[200px] object-cover": " rounded-md h-[200px] w-[200px] object-contain p-4"}
            alt="not found"
            width={"250px"}
            src={ selectedImage.type =="image/jpeg" && selectedImage.type =="image/jpeg"?  URL.createObjectURL(selectedImage):"https://www.newdirectionsforlife.com/wp-content/uploads/2018/11/625px-PDF_file_icon.svg.png"}
          />
          <p className=" py-1 text-[10px] ">{selectedImage.name}</p>
          </div>
        </div>
      )}
        <label className="flex items-center justify-center w-full py-2 text-sm font-normal text-center text-white rounded-sm cursor-pointer text-opacity-90 bg-yellow hover:bg-opacity-90">
                  <span>{selectedImage ===null?"Upload Profile Picture":"File Uploaded"}</span>
                  <input type="file" required className="hidden " 
                    name="myImage"
                    onChange={(event) => {
                      console.log(event.target.files[0]);
                      setSelectedImage(event.target.files[0]);
                    }} />
        </label>




    </div>


                {/* <label className="flex items-center justify-center w-full py-2 text-sm font-normal text-center text-white rounded-sm cursor-pointer text-opacity-90 bg-yellow hover:bg-opacity-90">
                  <span>Upload Profile Picture</span>
                  <input type="file" required className="hidden " />
                </label> */}

                <button className="flex items-center justify-center w-full py-2 text-sm font-normal text-center text-white rounded-sm text-opacity-90 text-md bg-blue hover:bg-opacity-90 ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div
        className={
          creating
            ? "hidden"
            : "flex min-h-[400px]  mb-28   justify-center w-full  bg-[#E7E7E7] box-border"
        }
      >
        <div className="flex flex-col gap-10 w-[95%] min-h-[100px] py-10 mx-5  ">
          <div className=" border-dashed border-blue border-opacity-40 border-[1px] rounded-md w-full min-h-[260px] px-6 py-4 pt-7  flex-col flex justify-start bg-white shadow-md">
            <div className="flex justify-center w-full ">
              <div className="w-full ">
                <div className="flex justify-between ">
                  <div className="flex flex-col leading-4">
                    <h1 className="self-start text-xl font-bold ">Users</h1>
                    <p className="text-xs font-medium">Registered Accounts</p>
                  </div>

                  <div className="flex items-center gap-6 leading-4 slg:gap-2">
                    <p className="flex text-sm font-medium slg:block">
                      <p>Search by :</p>
                      <select
                        className="underline border-none outline-none cursor-pointer "
                        required
                        value={sort}
                        onChange={(e) => {
                          setSort(e.target.value);
                        }}
                      >
                        <option value="name" defaultValue="name">
                          Name
                        </option>
                        <option value="email">Email</option>
                        <option value="position">Position</option>
                        <option value="org">Org.</option>
                      </select>
                    </p>

                    <button
                      className="flex items-center gap-1 px-4 py-1 text-xs rounded-sm bg-yellow active:bg-opacity-80 text-blue"
                      onClick={() => {
                        setcreating(!creating);
                      }}
                    >
                      <span className="material-symbols-outlined">add</span>
                      Create User
                    </button>
                    <div className="relative flex items-center">
                      <span className="absolute ml-2 material-symbols-outlined">
                        search
                      </span>
                      <input
                        type="text"
                        value={search}
                        onChange={(e) => {
                          setSearch(e.target.value);
                        }}
                        className=" pl-8 w-full outline-none focus:border-[#331dd8] border-[1px] bg-gray border-[#00000050] border-solid text-sm  py-[10px] rounded-[4px] font-[500] "
                      />
                    </div>
                  </div>
                </div>

                {/* Calling table component */}
                <Table
                  columns={columns}
                  data={data.filter(
                    (e) =>
                      e[sort] === query.toLowerCase().startsWith(query) ||
                      e[sort].toLowerCase().includes(query)
                  )}
                />


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserManagementPage;
