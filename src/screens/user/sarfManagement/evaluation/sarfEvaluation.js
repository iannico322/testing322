import React from 'react'
import ButtonFlat from '../../../../components/buttons/buttons';

import Input from '../../../../components/input/input';


const UserSarfEvaluationPage = () => {
    return (
        <div className="w-full min-h-[250px] max-h-full bg-gray box-border px-2 ml-3 mb-[210px]">
          <div className="flex flex-col w-[95%] py-5">
            <h1 className="text-xl font-bold">Evaluation Report</h1>
          </div>
          <div className="flex flex-col h-full max-w-[97.5%] sm:max-w-[96%] rounded-md min-w-[92%] bg-white px-6 pt-2 py-2">
            <div className="flex gap-10 mt-2 ">
              <div className="w-[50%]">
                <Input
                  label="Title of Event"
                  placeholder="Click to Select Event"
                  type="text"
                />
              </div>
              <div className="w-[50%]">
                <Input label="Google Form Link" type="text" />
              </div>
            </div>
            <div className="flex flex-row gap-5 mt-6 mb-6">
            <label className="flex items-center justify-center w-full py-2 text-sm font-normal text-center text-white rounded-md cursor-pointer text-opacity-90 bg-yellow hover:bg-opacity-90">
              <span>Add Attachments</span>
              <input type="file" required className="hidden " />
            </label>

            <ButtonFlat value="Submit" bgColor="#1A1851" />
          </div>
          </div>
          <div className="w-[97.5%] min-h-[260px] px-6 py-4 pt-7 rounded-md bg-white shadow-md mt-20">
            <div className="flex justify-between ">
              <div className="flex flex-col leading-4">
                <p className="text-sm font-semibold">
                  Submitted Evaluation Reports
                </p>
                <p className="text-xs font-medium"> Student activities</p>
              </div>
    
              <div className="flex items-center gap-4 leading-4">
                <div className="bg-gray py-2 px-2 border-dashed border-blue border-opacity-75 border-[1px] rounded-[4px]">
                  <p className="text-[10px] font-medium">
                    Sort by : Recently Uploaded
                  </p>
                </div>
                <div className="relative flex items-center">
                  <span class=" absolute material-symbols-outlined ml-2">
                    search
                  </span>
                  <input
                    type="text"
                    className=" pl-8 w-full outline-none focus:border-[#331dd8] border-[1px] bg-gray border-[#00000050] text-sm  py-[5.5px] lg:py-1 sm:py-3 rounded-[4px] font-[500] "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default UserSarfEvaluationPage