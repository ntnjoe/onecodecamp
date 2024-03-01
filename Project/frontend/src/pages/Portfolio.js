import React from "react";
import style from "../styles/portfolio.module.css";
import HTMLIcon from "../assets/html-icon.svg";
import CSSIcon from "../assets/css-icon.svg";
import JSIcon from "../assets/js-icon.svg";
import ReactIcon from "../assets/react-icon.svg";
import VueIcon from "../assets/vue-icon.svg";
import NodeIcon from "../assets/node-icon.svg";
export default function Portfolio() {
	return (
		<>
			<section>
				<div className="section-wrapper">
					<h1 className="display-1">
						Hello World! I am <strong>Joe Natan</strong>
					</h1>
					<h1 className="display-1">
						A Fullstack Web Developer
					</h1>
				</div>
			</section>
			<section>
				<div className="section-wrapper">
					<h1 className="display-1">About Me</h1>
					<p className="display-6">
						Lorem ipsum dolor sit amet, consectetur
						adipisicing elit. Voluptas reiciendis
						consequatur quaerat recusandae dolore nisi
						natus rem voluptate iure veniam enim, sunt
						aspernatur asperiores error laudantium in
						possimus quos alias mollitia obcaecati eum
						quod repudiandae. Quisquam suscipit molestiae
						eum magni quo temporibus voluptatem ab sunt
						deserunt, delectus cum debitis quibusdam.
					</p>
				</div>
			</section>
			<section>
				<div
					className={`section-wrapper ${style.techStackWrapper}`}>
					<h1 className="display-1">My Tech Stack</h1>
					<div className={style.iconsContainer}>
						<div className={style.iconWrapper}>
							<img src={HTMLIcon} alt="" />
						</div>
						<div className={style.iconWrapper}>
							<img src={CSSIcon} alt="" />
						</div>
						<div className={style.iconWrapper}>
							<img src={JSIcon} alt="" />
						</div>
						<div className={style.iconWrapper}>
							<img src={ReactIcon} alt="" />
						</div>
						<div className={style.iconWrapper}>
							<img src={VueIcon} alt="" />
						</div>
						<div className={style.iconWrapper}>
							<img src={NodeIcon} alt="" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
