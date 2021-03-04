import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from 'Parts/Header';
// import landingPage from 'json/landingPage.json'
import Hero from 'Parts/Hero';
import MostPicked from 'Parts/MostPicked';
import Categories from 'Parts/Categories';
import Testimony from 'Parts/Testimony';
import Footer from 'Parts/Footer';

import { fetchPage } from 'store/actions/page';

class LandingPage extends Component {
	constructor(props) {
		super(props);
		this.refMostPicked = React.createRef();
	}

	componentDidMount() {
		document.title = 'Staycation | Home';
		window.scrollTo(0, 0);

		if (!this.props.page.landingPage)
			this.props.fetchPage(`/landingPage`, 'landingPage');
	}

	render() {
		const { page } = this.props;
		if (!page.hasOwnProperty('landingPage')) return null;
		return (
			<>
				<Header {...this.props}></Header>
				<Hero
					refMostPicked={this.refMostPicked}
					data={page.landingPage.hero}
				/>
				<MostPicked
					refMostPicked={this.refMostPicked}
					data={page.landingPage.mostPicked}
				/>
				<Categories data={page.landingPage.category} />
				<Testimony data={page.landingPage.testimonial} />
				<Footer />
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(LandingPage);
