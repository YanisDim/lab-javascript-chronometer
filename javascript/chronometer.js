class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(()=>{
      this.currentTime++
      callback()
      
    }, 1000)
  }
  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/60)

  }
  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime%60)
  }
  twoDigitsNumber(number) {
    // ... your code goes here
    if (number < 10){
      return `0${number}`
    }else{
      return number.toString()
    }

  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }
  resetClick() {
    // ... your code goes here
     this.currentTime = 0
  }
  splitClick() {
    // ... your code goes here
    let min = this.getMinutes();
    let sec = this.getSeconds();
    
    if (min < 10 && sec < 10){
      return `0${min}:0${sec}`
    } else if (min < 10 && sec > 10){
      return `0${min}:${sec}`
    } else if (min > 10 && sec < 10 ){
      return `${min}:0${sec}`
    }else{
      return `${min}:${sec}`
    }
  
}
}
