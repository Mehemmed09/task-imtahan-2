import React from "react";
import "./Sectiontwo.scss";
const Sectiontwo = () => {
	return (
		<>
			<section className="SectionTwo">
				<div className="container">
					<div className="row">
						<div className="SectionItems">
							<div className="col-md-6 p-b-30">
								<span>Italian Restaurant</span>
								<h3>WELCOME</h3>
								<p>
									Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.
								</p>
							</div>
							<div className="col-md-6 p-b-30">
								<img src="https://preview.colorlib.com/theme/pato/images/our-story-01.jpg" alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Sectiontwo;
