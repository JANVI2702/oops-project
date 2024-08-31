// Inheritance : simple

class Train {
  // super class , parent class , base class
  fillDetails(trainNumber, source, destination, depTime) {
    this.trainNumber = trainNumber;
    this.source = source;
    this.destination = destination;
    this.depTime = depTime;
  }
}

class Ticket extends Train {
  // sub class , child class , derived class
  details(passangerName, train, date) {
    this.passangerName = passangerName;
    this.train = train;
    this.date = date;
  }
  display() {
    console.log(
      `${this.passangerName} ${this.train} ${this.date} ${this.trainNumber} ${this.source} ${this.destination} ${this.depTime}`
    );
  }
}

const ticket1 = new Ticket();
ticket1.display();
