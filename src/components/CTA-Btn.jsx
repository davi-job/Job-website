function CtaBtn({ children, className }) {
	return (
		<a
			target="blank"
			href="https://linktr.ee/jobroupasprofissionais"
			className={className ? `cta-btn ${className}` : `cta-btn`}
		>
			{children}
		</a>
	);
}

export default CtaBtn;
