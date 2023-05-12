import React, { useEffect } from 'react'
import Sarf from '../../../../components/pdfTemplate/pdf'
import  {  PDFDownloadLink,PDFViewer,ReactPDF } from '@react-pdf/renderer'
import { useSelector } from "react-redux";
import { sarfKeyCache } from '../../../../cache/sarfDataKey';
import { sarfCache } from '../../../../cache/sarfData';

const ViewRequirements = (props) => {
  const indexkey = useSelector(sarfKeyCache)
  
  const data = useSelector( sarfCache)

  useEffect(()=>{
    console.table(data)

  },[data])
  
  useEffect(()=>{

    console.table(data[indexkey].organization)
    

  },[indexkey])
  return (
    <div className="flex   min-h-0   justify-center w-full  bg-[#E7E7E7] box-border">
        <div className="flex flex-col gap-10 w-[95%] min-h-[100px] py-10 mx-5 mb-[190px]  ">
              <div className="   rounded-md w-full min-h-[500px] px-6 py-4 pt-7  flex-col flex justify-start bg-white shadow-md pb-10">
                <div className="flex justify-center w-full ">
                  <div className="w-full ">
                    <div className="flex justify-between ">
                      <div className="flex flex-col leading-4">
                        <h1 className="self-start text-xl font-bold ">
                        View Requirements
                        </h1>
                        <p className="text-xs font-medium">
                        Student Activities
                        </p>
                      </div>

                      <div>

                      <button
                            className=" border-dashed border-blue border-opacity-40 border-[1px] rounded-sm  h-6 px-5 py-1 text-xs bg-[#FF9292] hover:bg-opacity-90"
                            onClick={props.setviewing}
                        >
                            Back
                        </button>
                      </div>

                      
                      
                    </div>

                    <div className="flex flex-col w-full min-h-full gap-0 mt-3">
                         <div className=" flex flex-col justify-between bg-[#F6F6F6] rounded-md  border-dashed border-[1px] border-[#00000054] ">

                            <div className=' flex justify-between h-[100px] bg-[#F6F6F6] '>

                          
                            <div className=" flex flex-col  min-w-[30%] h-full px-4 py-2 gap-3 ">
                            <div className="flex h-full gap-4 px-3 py-2 ">
                                <div className=" flex items-center self-start justify-center h-[30px] mt-1 w-[30px] object-contain bg-[#DBEAFE] rounded-md border-dashed border-[1px] border-[#00000054]">
                                <p className=" text-[10px]">Icon</p>
                                </div>
                                <div className="flex flex-col justify-between h-full ">
                                <div>
                                    <h1 className="text-sm font-semibold ">{data[indexkey].eventName}</h1>
                                    <p className="text-[10px] ">{data[indexkey].organization}</p>
                                </div>

                                <div>
                                    <h1 className="text-xs ">
                                    <b>Date Submitted</b> :{data[indexkey].date}
                                    </h1>
                                    
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className=" flex items-center justify-center px-5  w-[30%] h-[100%] ">

                            <PDFDownloadLink className="text-xs  text-center flex items-center justify-center rounded-md border-dashed border-[1px] border-[#00000054] cursor-pointer hover:bg-yellow hover:text-white transition-colors  w-[200px] h-[40%]  bg-[#FFFFFF]" document={<Sarf 
                                          organization={data[indexkey].organization}
                                        name={data[indexkey].name}
                                        date={data[indexkey].date}
                                        eventName={data[indexkey].eventName}
                                        eventType={data[indexkey].eventType}
                                        />} fileName={data[indexkey].organization +"-"+ data[indexkey].eventName+".pdf"}>
                            {({loading}) => (loading ? <p>Loading Document...</p> :  <p >Download Sarf</p> )}
                            </PDFDownloadLink>

                                
                          
                            </div>
                            </div>
                            <div className=' min-h-[500px] w-full bg-yellow'>
                                <div className=' min-h-[800px] w-full bg-[#F6F6F6]  flex items-center justify-center'>
                                   
                                    <PDFViewer  
                                    showToolbar={false}
                                     className='w-[520px] rounded-lg   h-[718px] bg-white object-fill overflow-hidden drop-shadow-lg   '>
                                        <Sarf 
                                          organization={data[indexkey].organization}
                                        name={data[indexkey].name}
                                        date={data[indexkey].date}
                                        eventName={data[indexkey].eventName}
                                        eventType={data[indexkey].eventType}

                                        SObjectives={data[indexkey].SObjectives}
        GObjective={data[indexkey].GObjective}
        Particapance={data[indexkey].Particapance}
        duration={data[indexkey].duration}
        startTime={data[indexkey].startTime}
        endTime={data[indexkey].endTime}
        venue={data[indexkey].venue}
        ammount={data[indexkey].ammount}
                                        />
                                    </PDFViewer>

                             


                            
                                    
                                    

                                </div>
                                <div className=' h-[200px] w-full bg-black'>

                                </div>

                            
                            </div>
                        </div>








                    </div>
                  </div>
                </div>
              </div>
              </div>
              </div>

  )
}

export default ViewRequirements