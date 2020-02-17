import React, {Component} from "react";
import Projects from "../../../data/DProjects";
import CGallery from "../../components/CGallery";

class SectionProjects extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        let win = window.open(this.props.item.link, '_blank');
        win.focus();
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="page-title section-title">My<span
                        className="section-name">Projects</span></h1>
                </div>
                <div className="container">
                    <CGallery filters={["game", "web", "tool"]} data={Projects} enableImageSelection={false} onClickThumbnail={this.onClick} enableLightbox={false} rowHeight={300}/>
                </div>
            </div>
        );
    }
}

export default SectionProjects;

