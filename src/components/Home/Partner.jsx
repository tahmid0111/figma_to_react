import React from 'react'
import { workLisk } from '../../database/data'

const Partner = () => {
  return (
    <>
    <h1>{workLisk.heading}</h1>
      <div className="partner-area py-20 flex justify-center">
        <div className="grid grid-cols-12 lg:grid-cols-5 container mx-auto">
            <div className="col-span-4 lg:col-span-1 flex justify-center">
                <img src='google.png' alt="google" />
            </div>
            <div className="col-span-4 lg:col-span-1 flex justify-center">
                <img src='Trello.png' alt="trello" />
            </div>
            <div className="col-span-4 lg:col-span-1 flex justify-center">
                <img src='monday.png' alt="monday" />
            </div>
            <div className="col-span-4 lg:col-span-1 flex justify-center">
                <img src='Notion.png' alt="notion" />
            </div>
            <div className="col-span-4 lg:col-span-1 flex justify-center">
                <img src='Slack.png' alt="slack" />
            </div>
        </div>
      </div>
    </>
  )
}

export default Partner
