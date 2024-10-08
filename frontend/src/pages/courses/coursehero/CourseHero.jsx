import "./coursehero.scss";

const CourseHero = ({ courseInfor }) => {
  return (
    <div className="course-hero">
      <div className="course-title">
        <h1>{courseInfor.title}</h1>
      </div>
      <div className="course-title-des">
        <p>{courseInfor.about}</p>
      </div>

      <div className="course-info">
        <div className="course-img">
          <img src={courseInfor.img} alt={courseInfor.title} />
        </div>
        <div className="c-info">
          <div className="hour">
            <p>
              30+ hours of <br /> content
            </p>
          </div>
          <div className="enroll">Enroll Now</div>
        </div>
      </div>
    </div>
  );
};

export default CourseHero;
