import React from 'react'
import data from "../app/data/results.json"
import { Card } from '@mui/material'
export default function ImagesComp() {
  return (
    <section>

    
        {data.map(item=><Card>
                {item.id}
                <img src={item.image}/>
        </Card>)}
    </section>
  )
}
