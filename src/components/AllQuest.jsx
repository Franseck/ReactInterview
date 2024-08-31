import React from 'react'
import questions from '../helper/data'
import SingleQuest from "./SingleQuest"




const AllQuest = () => {
  return (
    <div className='container'>
        {questions.map((item) =><SingleQuest {...item} key={item.id}/>
        )}
        </div>
  )
}

export default AllQuest