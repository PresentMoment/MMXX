import React from "react";

import logo from "./assets/mmxx_logo.png";

import MailchimpSubscribe from "react-mailchimp-subscribe";

function Contact() {
  return (
    <div className="content">
      <span style={{ height: "2rem" }} />
      <p>
        <span style={{ height: "1rem" }} />
        <span /> MMXX
        <span /> Via Donatello 35 <span /> 20131 MILANO{" "}
        <span style={{ height: "1rem" }} />
        <span style={{ height: "1rem" }} /> Open by appointment only
        <span style={{ height: "1rem" }} /> <span style={{ height: "1rem" }} />
        <a href="mailto:mmxx.posta@gmail.com">mmxx.posta@gmail.com</a>
        <span style={{ height: "1rem" }} />
        <a href="tel:+39 346 811 69 78">EM +39 346 8116978</a> <span />{" "}
        <a href="tel:+39 333 815 14 11">DM +39 333 8151411</a>{" "}
        <span style={{ height: "3rem" }} />
        Newsletter
      </p>
      <MailchimpSubscribe
        url={
          "https://tumblr.us12.list-manage.com/subscribe/post?u=188da0c81d3a59e2d5bbae1fd&amp;id=5cbf52a839"
        }
      />
    </div>
  );
}

export default Contact;
