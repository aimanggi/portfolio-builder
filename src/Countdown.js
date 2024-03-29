import React from "react";

//0. Just read the algorithm from Countdown Class Component
//1. set-up the useState second and setSeconds with startTime parameter as the default value
//2. set-up the timer by using useRef()
//3. create useEffect statement to clearInterval when the seconds === 0 (input is seconds)
//4. create useEffect statement again to handle setup Countdown (input is startTime)
//5. return to div with {seconds} variable

class Countdown extends React.Component {
  timer = null;

  state = {
    seconds: 0,
  };

  componentDidMount() {
    this.setupCountdown(this.props.startTime);
  }

  setupCountdown(startTime) {
    this.setState({ seconds: startTime });
    if (startTime > 0) {
      this.timer = setInterval(() => {
        if (this.state.seconds > 0) {
          this.setState((state) => ({
            seconds: state.seconds - 1,
          }));
        } else {
          clearInterval(this.timer);
        }
      }, 1000);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.startTime !== prevProps.startTime) {
      clearInterval(this.timer);
      this.setupCountdown(this.props.startTime);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <div>{this.state.seconds}</div>;
  }
}

export default Countdown;
