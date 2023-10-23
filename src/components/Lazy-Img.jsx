import { useEffect, useState } from "react";

function LazyImg({ className, src, alt, hasSmall }) {
	const [bgDisabled, setbgDisabled] = useState(false);

	let smallSrc; // The src for the small version of the image

	// When the image is loaded, add the loaded class to the parent and after a 175 delay remove the background image
	function loaded({ target }) {
		target.parentNode.classList.add("loaded");

		setTimeout(() => {
			setbgDisabled(true);
			console.log("bg removed");
		}, 175);
	}

	// If the className is passed, check if the image is loaded, if not, enable the background image
	useEffect(() => {
		if (className) {
			if (!className.includes("loaded")) {
				setbgDisabled(false);
				console.log("bg added");
			}
		}
	}, [className]);

	// If the image has a small version, use the img src to form the small img src
	if (hasSmall) {
		let commaIndex = src.lastIndexOf(".");

		smallSrc = src.slice(0, commaIndex) + "-small";
		smallSrc = smallSrc.replaceAll(`\\`, "/");
		smallSrc = smallSrc.replace("/images", "public/images/small");

		smallSrc += ".webp";
	}

	return (
		<div
			className={`lazy-img-box ${className ? className : ""}`}
			style={
				!bgDisabled && hasSmall
					? {
							backgroundImage: `url(${smallSrc})`,
					  }
					: !hasSmall
					? {
							backgroundImage:
								"linear-gradient( 135deg, rgba(189, 221, 241, 1) 0%, rgba(118, 168, 199, 1) 100%)",
					  }
					: {
							backgroundImage: "",
					  }
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
