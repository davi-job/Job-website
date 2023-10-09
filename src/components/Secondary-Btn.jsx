function SecondaryBtn({ children, className, onClick }) {
	return (
		<button
			className={
				className ? `secondary-btn ${className}` : `secondary-btn`
			}
			onClick={onClick ? onClick : null}
		>
			{children}
		</button>
	);
}

export default SecondaryBtn;
