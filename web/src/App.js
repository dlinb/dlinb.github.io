import React from 'react';
import './styles/index.scss';
import './js/soundrown_script';
import ReactPlayer from 'react-player'
import SoundCard from './components/soundCard';

// Assets
import iconLeftChevron from './images/icon/icon_left.svg';
import iconMenu from './images/icon/icon_menu.svg';
import iconMusic from './images/icon/icon_music.svg';
import iconMute from './images/icon/icon_mute.svg';
import iconPause from './images/icon/icon_pause.svg';
import iconRandom from './images/icon/icon_random.svg';
import iconRightChevron from './images/icon/icon_right.svg';
import iconscPause from './images/icon/icon_scPause.svg';
import iconscPlay from './images/icon/icon_scPlay.svg';
import iconSearch from './images/icon/icon_search.svg';
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
import iconTwitter from './images/icon/icon_twitter.svg';
import iconVolume from './images/icon/icon_sound_blue.svg';
import logoSoundcloud from './images/icon/logo_soundcloud.png';
import logoSoundrown from './images/icon/logo_soundrown.svg';

function App() {
	return (
		<div>

			{/* <!-- Splash Screen --> */}
			<div className="splash-container">
				<div className="splash-content">
					<div className="splash-logo-block">
						<p className="splash-logo">SOUNDROWN</p>
					</div>
					<p className="splash-text">relax. focus. escape.</p>
				</div>
			</div>

			{/* <!-- Main Logo --> */}
			<div className="mainlogo">
				<img src={logoSoundrown} alt="SOUNDROWN" />
			</div>

			{/* <!-- Mute Button --> */}
			{/* <div id="mute-frame">
				<div className="mute">
					<img src={iconMute} alt="Mute Button" />
					<span>Mute</span>
				</div>
			</div> */}

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
					trackId='133634506'
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

			{/* <!-- Nav --> */}

			<div id="navcontainer">
				<nav>
					<ul>
						{/* <!-- Menu Button --> */}
						<li id="menu"><a href="/#">
							<img src={iconMenu} alt="About" />
							<span>Menu</span>
						</a>

							<div id="menudrop">
								{/* <!-- Menu Sub-Nav --> */}
								<div id="menunav">
									<ul>
										<li id="aboutbut"><p>About</p></li>
										<li id="knowledgebut"><p>Knowledge</p></li>
										<li id="creditsbut"><p>Credits</p></li>
									</ul>
								</div>

								{/* <!-- About Body --> */}
								<div id="aboutdesc">
									<img src={logoSoundrown} alt="Soundrown" />
									<p>___________</p><br />
									<p>Soundrown was created to help individuals like you, relax and focus while you work on your daily tasks or creative aspirations.  Brought to you by a small and passionate group, interested in creating an experience for everyone to enjoy.</p>
								</div>

								{/* <!-- Knowledge Body --> */}
								<div id="knowledgedesc">
									<ol>
										<li>
											<a href="http://www.theatlantic.com/health/archive/2012/06/study-of-the-day-why-crowded-coffee-shops-fire-up-your-creativity/258742/"
												target="_blank"
												rel="noopener noreferrer"
											>
												<h2>STUDY OF THE DAY:</h2>
												<p>_____</p>
												<br />
												<p>Why Crowded Coffee Shops Fire Up Your Creativity</p>
											</a>
										</li>
										<li>
											<a href="http://lifehacker.com/5365012/the-best-sounds-for-getting-work-done"
												target="_blank"
												rel="noopener noreferrer"
											>
												<h2>THE BEST SOUNDS:</h2>
												<p>_____</p>
												<br />
												<p>For Getting Work Done</p>
											</a>
										</li>
										<li>
											<a href="http://www.mdpi.com/1660-4601/7/3/1036"
												target="_blank"
												rel="noopener noreferrer"
											>
												<h2>STRESS RECOVERY:</h2>
												<p>_____</p>
												<br />
												<p>During Exposure to Nature Sound and Environmental Noise</p>
											</a>
										</li>
										<li>
											<a href="http://www.apartmenttherapy.com/sleep-better-the-science-of-sound-machines-168208"
												target="_blank"
												rel="noopener noreferrer"
											>
												<h2>WHITE NOISE AND YOUR BRAIN:</h2>
												<p>_____</p>
												<br />
												<p>The Science of Sound Machines</p>
											</a>
										</li>
									</ol>
								</div>

								{/* <!-- Credits Body --> */}
								<div id="creditsdesc">

									<div className="nametag">
										<div>
											<h2>RISHI AGRAWAL</h2>
											<p>_____</p>
											<br />
											<p className="role">Founder</p>
										</div>
										<div className="contact">
											<a href="mailto:rishi@soundrown.com" title="rishi@soundrown.com">
												<img src="icon/icon_mail.svg" />
											</a>
											<a href="https://twitter.com/rishim3" target="_blank" rel="noopener noreferrer" title="@rishim3">
												<img src="icon/icon_twitter.svg" />
											</a>
										</div>
									</div>

									<div className="nametag">
										<div>
											<h2>JOSEPH DECKER</h2>
											<p>_____</p>
											<br />
											<p className="role">Creative</p>
										</div>
										<div className="contact">
											<a href="mailto:joseph@soundrown.com" title="joseph@soundrown.com">
												<img src="icon/icon_mail.svg" />
											</a>
											<a href="https://twitter.com/_josephdecker" target="_blank" rel="noopener noreferrer" title="@_josephdecker">
												<img src="icon/icon_twitter.svg" />
											</a>
											<a href="http://www.josephdecker.com/" target="_blank" rel="noopener noreferrer" title="www.josephdecker.com">
												<img src="icon/icon_home.svg" />
											</a>
										</div>
									</div>

									<div className="nametag">
										<div>
											<h2>DANIEL LIN</h2>
											<p>_____</p><br />
											<p className="role">Developer</p>
										</div>
										<div className="contact">
											<a href="mailto:daniel@soundrown.com" title="daniel@soundrown.com">
												<img src="icon/icon_mail.svg" />
											</a>
											<a href="https://twitter.com/daniellinp" target="_blank" rel="noopener noreferrer" title="@daniellinp">
												<img src="icon/icon_twitter.svg" />
											</a>
											<a href="http://www.daniel-lin.net" target="_blank" rel="noopener noreferrer" title="www.daniel-lin.net">
												<img src="icon/icon_home.svg" />
											</a>
										</div>
									</div>

									<div className="nametag">
										<div>
											<h2>NATHAN SOOHOO</h2>
											<p>_____</p><br />
											<p className="role">Marketing</p>
										</div>
										<div className="contact">
											<a href="mailto:nathan@soundrown.com" title="nathan@soundrown.com">
												<img src="icon/icon_mail.svg" />
											</a>
											<a href="https://twitter.com/nsoohoo" target="_blank" rel="noopener noreferrer" title="@nsoohoo">
												<img src="icon/icon_twitter.svg" />
											</a>
										</div>
									</div>
								</div>

							</div>
						</li>

						{/* <!-- Music Button --> */}
						<li id="music">
							<a href="#">
								<img src={iconMusic} alt="Music" />
								<span>Music</span>
							</a>

							<div>
								<div id="sc-playpause">
									<img id="scPlay" src={iconscPlay} alt="SC Play" />
									<img id="scPause" src={iconscPause} alt="SC Pause" />
								</div>

								<div id="sc-progress">
									<div id="sc-title">Clair de lune - Debussy</div>

									<div id="sc-progress_bar_bg"></div>
									<div id="sc-progress_bar"></div>

									<div id="sc-time">
										<div id="sc-time_elapsed">0:00</div>
										<div id="sc-time_total">5:58</div>
									</div>
								</div>

								<div id="sc-volume">
									<img src={iconVolume} alt="SC-Volume" />

									<div id="sc-volume_bg"></div>
									<div id="sc-volume_slider"></div>
								</div>
							</div>

							<div>
								<div id="logo-soundcloud">
									<a href="https://soundcloud.com/" target="_blank" rel="noopener noreferrer"><img src={logoSoundcloud} alt="Soundcloud" /></a>
								</div>

								<div id="search-button"><img src={iconSearch} alt="Search" /></div>

								<form id="search-frame" onSubmit="return false;">
									<input id="search" type="text" name="Search" placeholder="Search..." />
									<ul id="results"></ul>
								</form>
							</div>

						</li>

						{/* <!-- Random Button --> */}
						<li id="random">
							<a href="#"><img src={iconRandom} alt="Random" />
								<span>Random</span>
							</a>
						</li>

						{/* <!-- Twitter Button --> */}
						<li id="twitter">
							<a href="https://twitter.com/intent/tweet?url=http%3A%2F%2Fsoundrown.com&text=relax.+focus.+escape.&via=soundrown" target="_blank" rel="noopener noreferrer">
								<img src={iconTwitter} alt="Tweet Us" />
								<span>Tweet Us</span>
							</a>
						</li>

						{/* <!-- Suggest Button --> */}
						<li id="suggest">
							<a href="https://docs.google.com/spreadsheet/viewform?formkey=dFdqd3VUQnZXSFFMZFYyTWl5NFUtWVE6MQ" target="_blank" rel="noopener noreferrer">
								<img src="icon/icon_suggest.svg" alt="Improve Us" />
								<span>Improve Us</span>
							</a>
						</li>

					</ul>
				</nav>
			</div>

			{/* <!-- Stopwatch --> */}
			{/* <span id="stopwatch">00h 00m 00s</span> */}

			{/* <div id="soundcloud-player"> */}
			{/* <!-- default height 166 --> */}
			{/* <iframe id="scplayer" width="900" height="0" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/73594607&color=ff932b&show_artwork=false"></iframe> */}
			{/* </div> */}
		</div>
	);
}

export default App;
