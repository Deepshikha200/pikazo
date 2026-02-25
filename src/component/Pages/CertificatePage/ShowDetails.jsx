import React from "react";
import CommonButton from "../../../common/CommonButton/CommonButton";

const ShowDetails = ({ onBack }) => {
  return (
    <section className="certificate">
      <h2>Certificate Verification</h2>

      <div className="certificate-result">
        <h3 className="certificate-result__title">Result Card</h3>

        <div className="certificate-result__table-wrapper">
          {/* <p className="certificate-result__table-label">Table 1</p> */}

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
                  <td>Yashica Chopra</td>
                  <td>
                    Diploma in
                    <br />
                    Computer
                    <br />
                    Application
                  </td>
                  <td>12 Months</td>
                  <td>2024-25</td>
                  <td>CA/168/PK/5</td>
                  <td>Verified</td>
                  <td>05/11/2025</td>
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

