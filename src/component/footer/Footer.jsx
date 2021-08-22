import React from "react";
import "./footer.scss";
// import {
//   UilLayersAlt,
//   UilAngleRight,
//   UilTimes,
//   UilCheckCircle,
// 	UilBracketsCurly,
// 	UilFileCheck,
// 	UilHeartRate
// } from "@iconscout/react-unicons";

function Footer() {
  const [modalOne, setModalOne] = useState(false);
  const [modalTwo, setModalTwo] = useState(false);
  const [modalThree, setModalThree] = useState(false);
  const [modalFour, setModalFour] = useState(false);

  const handleModal = () => {
    modalOne === true && setModalOne(false);
    modalTwo === true && setModalTwo(false);
    modalThree === true && setModalThree(false);
    modalFour === true && setModalFour(false);
  };

  // onClick={() => setModalFour(false) }

  return (
    <section className="footer section">
      <div>&copy; 2021. How time flies</div>
    </section>
  );
}

export default Footer;
