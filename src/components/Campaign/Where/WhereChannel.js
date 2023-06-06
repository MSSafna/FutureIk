import React from 'react'
import { CiSearch } from 'react-icons/ci'
import vector from '../../../images/Vector.png'
import folder from '../../../images/folder1.png'


function WhereChannel() {
    
    return (
        <div>
            <div className='mt-4'>
                <div className="relative flex items-center">
                    <input
                        type="text"
                        className="w-full border py-2 pr-10 pl-4 font-lato  text-[12px] rounded-md text-[#bdbdbd]"
                        placeholder="Search Channels"
                        style={{ width: '581px', height: '40px' }}
                    />
                    <div className="absolute ml-[550px] top-1/2 transform -translate-y-1/2">
                        <CiSearch size={16} className='text-[#909090]'/>
                    </div>
                </div>


            </div>

            <>
    <div className='w-3/3  bg-white  pl-6 pt-4 mt-8 border' style={{height:'450px'}}>
        <div className='  overflow-y-scroll '  style={{height:'400px'}}>
            <p className='font-lato text-[12px] text-[#bdbdbd]'>Name</p>
         <p className='flex mt-4'> > 
            <img className='ml-2 w-4 h-4 mt-1' src={vector}/>
            <img  className='ml-2 w-8 h-6 'src={folder}></img>
            <p className='ml-3  mt-1 text-[#bdbdbd] text-sm'>CHANNELS</p>
         </p>
          

         <p className='flex mt-4'> > 
            <img className='ml-2 w-4 h-4 mt-1' src={vector}/>
            <img  className='ml-2 w-8 h-6 'src={folder}></img>
            <p className='ml-3 mt-1 text-[#bdbdbd] text-sm'>QUADFOS</p>
         </p>
        </div>
    </div>
        <p className='font-lato text-[14px] text-[#bdbdbd] m-2'>2 channels selected</p>
   </>
        </div>
    )
}

export default WhereChannel
