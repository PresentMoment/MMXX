import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import { Document, Page, pdfjs } from "react-pdf";

import worksDesc from "./worksDesc";
import engPdf from "../../assets/pr_eng.pdf";
import itPdf from "../../assets/pr_it.pdf";
import checklist from "../../assets/checklist.pdf";

import "./styles.css";
import "./GalleryStyle.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Exhibit extends Component {
  constructor() {
    super();
    this.state = {
      showExhibit: false,
      showSingles: false,
      showEngPdf: false,
      showItPdf: false,
      showChecklist: false,
      numPages: null,
      window: "",
    };

    this.handleClick = this.handleClick.bind(this);
    this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
    this.screenSizeSwitch = this.screenSizeSwitch.bind(this);
  }

  componentDidMount() {
    if (window.innerWidth < 425) {
      this.setState({ window: "mobile" });
    } else if (window.innerWidth < 625 && window.innerWidth >= 425) {
      this.setState({ window: "small" });
    } else if (window.innerWidth < 1000 && window.innerWidth >= 625) {
      this.setState({ window: "medium" });
    }
  }

  handleClick(x) {
    let currentTarget = "show" + x;
    if (currentTarget === "showExhibit") {
      this.setState({ showExhibit: !this.state.showExhibit });
    } else if (currentTarget === "showSingles") {
      this.setState({ showSingles: !this.state.showSingles });
    } else if (currentTarget === "showEngPdf") {
      this.setState({ showEngPdf: !this.state.showEngPdf });
    } else if (currentTarget === "showItPdf") {
      this.setState({ showItPdf: !this.state.showItPdf });
    } else if (currentTarget === "showChecklist") {
      this.setState({ showChecklist: !this.state.showChecklist });
    }
  }

  onDocumentLoadSuccess({ numPages }) {
    this.setState({ numPages });
  }

  screenSizeSwitch(param) {
    switch (param) {
      case "medium":
        return 600;
      case "small":
        return 400;
      case "mobile":
        return 300;
      default:
        return;
    }
  }

  render() {
    const artist = this.props.artist;
    let exhibit = new Array(13);
    let singleworks = new Array(55);

    for (let i = 0; i < exhibit.length; i++) {
      exhibit[i] = {
        original: `./shows/${artist}/exhibit/web/${i}.jpg`,
        thumbnail: `./shows/${artist}/exhibit/thumb/${i}.jpg`,
        credit: "DSL Studio",
      };
    }

    for (let i = 0; i < singleworks.length; i++) {
      singleworks[i] = {
        original: `./shows/${artist}/singleworks/web/${i}.jpg`,
        thumbnail: `./shows/${artist}/singleworks/thumb/${i}.jpg`,
        description: worksDesc[i],
        credit: "DSL Studio",
        originalAlt: worksDesc[i],
        originalTitle: worksDesc[i],
      };
    }
    return (
      <div className="content">
        <div className="exhibitTitle">
          <p>{this.props.title}</p>
        </div>
        <p onClick={() => this.handleClick("Exhibit")} className="exhibitItems">
          Exhibition views
        </p>
        {this.state.showExhibit ? (
          <div>
            <ImageGallery
              items={exhibit}
              infinite={true}
              showBullets={false}
              disableThumbnailScroll={false}
              showPlayButton={false}
              showFullscreenButton={false}
              showThumbnails={true}
              showNav={false}
              lazyLoad={true}
              //onScreenChange={this.handleFullScreen}
            />
          </div>
        ) : null}
        <p onClick={() => this.handleClick("Singles")} className="exhibitItems">
          Single works
        </p>
        {this.state.showSingles ? (
          <div>
            <ImageGallery
              items={singleworks}
              infinite={true}
              showBullets={false}
              disableThumbnailScroll={false}
              showPlayButton={false}
              showFullscreenButton={false}
              showThumbnails={true}
              showNav={false}
              lazyLoad={true}
              //onScreenChange={this.handleFullScreen}
            />
          </div>
        ) : null}
        <p
          onClick={() => this.handleClick("Checklist")}
          className="exhibitItems"
        >
          Checklist
        </p>
        {this.state.showChecklist ? (
          <div>
            <Document
              file={checklist}
              onLoadSuccess={this.onDocumentLoadSuccess}
            >
              {Array.from(new Array(this.state.numPages), (el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  width={this.screenSizeSwitch(this.state.window)}
                />
              ))}
            </Document>
          </div>
        ) : null}
        <p onClick={() => this.handleClick("EngPdf")} className="exhibitItems">
          Press release ENG
        </p>
        {this.state.showEngPdf ? (
          <div>
            <Document file={engPdf} onLoadSuccess={this.onDocumentLoadSuccess}>
              {Array.from(new Array(this.state.numPages), (el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  width={this.screenSizeSwitch(this.state.window)}
                />
              ))}
            </Document>
          </div>
        ) : null}
        <p onClick={() => this.handleClick("ItPdf")} className="exhibitItems">
          Press release ITA
        </p>
        {this.state.showItPdf ? (
          <div>
            <Document file={itPdf} onLoadSuccess={this.onDocumentLoadSuccess}>
              {Array.from(new Array(this.state.numPages), (el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  width={this.screenSizeSwitch(this.state.window)}
                />
              ))}
            </Document>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Exhibit;
