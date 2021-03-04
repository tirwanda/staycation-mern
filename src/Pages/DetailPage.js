import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';

import Header from 'Parts/Header';
import PageDetailTitle from 'Parts/PageDetailTitle';
import FeaturedImage from 'Parts/FeaturedImage';
import PageDetailDescription from 'Parts/PageDetailDescription';
import BookingForm from 'Parts/BookingForm';
import Activities from 'Parts/Activities';
import Testimony from 'Parts/Testimony';
import Footer from 'Parts/Footer';

import { checkoutBooking } from '../store/actions/checkout';
import { fetchPage } from 'store/actions/page';

class DetailPage extends Component {
	componentDidMount() {
		document.title = 'Details Page';
		window.scrollTo(0, 0);

		if (!this.props.page[this.props.match.params.id])
			this.props.fetchPage(
				`/itemDetail/${this.props.match.params.id}`,
				this.props.match.params.id
			);
	}

	render() {
		const { page, match } = this.props;

		if (!page[match.params.id]) return null;
		const breadcrumb = [
			{ pageTitle: 'Home', pageHref: '' },
			{ pageTitle: ' House Details', pageHref: '' },
		];

		return (
			<>
				<Header {...this.props} />
				<PageDetailTitle
					breadcrumb={breadcrumb}
					data={page[match.params.id]}
				/>
				<FeaturedImage data={page[match.params.id].imageId} />
				<section className="container">
					<div className="row">
						<Fade bottom>
							<div className="col-7 pr-5">
								<PageDetailDescription
									data={page[match.params.id]}
								/>
							</div>
							<div className="col-5">
								<BookingForm
									itemDetails={page[match.params.id]}
									startBooking={this.props.checkoutBooking}
								/>
							</div>
						</Fade>
					</div>
				</section>
				<Activities data={page[match.params.id].activityId} />
				<Testimony data={page[match.params.id].testimonial} />
				<Footer />
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	page: state.page,
});

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(
	DetailPage
);
