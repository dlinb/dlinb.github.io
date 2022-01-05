import React, { Component } from 'react';
import ReactGA from 'react-ga';
import AdSense from 'react-adsense';

import './styles/index.scss';
import Timer from 'react-compound-timer';
import SoundCard from './components/soundCard';
import Splash from './components/splash';
import MuteAll from './components/muteAll';

// Assets
import iconSoundBird from './images/icon/icon_bird.svg';
import iconSoundCoffee from './images/icon/icon_coffee.svg';
import iconSoundFire from './images/icon/icon_fire.svg';
import iconSoundFountain from './images/icon/icon_fountain.svg';
import iconSoundNight from './images/icon/icon_night.svg';
import iconSoundPlayground from './images/icon/icon_playground2.svg';
import iconSoundRain from './images/icon/icon_rain.svg';
import iconSoundTrain from './images/icon/icon_train.svg';
import iconSoundWaves from './images/icon/icon_waves.svg';
import iconSoundWhiteNoise from './images/icon/icon_whitenoise.svg';
import logoSoundrown from './images/icon/logo_soundrown.svg';
import iconMail from './images/icon/icon_mail.svg';
import iconHome from './images/icon/icon_home.svg';
import iconTwitter from './images/icon/icon_twitter.svg';

class App extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
		};
		ReactGA.initialize('UA-35477640-1');
		ReactGA.pageview(window.location.pathname + window.location.search);
	};

	componentDidMount() {
		window.addEventListener('beforeunload', this.beforeunload.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener('beforeunload', this.beforeunload.bind(this));
	}

	beforeunload() {
		ReactGA.event({
			category: 'Exits',
			action: 'LeavesPage'
		});
	}

	render() {
		return (
			<div>
				<Splash delay="5000" />

				<div className="header">
					<div className="mainlogo">
						<img src={logoSoundrown} alt="SOUNDROWN" />
					</div>

					<div className="timer-container">
						<Timer>
							<Timer.Hours formatValue={(value) => `${(value < 10 ? `0${value}h ` : `${value}h `)}`} />
							<Timer.Minutes formatValue={(value) => `${(value < 10 ? `0${value}m ` : `${value}m `)}`} />
							<Timer.Seconds formatValue={(value) => `${(value < 10 ? `0${value}s ` : `${value}s `)}`} />
						</Timer>
					</div>

					<MuteAll />
				</div>

				<div className="sounds-container">
					<SoundCard
						id="coffee"
						trackId='133634507'
						icon={iconSoundCoffee}
					/>

					<SoundCard
						id="rain"
						trackId='133634506'
						icon={iconSoundRain}
					/>

					<SoundCard
						id="waves"
						trackId='133634513'
						icon={iconSoundWaves}
					/>

					<SoundCard
						id="fire"
						trackId='133634510'
						icon={iconSoundFire}
					/>

					<SoundCard
						id="birds"
						trackId='133634508'
						icon={iconSoundBird}
					/>

					<SoundCard
						id="night"
						trackId='133634511'
						icon={iconSoundNight}
					/>

					<SoundCard
						id="train"
						trackId='133634504'
						icon={iconSoundTrain}
					/>

					<SoundCard
						id="fountain"
						trackId='415247925'
						icon={iconSoundFountain}
					/>

					<SoundCard
						id="whitenoise"
						trackId='133634509'
						icon={iconSoundWhiteNoise}
					/>

					<SoundCard
						id="playground"
						trackId='415247904'
						icon={iconSoundPlayground}
					/>
				</div>

				<div className="ad-container">
					<AdSense.Google
						client='ca-pub-5739077933952279'
						slot='1030414388'
						style={{ display: 'block' }}
						format='auto'
						responsive='true'
						data-adtest='on'
					/>
				</div>

				<section className="about section">
					<h2>About</h2>
					<p>Soundrown was created to help individuals like you, relax and focus while you work on your daily tasks or creative aspirations.  Brought to you by a small and passionate group, interested in creating an experience for everyone to enjoy.</p>
				</section>

				<section className="knowledge section">
					<h2>Why sounds?</h2>
					<a href="http://www.theatlantic.com/health/archive/2012/06/study-of-the-day-why-crowded-coffee-shops-fire-up-your-creativity/258742/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<p>STUDY OF THE DAY: Why Crowded Coffee Shops Fire Up Your Creativity</p>
					</a>
					<a href="http://lifehacker.com/5365012/the-best-sounds-for-getting-work-done"
						target="_blank"
						rel="noopener noreferrer"
					>
						<p>THE BEST SOUNDS: For Getting Work Done</p>
					</a>
					<a href="http://www.mdpi.com/1660-4601/7/3/1036"
						target="_blank"
						rel="noopener noreferrer"
					>
						<p>STRESS RECOVERY: During Exposure to Nature Sound and Environmental Noise</p>
					</a>
					<a href="http://www.apartmenttherapy.com/sleep-better-the-science-of-sound-machines-168208"
						target="_blank"
						rel="noopener noreferrer"
					>
						<p>WHITE NOISE AND YOUR BRAIN: The Science of Sound Machines</p>
					</a>
				</section>

				<section className="team section">
					<h2>Team</h2>
					<div className="team-grid">
						<div className="team-card">
							<div>
								<h3>Rishi Agrawal</h3>
								<p className="role">Founder</p>
							</div>
							<div className="contact">
								<a href="mailto:rishi@soundrown.com" title="rishi@soundrown.com">
									<img src={iconMail} alt="Email" />
								</a>
								<a href="https://twitter.com/rishim3" target="_blank" rel="noopener noreferrer" title="@rishim3">
									<img src={iconTwitter} alt="Twitter" />
								</a>
							</div>
						</div>

						<div className="team-card">
							<div>
								<h3>Joseph Decker</h3>
								<p className="role">Creative</p>
							</div>
							<div className="contact">
								<a href="mailto:joseph@soundrown.com" title="joseph@soundrown.com">
									<img src={iconMail} alt="Email" />
								</a>
								<a href="https://twitter.com/_josephdecker" target="_blank" rel="noopener noreferrer" title="@_josephdecker">
									<img src={iconTwitter} alt="Twitter" />
								</a>
								<a href="http://www.josephdecker.com/" target="_blank" rel="noopener noreferrer" title="www.josephdecker.com">
									<img src={iconHome} alt="Homepage" />
								</a>
							</div>
						</div>

						<div className="team-card">
							<div>
								<h3>Daniel Lin</h3>
								<p className="role">Designer / Developer</p>
							</div>
							<div className="contact">
								<a href="mailto:daniel@soundrown.com" title="daniel@soundrown.com">
									<img src={iconMail} alt="Email" />
								</a>
								<a href="https://twitter.com/daniellinp" target="_blank" rel="noopener noreferrer" title="@daniellinp">
									<img src={iconTwitter} alt="Twitter" />
								</a>
								<a href="http://www.daniel-lin.net" target="_blank" rel="noopener noreferrer" title="www.daniel-lin.net">
									<img src={iconHome} alt="Homepage" />
								</a>
							</div>
						</div>

						<div className="team-card">
							<div>
								<h3>Nathan SooHoo</h3>
								<p className="role">Marketing</p>
							</div>
							<div className="contact">
								<a href="mailto:nathan@soundrown.com" title="nathan@soundrown.com">
									<img src={iconMail} alt="Email" />
								</a>
								<a href="https://twitter.com/nsoohoo" target="_blank" rel="noopener noreferrer" title="@nsoohoo">
									<img src={iconTwitter} alt="Twitter" />
								</a>
							</div>
						</div>
					</div>
				</section>

				<footer>
					<a href="https://twitter.com/soundrown" target="_blank" rel="noopener noreferrer" title="@soundrown">
						<img src={iconTwitter} alt="@soundrown Twitter" />
						Tweet at us!
					</a>
					<a href="https://docs.google.com/spreadsheet/viewform?formkey=dFdqd3VUQnZXSFFMZFYyTWl5NFUtWVE6MQ" target="_blank" rel="noopener noreferrer">
						Have some feedback?
					</a>
					<div id="copyrights"><p>Made with ♥ in San Francisco.&nbsp;&nbsp;Copyright &copy;2020 soundrown</p></div>
				</footer>
			</div>
		);
	}
}
export default App;