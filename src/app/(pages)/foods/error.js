"use client"

const FoodsError = ({error}) => {
    console.log("Error from foods page", error)
    return (
        <div>
            Something went wrong while fetching foods.
        
        </div>
    );
};

export default FoodsError;