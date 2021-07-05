import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.pictureRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.pictureRef);
  }

  render() {
    const { description, urls } = this.props.picture;
    return (
      <div>
        <img ref={this.pictureRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
