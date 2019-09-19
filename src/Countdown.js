import React from 'react';

class Countdown extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			timeCount: 0,
			timerActive: false
		}
	}



	componentDidUpdate(prevProps, prevState) {
	    if(this.state.timerActive !== prevState.timerActive){
	      switch(this.state.timerActive) {
	        case true:
	          this.displayTimeLeft();
	      }
	    }
	  }

	handleCountdown(seconds) {
	    this.setState({
	      timeCount: seconds,
	      timerActive: true
	    })
	}

	handleSubmit(event) {
	    event.preventDefault();
	    const strTime = Number(this.refs.timeEntered.value);
	    if(!isNaN(strTime)) {
	      this.refs.timeEntered.value = '';
	      let seconds = parseInt(strTime, 10);
	      this.setState({timeCount: seconds})
	      this.handleCountdown(parseInt(seconds, 10));
	    }
	}

	displayTimeLeft() {
		this.countdown = setInterval(() => {
	      	const secondsLeft = this.state.timeCount - 1;
			this.setState(
				{timeCount: secondsLeft >= 0 ? secondsLeft : 0}
			);
	    }, 1000);
	}

	displayTimeFormat(inputTime) {
	    let seconds = inputTime % 60;
	    let minutes = Math.floor(inputTime / 60);
	    minutes = minutes <= 9 ? "0" + minutes : minutes;
	    seconds = seconds <= 9 ? "0" + seconds : seconds;
	    return minutes + ':' + seconds;
	}

	// renderTimer() {
	// 	return(
			
	// 	)
	// }

	

	render() {
		return(
			<div>
				<h1>Countdown</h1>
				<form  onSubmit={(e) => this.handleSubmit(e)}>
			        <input type="text" ref="timeEntered" placeholder="enter time in seconds"/>
			        <input type="submit" value="Start"></input>
		      	</form>

				<div className="displayedTime">
		        	<h1>{this.displayTimeFormat(this.state.timeCount)}</h1>
		      	</div>
			</div>
		)
		
	}
}

export default Countdown;