import React from 'react';
import Fade from 'react-reveal/Fade';

import Star from 'elements/Star';
import TestimonyAccent from 'assets/images/testimonial-landingpages-frame.jpg';
import Button from 'elements/Button';

export default function Testimony({ data }) {
	return (
		<Fade>
			<section className="container">
				<div className="row align-item-center">
					<Fade left delay={300}>
						<div className="col-auto" style={{ marginRight: 70 }}>
							<div
								className="testimonial-hero"
								style={{ margin: '30px 0 0 30px' }}
							>
								<img
									className="position-absolute"
									src={`${process.env.REACT_APP_HOST}/${data.imageUrl}`}
									alt="Testimonial"
									style={{ zIndex: 1 }}
								/>

								<img
									className="position-absolute"
									src={TestimonyAccent}
									alt="Testimonial frame"
									style={{ margin: `-30px 0 0 -30px` }}
								/>
							</div>
						</div>
					</Fade>
					<Fade right delay={600}>
						<div className="col">
							<h4 style={{ marginBottom: 40 }}>{data.name}</h4>
							<Star
								value={data.rate}
								width={35}
								height={35}
								spacing={4}
							></Star>
							<h5 className="h2 font-weight-light line-height-2 my-3">
								{data.content}
							</h5>
							<span className="text-gray-500">
								{data.familyName}, {data.familyOccupation}
							</span>
							<div>
								<Button
									className="btn px-5"
									style={{ marginTop: 40 }}
									hasShadow
									isPrimary
									type="link"
									href={`/testimonial/${data._id}`}
								>
									Read Their Story
								</Button>
							</div>
						</div>
					</Fade>
				</div>
			</section>
		</Fade>
	);
}
