import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
	return (
		<div className="descriptionbox">
			<div className="descriptionbox-navigator">
				<div className="descriptionbox-nav-box">Description</div>
				<div className="descriptionbox-nav-box fade">Reviews (122)</div>
			</div>
			<div className="descriptionbox-description">
				<p>
					An ecommerce website, also known as an online store, is basically a
					digital version of a physical store. It's a platform on the internet
					where businesses can sell products and services to customers. Imagine
					Amazon or any other online store you frequent - that's an ecommerce
					website.
				</p>
				<p>
					Ecommerce websites allow customers to browse a selection of products,
					read descriptions and reviews, and then complete purchases
					electronically.
				</p>
			</div>
		</div>
	);
};

export default DescriptionBox;
