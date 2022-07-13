import { useCart, useWishlist } from "../../context";
import { Link } from "react-router-dom";
const Header = () => {
	const { cartState } = useCart();
	const { wishlistState } = useWishlist();

	return (
		<header className="header header-shadow flex-column">
			<div className="flex-row justify-content-space-between align-center w-100">
				<div className="brand-info flex-row justify-content-center align-center flex-gap-1 m-5">
					<Link to={"/"} className="no-link header-brand">
						<img
							src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
							alt="Logo of ripple UI"
							className="brand-logo"
						/>
					</Link>
				</div>
				<div className="social-icon-container flex-row align-center flex-gap-2">
					<ul className="no-list spaced-list flex-row align-center flex-gap-2 mx-5">
						<li className="search-bar h-auto">
							<form className="input-form flex-column flex-gap-1 flex-grow-1 flex-wrap h-auto w-100">
								<section className="input-container flex-column b-radius-1 m-5">
									<input
										id="search"
										className="textbox-content p-5"
										type="text"
										name="search"
										placeholder="Search products..."
										aria-label="Search products here"
									/>
									<i className="fas fa-search search-icon"></i>
								</section>
							</form>
						</li>
						<li className="header-nav-icons h-auto pt-10 header-navigation">
							<Link
								to={"/wishlist"}
								className="no-link badge p-5 m-5 flex-column justify-content-center align-center"
							>
								<span className="badge-icon">
									<i className="fas fa-heart social"></i>
								</span>
								<p
									className={`badge-text wishlist-badge-text flex-row justify-content-center align-center top right b-radius-circle ${
										wishlistState.itemsInWishlist.length > 0 ? "" : "inactive"
									}`}
								>
									{wishlistState.itemsInWishlist.length}
								</p>
								<p className="p-2 m-2 badge-title">Wishlist</p>
							</Link>
						</li>
						<li className="header-nav-icons h-auto pt-10 header-navigation">
							<Link
								to={"/cart"}
								className="no-link badge p-5 m-5 flex-column justify-content-center align-center"
							>
								<span className="badge-icon">
									<i className="fas fa-shopping-cart social"></i>
								</span>
								<p
									className={`badge-text cart-badge-text flex-row justify-content-center align-center top right b-radius-circle ${
										cartState.itemsInCart.length > 0 ? "" : "inactive"
									}`}
								>
									{cartState.itemsInCart.length}
								</p>
								<p className="p-2 m-2 badge-title">Cart</p>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export { Header };
