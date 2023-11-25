import Banner from "@/components/Home/banner";
import style from './homePage.module.scss';
import Services from "@/components/Home/Services";
import EventsByCategory from "@/components/Home/EventsByCategory";
import events from '../../../fakeData/events.json';
import SurveyOverview from "@/components/Home/surveyOverview";
import ClientReviews from "@/components/Home/ClientReviews";
import Blogs from "@/components/Home/Blog";
import ContactUs from "@/components/Home/ContactUs";

const HomePage = () => {
    return (
        <div className={style.home}>
            <Banner/>
            <Services/>
            <div className={'eventSurveyContainer'}>
                <EventsByCategory events={events}/>
                <SurveyOverview/>
            </div>
            <ClientReviews/>
            <Blogs/>
            <ContactUs/>
        </div>
    );
};

export default HomePage;