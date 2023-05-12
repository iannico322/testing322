import { Sort } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import ContentCard from "../../../components/content/contentCard";
import ContentCardSM from "../../../components/content/contentCardSM";
import TableData from "../../../components/table-data/tableData";
import { usersData } from "../../../SampleData/sampleData";
import { dashContent } from "../../../SampleData/sampleData";
import useDebounce from "../../../components/debounce/debounce";

const AdminDashboard = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("date");
  const query = useDebounce(search, 1000);

  useEffect(() => {
    setSearch(search);
  }, [query]);

  return (
    <div className="flex min-h-[400px]    justify-center w-full  bg-[#E7E7E7] box-border">
      <div className="flex flex-col gap-10 w-[95%] min-h-[100px] py-10 mx-5 mb-32 ">
        <h1 className="text-xl font-bold">Dashboard</h1>

        <div className="w-full h-[260px] px-6 py-4 bg-white rounded-2xl shadow-md">
          <p className="text-sm font-semibold">Overview</p>

          <div className="flex  h-[90%] ">
            <div className="w-[40%] h-full items-center justify-end flex">
              <ContentCard />
            </div>

            <div className=" flex h-full flex-col items-start justify-start w-[60%] flex-wrap ">
              {dashContent.map((e, key) => (
                <div
                  key={key}
                  className="flex w-[50%] h-[33.33%]  justify-start"
                >
                  <ContentCardSM
                    number={e.number}
                    type={e.type}
                    name={e.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full min-h-[260px] px-6 py-4 pt-7 bg-white rounded-2xl shadow-md">
          <div className="flex justify-between ">
            <div className="flex flex-col leading-4">
              <p className="font-semibold text-md">Activity</p>
              <p className="text-xs font-medium">
                {" "}
                Latest site activities and happenings
              </p>
            </div>

            <div className="flex items-center gap-6 leading-4">
              <p className="text-sm font-medium">
                Sort by :
                <select
                  className="underline border-none outline-none "
                  required
                  value={sort}
                  onChange={(e) => {
                    setSort(e.target.value);
                  }}
                >
                  <option value="name" selected>
                    name
                  </option>
                  <option value="date">date</option>
                </select>{" "}
              </p>
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
                  className=" pl-8 w-full outline-none focus:border-[#331dd8] border-[1px] bg-gray border-[#00000050] text-sm  py-[10px] rounded-[4px] font-[500] "
                />
              </div>
            </div>
          </div>

          <table className="w-full mt-5 border-separate border-spacing-0">
            <thead>
              <tr className="text-xs   h-[40px] rounded-lg bg-red-100 w-full  border-[2px]   text-left bg-gray ">
                <th className="pl-3 rounded-l-md ">Full Name and Position</th>
                <th className="pl-3 ">Date and Time</th>
                <th className="pl-3 ">Event</th>
                <th className="pl-3 rounded-r-md ">Action</th>
              </tr>
              <hr className="mb-3 border-none " />
            </thead>

            <tbody>
              {usersData
                .filter(
                  (e) =>
                    e[sort] === query.toLowerCase().startsWith(query) ||
                    e[sort].toLowerCase().includes(query)
                )
                .map((e, key) => (
                  <TableData
                    key={key}
                    name={e.name}
                    position={e.position}
                    date={e.date}
                    time={e.time}
                    event={e.event}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
