import React from "react";
import { ReactComponent as ArrowForward } from "../../assets/arrow_forward.svg";
import { ReactComponent as ArrowBack } from "../../assets/arrow_back.svg";

class Slideshow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slide : 0
        };

    }
    render(){
        let length = this.props.slide.pictures.length;
        length--;
    
        function nextSlide(){
            this.state.slide < length ? this.setState({slide : this.state.slide+1}) : this.setState({slide : 0});
        }
    
        function previousSlide (){
            this.state.slide > 0 ? this.setState({slide : this.state.slide-1}) : this.setState({slide : length});
        }

        const src = this.props.slide.pictures[this.state.slide]
        
        return <section className="infoGalery" style={{backgroundImage: `url(${src})`}}>
            <div className="infoGalery__shadow"></div>
            <ArrowBack className="infoGalery__nav back" onClick={previousSlide.bind(this)}/>
            <ArrowForward className="infoGalery__nav forward" onClick={nextSlide.bind(this)} />
            <p className="infoGalery__nav number">{this.state.slide+1}/{length+1}</p>
        </section>
    }
}
//<img src={this.props.slide.pictures[this.state.slide]} alt="slideshow temporaire" className="infoGalery__image" />
export default Slideshow;