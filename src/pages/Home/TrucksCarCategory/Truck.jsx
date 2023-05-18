

const Truck = ({truck}) => {
    console.log(truck)
    const { name, picture, price, rating } = truck
    return (
        <div className="mx-auto">
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: ${price}</p>
                    <p>Rating: {rating}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Truck;