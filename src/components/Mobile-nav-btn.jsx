import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function MobileNavBtn({ className, onClickFunc }) {
	const location = useLocation();

	const [isChecked, setIsChecked] = useState(false);

	useEffect(() => {
		setIsChecked(false);
	}, [location]);

	return (
		<div className={`mobile-nav-btn ${className ? className : ""}`}>
			<label className="burger" htmlFor="burger">
				<input
					type="checkbox"
					id="burger"
					className="test"
					checked={isChecked}
					onChange={(e) => setIsChecked(e.target.checked)}
					onClick={(e) => onClickFunc(e)}
				/>
				<span></span>
				<span></span>
				<span></span>
			</label>
		</div>
	);
}

export default MobileNavBtn;
