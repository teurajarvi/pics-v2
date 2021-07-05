import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.pictureRef = React.createRef();
  }

  componentDidMount() {
    this.pictureRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.pictureRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1);
    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.picture;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.pictureRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
