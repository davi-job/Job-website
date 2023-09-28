function SecondaryBtn({ children, className }) {
	return (
		<button
			className={
				className ? `secondary-btn ${className}` : `secondary-btn`
			}
		>
			{children}
		</button>
	);
}

export default SecondaryBtn;
