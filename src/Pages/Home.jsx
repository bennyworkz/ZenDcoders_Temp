import React, { Component } from "react";
import "../Themes/Styles.css";
import NavBar from "../Components/Home/NavBar";
import HeroSlide1 from "../Components/Home/HeroSlide1";
import HeroSlide2 from "../Components/Home/HeroSlide2";
import Expertise from "../Components/Home/Expertise";
import Team from "../Components/Home/Team";
import Events from "../Components/Home/Events";
import About from "../Components/Home/About";
class Home extends Component {
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
                <NavBar />
                <HeroSlide1 />
                <HeroSlide2 />
                <Expertise />
                <Team />
                <Events />
                <About />
            </div>
        );
    }
}

export default Home;
