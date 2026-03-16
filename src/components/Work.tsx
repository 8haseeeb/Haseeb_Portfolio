import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Tin Express Logistics Platform",
    category: "Full Stack Development",
    description: "Worked as a Full Stack Web Developer, contributing to the design, development, and deployment of complete web solutions. Built 3 full-stack CRUD applications (Contact, Order, and Phone Management) from scratch and implemented 6 production-ready UI pages: My Shipment, Rejected Parcel, Address Book, Save Package, Manage User, and Support.",
    tools: "Angular, .NET, MySQL, Tailwind CSS, Git, Figma",
    images: [
      "/images/tinexpress_dashboard.png",
      "/images/tinexpress_shipments.png",
      "/images/tinexpress_booking.png",
      "/images/tinexpress_support.png",
    ],
  },
  {
    title: "Promotion Management System",
    category: "Scalable Backend",
    description: "Architected a complete Promotion Management System with high-performance API design and observability. Implemented Clean Architecture with CQRS and MediatR. Focused on scalable system design, SSO integration, and custom API Gateways.",
    tools: ".NET 8/9, Clean Architecture, CQRS, MediatR, Azure, Redis",
    images: [
      "/images/promo_login.png",
      "/images/promo_dashboard.png",
      "/images/promo_list.png",
      "/images/promo_details.png",
      "/images/promo_create.png",
    ],
  },
  {
    title: "Custom API Gateway",
    category: "Microservices Infrastructure",
    description: "Designed and implemented a high-performance API Gateway from scratch using ASP.NET Core. Centralizes cross-cutting concerns: Dynamic Routing (DownstreamProxy), JWT Security enforcement, Resilience via Polly (Retry/Circuit Breaker), and Distributed Tracing (Correlation IDs).",
    tools: "ASP.NET Core, Polly, Serilog, JWT, Microservices Architecture",
    images: [
      "/images/gateway_proxy.png",
      "/images/gateway_correlation.png",
      "/images/gateway_security.png",
    ],
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setCurrentImgIndex(0); // Reset gallery index on project change
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const nextImg = (e: React.MouseEvent, max: number) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === max - 1 ? 0 : prev + 1));
  };

  const prevImg = (e: React.MouseEvent, max: number) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? max - 1 : prev - 1));
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content-vertical">
                    <div className="carousel-header">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-titles">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>
                      </div>
                    </div>

                    <div className="carousel-image-gallery">
                      <div
                        className="gallery-track"
                        style={{ transform: `translateX(-${currentImgIndex * 100}%)` }}
                      >
                        {project.images.map((img, i) => (
                          <div className="gallery-slide" key={i}>
                            <WorkImage image={img} alt={`${project.title} ${i}`} />
                          </div>
                        ))}
                      </div>

                      {project.images.length > 1 && (
                        <>
                          <button className="gallery-arrow left" onClick={(e) => prevImg(e, project.images.length)}>
                            <MdArrowBack />
                          </button>
                          <button className="gallery-arrow right" onClick={(e) => nextImg(e, project.images.length)}>
                            <MdArrowForward />
                          </button>
                          <div className="gallery-dots">
                            {project.images.map((_, i) => (
                              <div key={i} className={`gallery-dot ${i === currentImgIndex ? "active" : ""}`} />
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    <div className="carousel-footer">
                      <div className="carousel-description">
                        <p>{project.description}</p>
                      </div>
                      <div className="carousel-tools-modern">
                        <h5>Technologies</h5>
                        <p>{project.tools}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="carousel-controls-modern">
            <button
              className="carousel-arrow-modern"
              onClick={goToPrev}
              data-cursor="disable"
            >
              <MdArrowBack />
              <span className="btn-label">PREV PROJECT</span>
            </button>

            <div className="carousel-dots-modern">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot-modern ${index === currentIndex ? "active" : ""}`}
                  onClick={() => goToSlide(index)}
                  data-cursor="disable"
                />
              ))}
            </div>

            <button
              className="carousel-arrow-modern"
              onClick={goToNext}
              data-cursor="disable"
            >
              <span className="btn-label">NEXT PROJECT</span>
              <MdArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Work;
