import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Developer</h4>
                <h5>Convo</h5>
              </div>
              <h3>NOV 2025 - PRESENT</h3>
            </div>
            <p>
              Developed a complete Promotion Management System project using .NET 8/9,
              Clean Architecture, and Microservices. Focused on scalable API design,
              observability, and Azure cloud integration.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Web Developer</h4>
                <h5>Truck It In</h5>
              </div>
              <h3>JULY '25 - SEPT '25</h3>
            </div>
            <p>
              Built full-stack CRUD apps for Order & Phone Management systems. Developed
              responsive Angular components and robust .NET Core backend services for
              the Tin Express platform.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Android Head</h4>
                <h5>Taxilians Robotics & Automation Club</h5>
              </div>
              <h3>MAY '24 - JUNE '25</h3>
            </div>
            <p>
              Led the mobile development team in creating Android applications for
              robotics control and monitoring. Focused on low-latency communication
              between hardware and mobile interfaces.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Agronomics Pvt. Ltd.</h5>
              </div>
              <h3>FEB '22 - MARCH '22</h3>
            </div>
            <p>
              Contributed to the development of web-based agricultural tracking
              solutions. Built responsive UI components using React and optimized
              frontend performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
