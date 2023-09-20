import React from "react";

export const FoodCard = ({food}) => {

    const x = () => {
        return(
            console.log(food.name)
        )
    }

    return(
    <div className="foodcard" onClick={x}>
        

        <div className="foodImg">
            <img src={food.image !== 'N/A' ? food.image : 'https://via.placeholder.com/400' } alt={food.name} />
        </div>

        <div className="cardText">
            <div>
            <h3>{food.name}</h3>
            <span>{food.calorie} Cal</span>
            </div>

            
            <div>
            <p>{food.price} SR</p>


            {/* <div className="counter" > */}
            <button >-</button>
            <div style={{padding:5}}>0</div>
            <button >+</button>
            {/* </div> */}
            </div>
        </div>
    </div>

    );
}

