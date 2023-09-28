function PrimaryBtn({ children, className }) {
	return (
		<button
			className={className ? `primary-btn ${className}` : `primary-btn`}
		>
			{children}
		</button>
	);
}

export default PrimaryBtn;
