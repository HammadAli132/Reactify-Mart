import CallToAction from "./LandingPage/CallToAction";
import CardGrid from "./LandingPage/CardGrid";
import Hero from "./LandingPage/Hero";
import Solutions from "./LandingPage/Solutions";
import Testimonial from "./LandingPage/Testimonial";
import Works from "./LandingPage/Works";

export default function LandingPage() {
    return (
        <>
            <Hero />
            <Solutions />
            <Works />
            <CardGrid />
            <Testimonial />
            <CallToAction />
        </>
    )
}
