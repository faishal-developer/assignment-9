// components/SurveyOverview.js
import style from './home.module.scss'
const SurveyOverview = () => {
  return (
    <section className={style.survey_overview}>
      <h2>Survey and Overview</h2>
      <p>
        We value your feedback. Please take a moment to complete our survey and let us know about your recent repair
        experience with us. Your input helps us improve our services.
      </p>
      <a href='/survey' className={style.btn_primary}>
        Ask a question
      </a>
      <p>
        <strong>Our Repair Process Overview:</strong>
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id feugiat arcu, ac accumsan neque. Sed
        tincidunt felis ac justo scelerisque, in consectetur neque consequat. Curabitur euismod tellus a velit malesuada.
      </p>
    </section>
  );
};

export default SurveyOverview;
