import React from 'react'

interface AboutProps {}

export const About: React.FC<AboutProps> = () => {
  return (
    <div className="single-page">
      <div className="content">
        <h1 className="title">About</h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eum
        natus illo et consequuntur placeat nihil doloremque laborum, quisquam
        necessitatibus esse atque quas tempore voluptatem dignissimos unde
        cupiditate sint quae?
      </div>
    </div>
  )
}
