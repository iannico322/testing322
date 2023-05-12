import React, { useState } from "react";
import ButtonFlat from "../../../../components/buttons/buttons";
import Input from "../../../../components/input/input";
import { addSarfData,sarfCache,clear } from "../../../../cache/sarfData";
import { useDispatch,useSelector} from "react-redux";

const CreateSarfPage = () => {
  const data = useSelector(sarfCache)
  const dispatch = useDispatch()
  const [sarfData, setSarfData]=useState({
    organization:"",
    name:"",
    eventName:"",
    eventType:"",
    date:"",
    SObjectives:"",
    GObjective:"",
    Particapance:"",
    duration:"",
    startTime:"",
    endTime:"",
    venue:"",
    ammount:""
  })


  
  const [selectedImage, setSelectedImage] = useState(null);
  

  return (
    <>
    <div
      className="
    flex min-h-[400px]   justify-center w-full  bg-[#E7E7E7] box-border"
    >
      <div className="flex flex-col gap-6 w-[95%] min-h-[100px] py-8 mx-5 mb-32 ">
        <h1 className="text-xl font-bold">Create New</h1>
        
        <form onSubmit={(e)=>{
          e.preventDefault()

       
          dispatch(addSarfData(sarfData))
          console.table(data)
        //   setSarfData({
        //     organization:"",
        // name:"",
        // eventName:"",
        // eventType:"",
        // date:"",
        // SObjectives:"",
        // GObjective:"",
        // Particapance:"",
        // duration:"",
        // startTime:"",
        // endTime:"",
        // venue:"",
        // ammount:""
        //   })

        setSelectedImage(null)


        }}  className="w-full min-h-[460px] px-6 py-4 bg-white rounded-2xl shadow-sm ">
          <div className="flex items-end gap-10 sm:gap-2">
           
            <div className="w-[40%] sm:mt-4 ">
              <Input
                label="Name of Organization"
                placeholder="Society of Information Technology Enthusiasts"
                type="text"
                value={sarfData.organization}
                onChange={(e)=>{
                  setSarfData({...sarfData,organization: e.target.value })
                }}

              />
            </div>
            <div className="w-[58%] sm:mt-4 ">
              <Input label="Name of Representative" type="text" 
              value={sarfData.name}
              onChange={(e)=>{
                setSarfData({...sarfData,name: e.target.value })
              }}
              
              />
            </div>
          </div>
          <div className="flex items-end gap-10 sm:gap-2">
            <div className="w-[40%] ">
              <Input label="Title of Event" type="text" 
              value={sarfData.eventName}
              onChange={(e)=>{
                setSarfData({...sarfData,eventName: e.target.value })
              }}
              
              />
            </div>
            <div className="w-[30%]">
              <Input label="Type of Event" type="text" 
              value={sarfData.eventType}
              onChange={(e)=>{
                setSarfData({...sarfData,eventType: e.target.value })
              }}
              />
            </div>
            <div className="w-[25%]">
              <Input label="Date of Event" type="date"
              value={sarfData.date}
              onChange={(e)=>{
                setSarfData({...sarfData,date: e.target.value })
              }}
              />
            </div>
          </div>

          <div className="mt-4">
            <div className="flex flex-col gap-1 mt-3 w-[100%]">
              <p className=" font-medium text-xs text-[#4B5563]">
                Specific Objectives
              </p>
              <textarea
                className="w-full h-20 outline-none focus:border-[#1D4ED8] border-[1px] border-[#9ca3af97] text-xs px-4 py-[10px] rounded-[4px] font-[500] "
                placeholder=""

                value={sarfData.SObjectives}
                onChange={(e)=>{
                  setSarfData({...sarfData,SObjectives: e.target.value })
                }}
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <div className="flex flex-col gap-1 mt-3 w-[100%]">
              <p className=" font-medium text-xs text-[#4B5563]">
                General Objective
              </p>
              <textarea
                className="w-full h-20 outline-none focus:border-[#1D4ED8] border-[1px] border-[#9ca3af97] text-xs px-4 py-[10px] rounded-[4px] font-[500] "
                placeholder=""
                required

                value={sarfData.GObjective}
                onChange={(e)=>{
                  setSarfData({...sarfData,GObjective: e.target.value })
                }}
              />
            </div>
          </div>

          <div className="box-content flex items-end w-full gap-5 mt-4 mb-5 md:gap-1 sm:gap-1 slg:gap-1 flex-nowrap ">
            <div className="w-[20%] ">
              <Input label="Number of Participants" type="number" 
              value={sarfData.Particapance}
              onChange={(e)=>{
                setSarfData({...sarfData,Particapance: e.target.value })
              }}
              />
            </div>
            <div className="w-[15%] ">
              <Input label="Hours of Duration" type="number" 
              value={sarfData.duration}
              onChange={(e)=>{
                setSarfData({...sarfData,duration: e.target.value })
              }}
              
              />
            </div>
            <div className="w-[14%] sm:mt-3  lg:mt-3  md:mt-3 slg:-mt-1">
              <Input label="Start" type="Time" 
              value={sarfData.startTime}
              onChange={(e)=>{
                setSarfData({...sarfData,startTime: e.target.value })
              }}
              />
            </div>
            <div className="w-[14%] sm:mt-3 lg:mt-3 slg:-mt-1 md:mt-3">
              <Input label="End" type="Time"
              
              value={sarfData.endTime}
                onChange={(e)=>{
                  setSarfData({...sarfData,endTime: e.target.value })
                }}
              />
            </div>
            <div className="w-[20%] sm:mt-3 lg:mt-3 slg:-mt-1 md:mt-3">
              <Input label="Venue of Event" type="Text" 
              value={sarfData.venue}
              onChange={(e)=>{
                setSarfData({...sarfData,venue: e.target.value })
              }}
              />
            </div>
            <div className="w-[15%] slg:-mt-1">
              <Input label="Amount Allocated" type="Text" 
              value={sarfData.ammount}
              onChange={(e)=>{
                setSarfData({...sarfData,ammount: e.target.value })
              }}
              
              />
            </div>
          </div>
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



          <div className="flex flex-row gap-10 mb-6">
         
        <label className="flex items-center justify-center w-full py-2 text-sm font-normal text-center text-white rounded-sm cursor-pointer text-opacity-90 bg-yellow hover:bg-opacity-90">
                  <span>{selectedImage ===null?"Add Attachment":"File Uploaded"}</span>
                  <input type="file" className="hidden " 
                    name="myImage"
                    onChange={(event) => {
                      console.log(event.target.files[0]);
                      setSelectedImage(event.target.files[0]);
                    }} />
        </label>

            <ButtonFlat value="Submit" bgColor="#1A1851" />
          </div>

          <div className=" text-sm text-[#52525C]">
            <p className="mb-2 ">Notes:</p>

            <p className=" pl-2 text-[14px] leading-6 text-[#52525C]">
              1. Event must always abide by the handbook policies (i.e dress
              code/code of conduct/etc.)
            </p>

            <p className=" pl-2 text-[14px] leading-6 text-[#52525C]">
              2. No classes must be disturbed.
            </p>

            <p className=" pl-2 text-[14px] leading-6 text-[#52525C]">
              3. Always secure an excuse letter from the VCAA prior to your SARF
              application (i.e if there are classes around the area of
              activity/students with classes.)
            </p>

            <p className=" pl-2 text-[14px] leading-6 text-[#52525C]">
              4. Changes occurred during implementation of activities must be
              evaluated by the OSA (Submit a letter to the office).
            </p>

            <p className=" pl-2 text-[14px] leading-6 text-[#52525C]">
              5. Evaluation must be conducted every after an activity. A
              template is given for everyone to use for their evaluations.
            </p>

            <p className=" pl-2 text-[14px] leading-6 text-[#52525C]">
              6. Events will not be approved if former event requirements are
              not yet submitted to the OSA (i.e liquidations, narrative
              reports/accomplishment reports).
            </p>

            <p className=" pl-2 text-[14px] leading-6 text-[#52525C]">
              7. Events to be conducted during <b>Saturday </b> and{" "}
              <b>Sunday</b> must secure with a PARENTS CONSENT (no need notary
              if inside campuses only).
            </p>

            <p className=" pl-2 text-[14px] leading-6 text-[#52525C]">
              8. Always include the <b>USTP CORE VALUES </b>and the{" "}
              <b>INSTITUTIONAL GRADUATE ATTRIBUTES</b> in your event programs.
              Host and/or organizing committee must always share the purpose of
              the activity being conducted.
            </p>

            <p className="mt-3 "> Source: Memorandum XX</p>

                
          </div>
        </form>
      </div>
    </div>


   

  
 

    </>
  );
};

export default CreateSarfPage;

