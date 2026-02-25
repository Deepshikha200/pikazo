import React from "react";
import CommonButton from "../../../common/CommonButton/CommonButton";

const ShowDetails = ({ onBack, details }) => {
  if (!details) return null;

  const { name, courseLines, duration, batch, certificateId, status, issued } =
    details;

  return (
    <section className="certificate">
      <div className="certificate-result">
        <h3 className="certificate-result__title">Result Card</h3>

        <div className="certificate-result__table-wrapper">
          <p className="certificate-result__table-label">Table 1</p>

          <div className="table-responsive certificate-result__table-responsive">
            <table className="table table-bordered certificate-result__table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Course</th>
                  <th>Duration</th>
                  <th>Batch</th>
                  <th>Certificate ID</th>
                  <th>Status</th>
                  <th>Issued</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{name}</td>
                  <td>
                    {courseLines?.map((line, index) => (
                      <span key={index}>
                        {line}
                        {index !== courseLines.length - 1 && <br />}
                      </span>
                    ))}
                  </td>
                  <td>{duration}</td>
                  <td>{batch}</td>
                  <td>{certificateId}</td>
                  <td>{status}</td>
                  <td>{issued}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <CommonButton
          type="button"
          text="Back"
          className="certificate-result__back-btn"
          onClick={onBack}
        />
      </div>
    </section>
  );
};

export default ShowDetails;
