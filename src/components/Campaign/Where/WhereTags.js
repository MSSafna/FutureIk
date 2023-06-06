import React,{useState} from 'react'
import arrow from '../../../images/arrow.png';
import puzzle from '../../../images/puzzle.png';
import puzzle1 from '../../../images/puzzle1.png'
import puzzlewhite from '../../../images/puzzle3white.png'
import puzzleblue from '../../../images/puzzle4Blue.png'
import classNames from "classnames";

function WhereTags() {
    const [tagOption, setTagOption] = useState('any of')

 const handleOption = (value) =>{
    setTagOption(value)
 }
    return (
        <div className=' pt-4 mt-3'>
            <p className='font-lato text-[15px] text-[#676767]'>Choose the condition</p>
            <p className='font-lato text-[12px] text-[#bdbdbd] mt-6'>Select the condition for tags by which you want to
                <br />
                assign this Campaign.
            </p>

            <div className='flex mt-8'>
                <div  className={classNames('p-4 rounded  h-[218px] w-[180px] left-[283px] top-[471px]',
                tagOption === 'any of' ? ' border-[#0C66D6] ring-[0.8px]  bg-[#0D6DE421]' 
                : 'bg-[#fff]  border border-[#909090]' 
                )} onClick={() => handleOption('any of')}
                  >
                    <div className={classNames('ml-6 mt-3 rounded flex jusify-center h-[96px] w-[100px]',
                    tagOption === 'any of'? 'bg-[#0C66D6]' : 'bg-[#fff] border-[#909090]rounded ring-[0.8px]'
                    )}>
                        <img src={ tagOption === 'any of' ?  puzzle  :  puzzleblue } alt='puzzle'  className='w-[60px] h-[53px] ml-[18px] mt-[20px]' />
                    </div>
                    <p className='ml-7 mt-2 font-lato text-[12px] text-[#bdbdbd] '>Matches any of
                    {tagOption === 'any of' && 
                        <img src={arrow} className='ml-8 mt-2' />
                    }
                    </p>
                </div>


                <div  className={classNames('p-4 rounded   h-[#200px] w-[180px] left-[283px] top-[471px] ml-4',
                tagOption === 'all of' ? ' border-[#0C66D6] ring-[0.8px]  bg-[#0D6DE421]' 
                : 'bg-[#fff]  border border-[#909090]' 
                )} onClick={() => handleOption('all of')}
                  >
                   <div className={classNames('ml-6 mt-3 rounded flex jusify-center h-[96px] w-[100px]',
                    tagOption === 'all of'? 'bg-[#0C66D6]' : 'bg-[#fff] border-[#909090]rounded ring-[0.8px]'
                    )}>
                        <img src={ tagOption === 'all of' ? puzzlewhite : puzzle1 } alt='puzzle' style={{ width: '60px', height: '53px', marginLeft: '18px', marginTop: '20px' }} />
                    </div>
                    <p className='ml-8 mt-2 font-lato text-[12px] text-[#bdbdbd]  '>Matches all of
                    {tagOption === 'all of' && 
                        <img src={arrow} className='ml-8 mt-2' />
                    }
                    </p>
                </div>

            </div>

            <div className='mt-6'>
                <p  className='font-lato text-[15px] text-[#676767]'>Tags</p>
                <div className='flex mt-5'>
                    <input type='text' style={{ width: '400px', height: '43px' }} className='p-2 border rounded' placeholder='Eg : Outdoor' />
                    <div style={{ width: '50px', backgroundColor: 'rgba(12, 102, 214, 1)' }} className='pt-2'>
                        <span className='ml-4 text-white text-2xl'>+</span>
                    </div>
                </div>
            </div>

            <div className='flex mt-6'>
                <div className='w-24 h-10 bg-white p-2  border font-lato text-[15px] text-[#0C66D6]'>X Outdoor</div>
                <div className='w-24 h-10 bg-white p-2  border font-lato text-[15px] text-[#0C66D6] ml-5'>X Kuwait</div>

            </div>
        </div>
    )
}

export default WhereTags
