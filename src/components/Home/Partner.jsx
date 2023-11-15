import React from 'react'

const Partner = () => {
  return (
    <>
      <div className="partner-area py-20">
        <div className="grid grid-cols-5 container mx-auto float-right">
            <div className="col-span-1">
                <img src='google.png' alt="google" />
            </div>
            <div className="col-span-1">
                <img src='Trello.png' alt="trello" />
            </div>
            <div className="col-span-1">
                <img src='monday.png' alt="monday" />
            </div>
            <div className="col-span-1">
                <img src='Notion.png' alt="notion" />
            </div>
            <div className="col-span-1">
                <img src='Slack.png' alt="slack" />
            </div>
        </div>
      </div>
    </>
  )
}

export default Partner
