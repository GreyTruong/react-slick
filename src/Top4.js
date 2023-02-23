import React from "react";
const images = [
  "https://img.hapitas.jp/img/images/banner/202004211402402511.png",
  "https://img.hapitas.jp/img/images/banner/tmp/202212151854106343.png",
  "https://img.hapitas.jp/img/images/banner/202004211403269111.png",
  "https://img.hapitas.jp/img/images/banner/tmp/202302021605456603.jpg",
  "https://img.hapitas.jp/img/images/banner/tmp/202302091108298657.png",
];
class Top4 extends React.Component<Props, State> {
  state = { count: 0, intervalId: 0, imageIndex: 0 };
  intervalId: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
      intervalId: 0,
      imageIndex: 0,
    };
    console.log(this.props);
  }

  componentDidMount() {
    // const newIntervalId = setInterval(() => {
    //   this.setState((prevState) => {
    //     return {
    //       ...prevState,
    //       count: prevState.count + 1,
    //       imageIndex:
    //         prevState.imageIndex === images.length - 1
    //           ? 0
    //           : prevState.imageIndex + 1,
    //     };
    //   });
    //   this.props.setSlideIndex(this.state.imageIndex);
    // }, 3000);
    // this.setState((prevState) => {
    //   return {
    //     ...prevState,
    //     intervalId: newIntervalId,
    //   };
    // });
  }

  // componentWillUnmount() {
  //   clearInterval(this.intervalId);
  // }
  render() {
    return (
      <>
        <img
          src={images[this.props.slideIndex]}
          alt=""
          style={{ width: 500 }}
        />
        <p></p>
      </>
    );
  }
}

export default Top4;
