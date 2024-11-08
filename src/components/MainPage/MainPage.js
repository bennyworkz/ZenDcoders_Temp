import React, { Component } from "react";
import "./MainPage.css";

class MainPage extends Component {
    state = {
        isVisible: false,
    };

    componentDidMount() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.setState({ isVisible: true });
                    // Unobserve the element after it has become visible
                    this.observer.unobserve(entry.target);
                }
            });
        });

        const slide2 = document.querySelector('.slide2');
        if (slide2) {
            this.observer.observe(slide2);
        }
    }

    componentWillUnmount() {
        this.observer.disconnect();
    }

    render() {
        return (
            <div className="main-page">
                <nav className="navbar">
                    <img src="/Assets/ZenDcoders_Logo_Dark.png" alt="Zendcoders" className="logo1" />
                </nav>
                <div className="slide1">
                    <div className="inner-slide1">
                        <div className="slide11">
                            <h1 className="head-font">Zend<span className="white-head-font">coders</span></h1>
                            <h1 className="white-head-font">Innovation Meets<span className="head-font"> Expertise</span></h1>
                            <p className="sub-head">We craft digital experiences that engage, inspire, and drive results.</p>
                            <button className="button1">Learn More</button>
                        </div>
                        <div>
                            <img src = "https://res.cloudinary.com/dx97khgxd/image/upload/v1730421583/page1_tjzuxg.png" alt = "zendcoders" className="sar"/>
                        </div>
                    </div>
                </div>
                <div className="slide2">
                    <div className={`inner-slide2 ${this.state.isVisible ? 'visible' : ''}`}>
                        <img src="https://res.cloudinary.com/dx97khgxd/image/upload/v1730364179/page2_bf5qbn.png" alt="img2" className="image2" />
                    </div>
                    <div className={`inner2 ${this.state.isVisible ? 'visible' : ''}`}>
                        <h1 className="head-font1">Join Our Crew of Innovators</h1>
                        <p className="para-font-2">Building Digital Excellence Together. We're a team of passionate developers, designers, and problem-solvers collaborating to deliver exceptional web experiences.</p>
                        <p className="para-font-3">Explore opportunities to join our dynamic crew and co-create innovative solutions that shape the digital landscape.</p>
                        <button className="button1">Join</button>
                    </div>
                </div>

                <div className="slide2">
                    <div className="inner-slide3">
                        <h1 className="head-font1 ss">Empowering Digital Transformation Through Innovative
                        Web & Mobile Solutions</h1>
                        <div className="slide3-part1">
                            <div className="slide3-1">
                                <div className="bubble1">
                                <p className="bb1">1</p>
                                <p className="prod">Multi-Product
                                Expertise</p>
                                </div>
                                <p className="iit">We develop and manage a diverse
 portfolio of web and mobile
 applications, tailored to meet
 specific industry needs and user
 demands.</p>
                            </div>
                            <div className="slide3-1">
                            <div className="bubble1">
                                <p className="bb1 bb2">2</p>
                                <p className="prod">Collaborative &
                                Skilled Team</p>
                                </div>
                                <p className="iit">Our cross-functional teams of
 developers, designers, and
 strategists work seamlessly
 together, ensuring each product is
 impactful and user-centric.</p>
                            </div>
                            <div className="slide3-1">
                            <div className="bubble1">
                                <p className="bb1 bb3">3</p>
                                <p className="prod">Continuous
                                Enhancement</p>
                                </div>
                                <p className="iit">Through regular updates and agile
 methodologies, we adapt to
 changing markets, enhancing each
 product’s value and longevity.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dx97khgxd/image/upload/v1730371985/page3_qhhxbb.png" alt = "Zendcoders" className="image3" />
                    </div>
                </div>

                <div className="slide2">
                    <div>
                        <img src = "https://res.cloudinary.com/dx97khgxd/image/upload/v1730371983/page4_tcko3n.png" alt="zendcoders" className="image4"/>

                    </div>
                    <div className="slide4-part1">
                        <h1 className="head-font1">Our Collaborative Team
                        </h1>
                        <h1 className="head-font1 ss">Bridging Interns and Industry Experts</h1>
                        <div className="slide4-p1-inner">
                            <div className="inner-4 kk1">
                                <h3 className="head3">Real-World Experience</h3>
                                <p className="para3">We immerse college interns in
 hands-on projects, building critical
 skills and industry knowledge
 through real-world application.</p>
                            </div>
                            <div className="inner-4 kk2">
                                <h3 className="head3"> Expert Mentorship</h3>
                                <p className="para3"> Our experienced professionals
 guide interns, sharing best
 practices and valuable insights for
 career growth.</p>
                            </div>
                            <div className="inner-4 kk3">
                                <h3 className="head3">Team-Oriented Culture</h3>
                                <p className="para3">By fostering a collaborative environment, interns work closely with seasoned
                                developers, promoting teamwork and mutual learning.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide2">
                        <div className="slide5">
                            <h1 className="head-font1 ss">Join Our Dynamic Team and Kickstart Your Career</h1>
                            <div className="inner-s5">
                            <div className="iir">
                                <img src="https://res.cloudinary.com/dx97khgxd/image/upload/v1730380899/i1_ets1ns.png" alt="logo" className="ii1"/>
                                <h2 className="slide5-head3">Teamwork</h2>
                                <p className="para5">Collaborate with talented
 individuals and learn from each
 other.</p>
                            </div>
                            <div className="iir">
                            <img src="https://res.cloudinary.com/dx97khgxd/image/upload/v1730380898/i2_sblzhp.png" alt="logo" className="ii1"/>
                                <h2 className="slide5-head3">Innovation</h2>
                                <p className="para5">  Contribute to groundbreaking
 projects and push the
 boundaries of technology.</p>
                            </div>
                            <div className="iir">
                            <img src="https://res.cloudinary.com/dx97khgxd/image/upload/v1730380897/i3_vo3xxf.png" alt="logo" className="ii1"/>
                                <h2 className="slide5-head3"> Growth
                                </h2>
                                <p className="para5">Develop valuable skills and gain
                                experience that will set you apart</p>
                            </div>
                            <div className="iir">
                            <img src="https://res.cloudinary.com/dx97khgxd/image/upload/v1730380897/i4_xz5uc2.png" alt="logo" className="ii1"/>
                                <h2 className="slide5-head3">Opportunity</h2>
                                <p className="para5">Gain valuable experience and
 build your network for future
 career success.</p>
                            </div>
                            </div>
                        </div>
                        <div>
                            <img src = "https://res.cloudinary.com/dx97khgxd/image/upload/v1730371986/page5_slejux.png" alt="Zendcoders" className="image5"/>

                        </div>
                </div>
                <div className="slide2">
                    <div className="ssss">
                        <h1 className="head-font1">Workshops and Contests</h1>
                        <p className="para6">Certifications and Prizes</p>
                        <div className="cardss">
                            <div className="card11">
                                <img src = "https://res.cloudinary.com/dx97khgxd/image/upload/v1730371983/page61_xvlszt.png" alt="Zendcoders" className="img11"/>
                                <h5 className="head-font1 ss mm">Prizes</h5>
                                <p className="para5 ">Compete in our contests and
 win attractive prizes for
 your talent</p>
                            </div>
                            <div className="card11">
                                <img src = "https://res.cloudinary.com/dx97khgxd/image/upload/v1730371983/page62_a7aj59.png" alt="Zendcoders" className="img11"/>
                                <h5 className="head-font1 ss mm">Certificate</h5>
                                <p className="para5 "> Earn valuable industry
 certifications to enhance
 your skillset.</p>
                            </div>
                            <div className="card11">
                                <img src = "https://res.cloudinary.com/dx97khgxd/image/upload/v1730371983/page63_jho8mv.png" alt="Zendcoders" className="img11"/>
                                <h5 className="head-font1 ss mm">Opportunity</h5>
                                <p className="para5 ">Connect with fellow
 developers and industry
 professionals.
</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide2">
                    <div className="siv">
                        <h1 className="saii">CERTIFIED  AND  REGISTERED  IN</h1>
                        <div className="bbss">
                            <img src = "https://res.cloudinary.com/dx97khgxd/image/upload/v1730381375/msme_hpmnu4.png" alt="msmc" className="immm"/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default MainPage;
