import React from "react";

export const FoodCard = ({food}) => {
    return(
    <div className="foodItem">
        <div>
            <p>{food.name}</p>
        </div>

        <div>
            <img src={food.image !== 'N/A' ? food.image : 'https://via.placeholder.com/400' } alt={food.name} />
        </div>

        <div>
            <h3>{food.price}</h3>
        </div>
    </div>

    );
}

