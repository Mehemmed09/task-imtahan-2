import React, { useContext } from "react";
import { BasketContext } from "./../../context/context";
import '../BasketPage/Basket.scss'
const Basket = () => {
	const { basket, DeleteBasket, increaseBasket, decreaseBasket } = useContext(BasketContext);

	return (
		<div>
			{basket.length > 0 ? (
				<table className="table">
					<thead>
						<tr>
							<th scope="col">Image</th>
							<th scope="col">Name</th>
							<th scope="col">Title</th>
							<th scope="col">About</th>
							<th scope="col">Delete</th>
							<th scope="col">decrease</th>
							<th scope="col">Count</th>

							<th scope="col">increase</th>
						</tr>
					</thead>
					<tbody>
						{basket.map((item) => (
							<tr key={item._id}>
								<td>
									<img src={item.image} alt="" width="60px" />
								</td>
								<td>{item.title}</td>
								<td>{item.text}</td>
								<td>{item.about}</td>
								<td>
									<button className="btn btn-danger" onClick={() => DeleteBasket(item._id)}>
										Delete
									</button>
								</td>
								<td>
									<button className="btn btn-primary" onClick={() => decreaseBasket(item._id)}>
										-
									</button>
								</td>
								<td>
									<p>{item.count}</p>
								</td>
								<td>
									<button className="btn btn-primary" onClick={() => increaseBasket(item._id)}>
										+
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<p>No items in basket</p>
			)}
		</div>
	);
};

export default Basket;
