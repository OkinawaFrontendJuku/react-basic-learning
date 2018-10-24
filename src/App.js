import React, { Component } from 'react';
import './App.css';

class Timer extends Component{
  constructor(props) {
    super(props);
    
    this.state = {
      time : new Date()
    };

    this.interval_id = null;
  }

  componentWillReceiveProps( nextProps ){

    if( nextProps.timer_flag ){
      this.interval_id = setInterval(this.updateTime.bind(this),1000);
    }else{
      clearInterval( this.interval_id );
    }

  }

  updateTime(){
    this.setState({
      time : new Date()
    });
  }
  
  // 年・月・日の文字列を取得
  getDateString( date ){
    let time = "";

    time += date.getFullYear() + "年";
    time += date.getMonth() + "月";
    time += date.getDate() + "日";

    return time;
  }

  // 時・分・秒の文字列を取得
  getTimeString( date ){
    let time = "";

    time += date.getHours() + "時";
    time += date.getMinutes() + "分";
    time += date.getSeconds() + "秒";

    return time;
  }

  render(){
    let date = this.getDateString(this.state.time);
    let time = this.getTimeString(this.state.time);

    return(
      <div>
        <h1>{ date }</h1>
        <p>{ time }</p>
      </div>
    )
  }
  
}

const Button = ({ label, onClick }) => (
  <div onClick={onClick}>
    <button>
      { label }
    </button>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      timer_flag : false
    };
  }
  
  timerStop(){
    this.setState({
      timer_flag : false
    });
  }

  timerStart(){
    this.setState({
      timer_flag : true
    });
  }


  render() {
    return (
      <div className="App">
        <h1>React タイマーサンプル</h1>

        <Timer timer_flag={this.state.timer_flag} />

        <div>
          <Button label="スタート" onClick={this.timerStart.bind(this)} />
          <Button label="ストップ" onClick={this.timerStop.bind(this)} />
        </div>

      </div>
    );
  }

}

export default App;
