import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import Header from "../components/Header";
import { findOneJob } from "../api/ApiService";
import { formatDistance } from "date-fns";

const Details = ({ jobId }) => {
  console.log(`Job id`, jobId);
  const [loading, setLoading] = useState(false);
  const [job, setJob] = useState(null);

  const getJobDetail = async () => {
    setLoading(true);
    try {
      const job = await findOneJob(jobId);
      setJob(job);
      setLoading(false);
      console.log(`Job`, job);
    } catch (e) {
      console.log(`Error`, e);
      setLoading(false);
    }
  };

  useEffect(() => {
    getJobDetail();
  }, []);

  return (
    <>
      <Header />
      {job && (
        <React.Fragment>
          <div className="details-container">
            <div className="details-sidebar">
              <Link className="details-sidebar__back-link" to="/">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.35 11.65L5.14 8.86003C5.46 8.54003 6 8.76003 6 9.21003V11H20C20.55 11 21 11.45 21 12C21 12.55 20.55 13 20 13H6V14.79C6 15.24 5.46 15.46 5.15 15.14L2.36 12.35C2.16 12.16 2.16 11.84 2.35 11.65Z"
                    fill="#1E86FF"
                  />
                </svg>
                Back to search
              </Link>

              <h3>How to Apply</h3>

              <div
                className="howto"
                dangerouslySetInnerHTML={{ __html: job.how_to_apply }}
              ></div>
            </div>
            <div className="details-content">
              <h1>{job.title}</h1>
              <div className="custom-label">{job.type}</div>
              <div className="job-date">
                <div className="icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.9925 1.5C4.8525 1.5 1.5 4.86 1.5 9C1.5 13.14 4.8525 16.5 8.9925 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 8.9925 1.5ZM9 15C5.685 15 3 12.315 3 9C3 5.685 5.685 3 9 3C12.315 3 15 5.685 15 9C15 12.315 12.315 15 9 15ZM8.835 5.25H8.79C8.49 5.25 8.25 5.49 8.25 5.79V9.33C8.25 9.5925 8.385 9.84 8.6175 9.975L11.73 11.8425C11.985 11.9925 12.315 11.9175 12.465 11.6625C12.6225 11.4075 12.54 11.07 12.2775 10.92L9.375 9.195V5.79C9.375 5.49 9.135 5.25 8.835 5.25Z"
                      fill="#B7BCCE"
                    />
                  </svg>
                </div>
                <time dateTime={job.created_at}>
                  {formatDistance(new Date(job.created_at), new Date())}
                </time>
              </div>
              <div className="company-details">
                {job.company_logo && (
                  <img src={job.company_logo} alt="company logo" />
                )}
                <div className="meta">
                  <h4>{job.company}</h4>
                  <div className="job-location">
                    <div className="icon">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 2C4.86 2 1.5 5.36 1.5 9.5C1.5 13.64 4.86 17 9 17C13.14 17 16.5 13.64 16.5 9.5C16.5 5.36 13.14 2 9 2ZM8.25 15.4475C5.2875 15.08 3 12.56 3 9.5C3 9.035 3.06 8.5925 3.1575 8.1575L6.75 11.75V12.5C6.75 13.325 7.425 14 8.25 14V15.4475ZM13.425 13.5425C13.23 12.935 12.675 12.5 12 12.5H11.25V10.25C11.25 9.8375 10.9125 9.5 10.5 9.5H6V8H7.5C7.9125 8 8.25 7.6625 8.25 7.25V5.75H9.75C10.575 5.75 11.25 5.075 11.25 4.25V3.9425C13.4475 4.835 15 6.9875 15 9.5C15 11.06 14.4 12.4775 13.425 13.5425Z"
                          fill="#B9BDCF"
                        />
                      </svg>
                    </div>
                    {job.location}
                  </div>
                </div>
              </div>
              <div
                className="job-description"
                dangerouslySetInnerHTML={{ __html: job.description }}
              ></div>
            </div>
          </div>
        </React.Fragment>
      )}
    </>
  );
};

export default Details;
