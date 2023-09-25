function ProductsSection() {
	return (
		<section className="products-section">
			<div className="products-section-container container">
				<h2 className="products-heading heading-secondary">Products</h2>
				<ul className="product-card-list grid grid--4-cols">
					<li className="product-card flex">
						<img
							className="product-card-image"
							src="https://source.unsplash.com/random/300×300"
							alt="Product"
						/>

						<div className="product-card-content">
							<p className="product-card-title">Hospitalar</p>
							<p className="product-card-text">
								Jaleco, capote cirúrgico, camisa e calça
								cirúrgica, campo cirúrgico e enxoval
							</p>
						</div>
					</li>

					<li className="product-card flex">
						<img
							className="product-card-image"
							src="https://source.unsplash.com/random/300×300"
							alt="Product"
						/>

						<div className="product-card-content">
							<p className="product-card-title">Social</p>
							<p className="product-card-text">
								Camisa, blusa e calça social em diferentes
								tecidos e padronagens
							</p>
						</div>
					</li>

					<li className="product-card flex">
						<img
							className="product-card-image"
							src="https://source.unsplash.com/random/300×300"
							alt="Product"
						/>

						<div className="product-card-content">
							<p className="product-card-title">Antichama (FR)</p>
							<p className="product-card-text">
								Camisa, calça e balaclava antichamas com
								certificado de aprovação técnica(CA) do MTE
							</p>
						</div>
					</li>

					<li className="product-card flex">
						<img
							className="product-card-image"
							src="https://source.unsplash.com/random/300×300"
							alt="Product"
						/>

						<div className="product-card-content">
							<p className="product-card-title">Profissional</p>
							<p className="product-card-text">
								Camisa, calça, bermuda e macacão para uso
								profissional
							</p>
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default ProductsSection;
