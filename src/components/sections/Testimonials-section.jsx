function TestimonialsSection() {
	return (
		<section className="testimonials-section">
			<div className="testimonials-section-container container flex">
				<div className="testimonials-title-box">
					<h2 className="testimonials-section-title heading-secondary">
						Depoimentos dos nossos parceiros
					</h2>
				</div>

				<div className="testimonial-cards-box grid grid--2-cols">
					<div className="testimonial-card flex">
						<div className="testimonial-image-box">
							<img
								className="testimonial-img"
								src="https://source.unsplash.com/random/200x200"
								alt=""
							/>

							<p className="testimonial-author">Jonh Doe</p>
						</div>

						<div className="testimonial-content flex">
							<div className="testimonial-rating flex">
								<ion-icon
									class="testimonial-rating-icon"
									name="star"
								></ion-icon>
								<ion-icon
									class="testimonial-rating-icon"
									name="star"
								></ion-icon>
								<ion-icon
									class="testimonial-rating-icon"
									name="star"
								></ion-icon>
								<ion-icon
									class="testimonial-rating-icon"
									name="star"
								></ion-icon>
								<ion-icon
									class="testimonial-rating-icon"
									name="star"
								></ion-icon>
							</div>

							<p className="testimonial-text">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Quisquam quos, voluptatibus,
								quae, quibusdam voluptatum doloremque asperiores
								tempora voluptates culpa quod quia. Quisquam
								quos, voluptatibus, quae, quibusdam voluptatum
								doloremque asperiores tempora voluptates culpa
								quod quia.
							</p>
						</div>
					</div>

					<div className="testimonial-card flex">
						<div className="testimonial-image-box">
							<img
								className="testimonial-img"
								src="https://source.unsplash.com/random/200x200"
								alt=""
							/>

							<p className="testimonial-author">Jonh Doe</p>
						</div>

						<div className="testimonial-content flex">
							<div className="testimonial-rating flex">
								<ion-icon
									class="testimonial-rating-icon"
									name="star"
								></ion-icon>
								<ion-icon
									class="testimonial-rating-icon"
									name="star"
								></ion-icon>
								<ion-icon
									class="testimonial-rating-icon"
									name="star"
								></ion-icon>
								<ion-icon
									class="testimonial-rating-icon"
									name="star"
								></ion-icon>
								<ion-icon
									class="testimonial-rating-icon"
									name="star"
								></ion-icon>
							</div>

							<p className="testimonial-text">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Quisquam quos, voluptatibus,
								quae, quibusdam voluptatum doloremque asperiores
								tempora voluptates culpa quod quia. Quisquam
								quos, voluptatibus, quae, quibusdam voluptatum
								doloremque asperiores tempora voluptates culpa
								quod quia.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default TestimonialsSection;
