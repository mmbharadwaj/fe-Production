import React from 'react'

export function CardBox(props) {
  const { studioView, cardView, title, description } = props
  return (
    <>
      <div className={`p1 ${studioView}`}>
        <div className="card studioCard shadow">
          <div className='card-header bg-transparent'>
            <h5 className='card-title d-flex flex-row justify-content-between'>
              {title}
            </h5>
          </div>
          <div className='card-body'>
            <div className='card-text' style={{ height: cardView }}>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
