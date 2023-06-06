import React,{useState} from 'react'
import WhereChannel from 'components/Campaign/Where/WhereChannel'
import WhereTags from 'components/Campaign/Where/WhereTags';

function Where({props}) {
   console.log(props,'props');
    return (
        <div >
            
            {props == 'channel' ? <WhereChannel/> :  <WhereTags/>}
          
           
        </div>
    )
}

export default Where
