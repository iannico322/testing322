import { organizations } from "../../../../SampleData/sampleData";
import React, { useState } from "react";
import useDebounce from "../../../../components/debounce/debounce";
import OrganizationTableData from "../../../../components/table-data/organizationTableData";
import Input from "../../../../components/input/input";
import Permission from "../../../../components/permissions/permission";
// import here

const Organizations = () => {
  const [creating, setcreating] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("name");
  const query = useDebounce(search, 1000);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div
        className={
          creating
            ? " flex min-h-[900px] sm:min-h-[900px]    justify-center w-full  bg-[#E7E7E7] box-border"
            : "hidden"
        }
      >
        <div className="flex flex-col gap-10 w-[95%] h-auto py-5 mx-5 mt-5 mb-36 overflow-hidden ">
          <div className=" border-dashed border-blue border-opacity-40 border-[1px] rounded-md w-full h-[900]  sm:min-h-[600x] md:min-h-[700px] px-6 py-4 pt-7  flex-col flex  bg-white shadow-md">
            <div className="flex justify-between ">
              <div className="flex flex-col leading-4">
                <h1 className="self-start text-xl font-bold ">Organization</h1>
                <p className="text-xs font-medium">Create Organization</p>
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
              className="flex flex-col  pb-8  gap-3 p-5 mt-3 mb-5 border-[1px]  border-opacity-10 rounded-lg border-blue "
            >
              <div className="flex flex-col gap-3 ">
                <Input label="Organization Name" placeholder="Organization_Name" />
                <div className="flex gap-3 ">
                  <Input label="Organization Category" placeholder="Academic/Extracurricular/Scholar" />
                  <Input label="Organization Type" placeholder="Mother" />
                  <Input label="College" placeholder="College of Information Technology Computing" />
                </div>
                
              </div>
              <div className="flex flex-col">
              <Input label="Signatories" placeholder="Select a Moderator" />
                <Input placeholder="Select a College Dean" />
                <Input placeholder="Select a Student Gobernment Unit" />
                <Input placeholder="Floreto M. Quinito" />
                <Input placeholder="Erich P. Abad" />
              </div>
              <div className="flex flex-col gap-5 mt-4">
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
          <p className="py-1 text-[10px] ">{selectedImage.name}</p>
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
                    <h1 className="self-start text-xl font-bold ">Organization</h1>
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
                        <option value="type">Type</option>
                        <option value="category">Category</option>
                      </select>
                    </p>

                    <button
                      className="flex items-center gap-1 px-4 py-1 text-xs border-[1px] border-blue border-opacity-30 border-dashed rounded-sm bg-yellow active:bg-opacity-80 text-blue"
                      onClick={() => {
                        setcreating(!creating);
                      }}
                    >
                      <span className="material-symbols-outlined">add</span>
                      Create Organization
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
                      <th className="pl-3 rounded-l-md ">Organization Name</th>
                      <th className="pl-3 ">Organization Type</th>
                      <th className="pl-3 ">Organization Category</th>
                      <th className="pl-3 rounded-r-md "></th>
                    </tr>
                    <hr className="mb-3 border-none " />
                  </thead>

                  <tbody>
                    {organizations
                      .filter(
                        (e) =>
                          e[sort] === query.toLowerCase().startsWith(query) ||
                          e[sort].toLowerCase().includes(query)
                      )
                      .map((e, key) => (
                        <OrganizationTableData
                          key={key}
                          name={e.name}
                          description={e.description}
                          type={e.type}
                          category={e.category}
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

export default Organizations;
