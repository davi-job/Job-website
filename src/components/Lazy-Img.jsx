function LazyImg({ className, src, alt, hasSmall }) {
	function loaded({ target }) {
		target.parentNode.classList.add("loaded");

		setTimeout(() => {
			target.parentNode.style.backgroundImage = "";
		}, 175);
	}

	let smallSrc;

	if (hasSmall) {
		let commaIndex = src.lastIndexOf(".");

		smallSrc = src.slice(0, commaIndex) + "-small";
		smallSrc = smallSrc.replaceAll(`\\`, "/");
		smallSrc = smallSrc.replace("/images", "/images/small");

		src.slice(commaIndex) === ".png" || src.slice(commaIndex) === ".jpeg"
			? (smallSrc += ".png")
			: (smallSrc += ".jpg");
	}

	return (
		<div
			className={`lazy-img-box ${className ? className : ""}`}
			style={
				hasSmall
					? {
							backgroundImage: `url(${smallSrc})`,
					  }
					: {}
			}
		>
			<img
				className="lazy-img"
				src={src}
				alt={alt}
				loading="lazy"
				onLoad={(event) => loaded(event)}
			/>
		</div>
	);
}

export default LazyImg;
