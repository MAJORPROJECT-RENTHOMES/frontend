import React, { useContext } from 'react'
import "./css/Team.css";
import pic from "../images/bc1.jpeg"
import pic2 from "../images/bc1.jpeg"
import pic3 from "../images/bc1.jpeg"
import pic4 from "../images/bc1.jpeg"
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const AboutUs = () => {
  return (

    <section class="section-white">

      <div class="">

        <div class="row">

          <div class="col-md-12 text-center">

            <h2 class="section-title">The Team Behind Homezy</h2>
            <p className="teamText">Our team created the Homezy app to make it easier for students to find and buy hostel rooms or PG accommodations. Through our hard work and specialized knowledge, we aimed to remove the hassle and uncertainties that students often face when looking for suitable accommodation. The Homezy app is the result of our dedication, expertise, and commitment to making the process of finding and securing housing as smooth and stress-free as possible for students.</p>
          </div>

          <div class="col-sm-6 col-md-3">


            <div class="team-item">

              <img id="tejasimg" src={pic} alt="priyanshu" class="team-img" />
              <h3>Frontend Developer</h3>
              <div class="team-info"><p>Priyanshu Trivedi</p></div>
              {/* <p>  To get in touch with me , click on the button below :- </p> */}

              <ul class="team-icon">
                <li><a href="https://www.linkedin.com/in/priyanshu-trivedi-517250211/" class="linkedin">
                  <i class="fa fa-linkedin"></i>
                </a></li>
              </ul>


            </div>
          </div>
          <div class="col-sm-6 col-md-3">

            <div class="team-item">

            <img id="nayanimg" src={pic4} alt="nayan" class="team-img" />
              <h3>Backend Developer</h3>
              <div class="team-info"><p>Nayan Gupta</p></div>
              {/* <p>To get in touch with me , click on the button below</p> */}

              <ul class="team-icon">

                <li><a href="https://www.linkedin.com/in/nayan-gupta-86b782191" class="linkedin">
                  <i class="fa fa-linkedin"></i>
                </a></li>
              </ul>


            </div>
          </div>
          <div class="col-sm-6 col-md-3">

            <div class="team-item">

              <img id="badriimg" src={pic2} alt="Nakshatra" class="team-img" />
              <h3>Frontend Developer</h3>
              <div class="team-info"><p>Nakshatra</p></div>
              {/* <p>To get in touch with me , click on the button below.</p> */}

              <ul class="team-icon">

                <li><a href="https://www.linkedin.com/in/nakxtra/" class="linkedin">
                  <i class="fa fa-linkedin"></i>
                </a></li>
              </ul>


            </div>
          </div>
          <div class="col-sm-6 col-md-3">


            <div class="team-item">

              <img id="tejasimg" src={pic} alt="vipul" class="team-img" />
              <h3>Frontend Developer</h3>
              <div class="team-info"><p>Vipul Gupta</p></div>
              {/* <p>  To get in touch with me , click on the button below :- </p> */}

              <ul class="team-icon">
                <li><a href="https://www.linkedin.com/in/vipul-gupta-70b9a6206/" class="linkedin">
                  <i class="fa fa-linkedin"></i>
                </a></li>
              </ul>


            </div>
          </div>
          <div class="col-sm-6 col-md-3">

            <div class="team-item">

              <img id="shubhimg" src={pic3} alt="shubh" class="team-img" />
              <h3>ML Developer </h3>
              <div class="team-info"><p>Shubh gupta</p></div>
              {/* <p>To get in touch with me , click on the button below</p> */}

              <ul class="team-icon">

                <li><a href="https://www.linkedin.com/in/shubh-gupta06/" class="linkedin">
                  <i class="fa fa-linkedin"></i>
                </a></li>
              </ul>


            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default AboutUs