import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';

import Header from 'Parts/Header';
import PageDetailTitle from 'Parts/PageDetailTitle';
import FeaturedImage from 'Parts/FeaturedImage';
import PageDetailDescription from 'Parts/PageDetailDescription';
import BookingForm from 'Parts/BookingForm';
import Categories from 'Parts/Categories';
import Testimony from 'Parts/Testimony';
import Footer from 'Parts/Footer';

import itemDetails from 'json/itemDetails.json';
import { checkoutBooking } from '../store/actions/checkout';

class DetailPage extends Component {
	componentDidMount() {
		window.title = 'Details Page';
		window.scrollTo(0, 0);
	}

	render() {
		const breadcrumb = [
			{ pageTitle: 'Home', pageHref: '' },
			{ pageTitle: ' House Details', pageHref: '' },
		];

		return (
			<>
				<Header {...this.props} />
				<PageDetailTitle breadcrumb={breadcrumb} data={itemDetails} />
				<FeaturedImage data={itemDetails.imageUrls} />
				<section className="container">
					<div className="row">
						<Fade bottom>
							<div className="col-7 pr-5">
								<PageDetailDescription data={itemDetails} />
							</div>
							<div className="col-5">
								<BookingForm
									itemDetails={itemDetails}
									startBooking={this.props.checkoutBooking}
								/>
							</div>
						</Fade>
					</div>
				</section>
				<Categories data={itemDetails.categories} />
				<Testimony data={itemDetails.testimonial} />
				<Footer />
			</>
		);
	}
}

export default connect(null, { checkoutBooking })(DetailPage);
