import { positionContent } from "../../../../SampleData/sampleData";
import React, { useState } from "react";
import useDebounce from "../../../../components/debounce/debounce";
import PositionTableData from "../../../../components/table-data/positionTableData";
import Input from "../../../../components/input/input";
import Permission from "../../../../components/permissions/permission";

const Position = () => {
  const [creating, setcreating] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("name");
  const query = useDebounce(search, 1000);

  return (
    <>
      <div
        className={
          creating
            ? " flex min-h-[900px] sm:min-h-[900px]    justify-center w-full  bg-[#E7E7E7] box-border"
            : "hidden"
        }
      >
        <div className="flex flex-col gap-10 w-[95%] h-[100px] py-10 mx-5  ">
          <div className=" border-dashed border-blue border-opacity-40 border-[1px] rounded-md w-full h-[700px] sm:min-h-[600x] md:min-h-[700px] px-6 py-4 pt-7  flex-col flex  bg-white shadow-md">
            <div className="flex justify-between ">
              <div className="flex flex-col leading-4">
                <h1 className="self-start text-xl font-bold ">Position</h1>
                <p className="text-xs font-medium">Create Position</p>
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
              <div className="flex flex-col gap-7 ">
                <Input label="Position Name" placeholder="Postion_Name" />

                <div className="flex justify-around gap-7 md:flex-wrap">
                  <div className="">
                    <Permission
                      title="Permissions"
                      subTitle="User Management"
                      label1="View"
                      label2="Create"
                      label3="Modify"
                      label4="Delete"
                    />
                  </div>
                  <div className="mt-4">
                    <Permission
                      subTitle="Organization Management"
                      label1="View"
                      label2="Create"
                      label3="Modify"
                      label4="Delete"
                    />
                  </div>
                  <div className="mt-4">
                    <Permission
                      subTitle="Sarf Management"
                      label1="View"
                      label2="Decide"
                      label3="Comment"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 mt-4">
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
            : "flex min-h-[750px]    justify-center w-full  bg-[#E7E7E7] box-border"
        }
      >
        <div className="flex flex-col gap-10 w-[95%] min-h-[500px] py-10 mx-5  ">
          <div className=" border-dashed border-blue border-opacity-40 border-[1px] rounded-md w-full h-[530px] px-6 py-4 pt-7  flex-col flex justify-start bg-white shadow-md">
            <div className="flex justify-center w-full">
              <div className="w-full ">
                <div className="flex justify-between ">
                  <div className="flex flex-col leading-4">
                    <h1 className="self-start text-xl font-bold ">Position</h1>
                  </div>

                  <div className="flex items-center gap-6 leading-4 slg:gap-2">
                    <p className="flex text-sm font-medium slg:block">
                      <p>Sort by :</p>
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
                      </select>
                    </p>

                    <button
                      className="flex items-center gap-1 px-4 py-1 text-xs border-[1px] border-blue border-opacity-30 border-dashed rounded-sm bg-yellow active:bg-opacity-80 text-blue"
                      onClick={() => {
                        setcreating(!creating);
                      }}
                    >
                      <span className="material-symbols-outlined">add</span>
                      Create Position
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
                        className=" pl-8 w-full outline-none focus:border-[#331dd8] border-[1px] bg-gray border-[#00000050] border-dashed text-sm  py-[10px] rounded-[4px] font-[500] "
                      />
                    </div>
                  </div>
                </div>

                <table className="w-full mt-5 border-separate border-spacing-0">
                  <thead>
                    <tr className="text-xs border-dashed  h-[40px] rounded-lg bg-red-100 w-full   text-left bg-gray ">
                      <th className="pl-3 rounded-l-md ">Position Name</th>
                      <th className="pl-3 ">Total User</th>
                      <th className="pl-3 ">Total Permission</th>
                      <th className="pl-3 rounded-r-md "></th>
                    </tr>
                    <hr className="mb-3 border-none " />
                  </thead>

                  <tbody>
                    {positionContent
                      .filter(
                        (e) =>
                          e[sort] === query.toLowerCase().startsWith(query) ||
                          e[sort].toLowerCase().includes(query)
                      )
                      .map((e, key) => (
                        <PositionTableData
                          key={key}
                          name={e.name}
                          totalUser={e.totalUser}
                          permission={e.totalPermission}
                        />
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Position;
