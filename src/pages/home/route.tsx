import About from "./sections/about/About"
import { Dashboard } from "./sections/dashboard/Dashboard"
import Events from "./sections/events/Events"
import FAQ from "./sections/faq/Faq"
import Footer from "./sections/footer/Footer"
import MeetOurTeam from "./sections/meet-our-team/MeetOurTeam"
import Stats from "./sections/stats/Stats"
import Timeline from "./sections/timeline/Timeline"
import WhySection from "./sections/whySection/WhySection"

export const HomeRoute = () => {
	return (
		<div className="w-full min-h-screen bg-[#131313]">
<<<<<<< HEAD
		<Dashboard /> 
		<WhySection/>
		<Stats />
		<Timeline />
		<Events/>
		<div className="h-[30vh]"/>
		<About/>
		<MeetOurTeam/>
		<Footer />
		
=======
			<Dashboard />
			<WhySection />
			<Events />
			<div className="h-[10vh] md:h-[30vh]" />
			<About />
			<FAQ />
			{/* <MeetOurTeam /> */}
			<Footer />

>>>>>>> 2c55f81f1c62648816a37f394fe4f69d78e8957d
		</div>
	)
}
