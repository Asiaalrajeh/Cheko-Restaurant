import React from 'react'

function Pop({close,food}) {
  return (
    <div className="window">
        <div className="popcard">
            <div className="closeBtn">
            <button onClick={() => {close(false)}}>x</button>
            </div>
        <div className="cardText">
            <div>
            <h2>{food.name}</h2>
            <span> {food.calorie} Cal</span>
            </div>
        </div>

        <div className="description">
                <p>
                    {food.description}
                </p>
        </div>

            <div className="popImg">
            <img src={food.image !== 'N/A' ? food.image : 'https://via.placeholder.com/400' } alt={food.name} />
            </div>
            <div className='popPrice'>
            <p>{food.price} SR</p>


            <button >-</button>
            <div style={{padding:5}}>0</div>
            <button >+</button>
            </div>
        </div>

    </div>
  )
}

export default Pop