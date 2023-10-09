function LazyImg({ className, src, alt, once }) {
	function loaded({ target }) {
		target.parentNode.classList.add("loaded");
	}

	return (
		<div className={`lazy-img-box ${className ? className : ""}`}>
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
