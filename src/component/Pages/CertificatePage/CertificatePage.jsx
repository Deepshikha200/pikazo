import React from "react";
import { Form } from "react-bootstrap";
import CustomInput from "../../../common/UI/CustomInput/CustomInput";
import CommonButton from "../../../common/CommonButton/CommonButton";
import img1 from "../../../assets/images/certicate1.png";
import img2 from "../../../assets/images/certicate2.png";
import img3 from "../../../assets/images/certicate3.png";
import img4 from "../../../assets/images/certicate4.png";
import img5 from "../../../assets/images/certicate5.png";
import img6 from "../../../assets/images/certicate6.png";
import img7 from "../../../assets/images/certicate7.png";
// css
import "./CertificatePage.scss";

const CertificatePage = () => {
  const certificateImg = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <section className="certificate">
      <h2>Certificate Verification</h2>
      <Form>
        <CustomInput placeholder="Enter your Registration no. / Unique id" />
        <CommonButton type="submit" text="Submit" />
      </Form>

      <div className="certificateImg">
        {certificateImg.map((item, index) => (
          <img src={item} alt="certificateImg" key={index} loading="lazy" />
        ))}
      </div>
    </section>
  );
};

export default CertificatePage;
