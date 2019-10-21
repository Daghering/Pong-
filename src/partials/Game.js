import { SVG_NS, KEYS } from "../settings";
import Board from "./Board";
import Paddle from "./Paddle";
import Ball from "./Ball";
import Score from "./Score";

export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;
    this.gameOn = true;

    this.gameElement = document.getElementById(this.element);

    // creates a new instance of board. height and width passed through Game object
    this.board = new Board(this.width, this.height);
    this.paddleWidth = 8;
    this.paddleHeight = 56;
    this.boardGap = 10;
    console.log(this.board);

    //player 1
    this.player1 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      this.boardGap,
      (this.height - this.paddleHeight) / 2,
      KEYS.a,
      KEYS.z
    );

    // player 2
    this.player2 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      this.width - this.boardGap - this.paddleWidth,
      (this.height - this.paddleHeight) / 2,
      KEYS.up,
      KEYS.down
    );

    //score
    this.score1 = new Score(this.width / 2 - 50, 30, 30);
    this.score2 = new Score(this.width / 2 + 25, 30, 30);

    //ball
    this.ball = new Ball(9, this.width, this.height);

    document.addEventListener("keydown", event => {
      switch (event.key) {
        case KEYS.spaceBar:
          this.gameOn = !this.gameOn;
          this.player1.speed = 12;
          this.player2.speed = 12;
          console.log(this.gameOn);
          break;
      }
    });

    document.addEventListener("keydown", event => {
      switch (event.key) {
        case KEYS.r:
          this.restart();
          console.log(this.restart);
          setTimeout((refresh) => {
            location.reload(true)
          }, 1);
          break;
      }
    });
    
  }

  restart() {
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;
    this.vy = 0;
    while (this.vy === 0) {
      this.vy = Math.floor(Math.random() * 10 - 5);
      this.player1.score = 0;
      this.player2.score = 0;
      this.ball.reset();
    }
    this.vx = this.direction * (6 - Math.abs(this.vy));
  }

  render() {
    if (this.gameOn) {
      this.player1.speed = 0;
      this.player2.speed = 0;
      console.log(this.gameOn);

      return;
    }

    //Winner screen
    if (this.player1.score >= 3) {
      document.getElementById("winner");
      winner.innerText = "Player 1 Wins a Unicorn!!";
      document.getElementById("rainbow").play();
      playloop = false;
      return;
    }

    if (this.player2.score >= 3) {
      document.getElementById("winner");
      winner.innerText = "Player 2 Wins a Unicorn!!";
      document.getElementById("rainbow").play();
      playloop = false;
      return;
    }

    let svg = document.createElementNS(SVG_NS, "svg");

    this.gameElement.innerHTML = "";

    svg.setAttributeNS(null, "width", this.width);
    svg.setAttributeNS(null, "height", this.height);
    svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);
    this.gameElement.appendChild(svg);

    this.board.render(svg);
    this.player1.render(svg);
    this.player2.render(svg);
    this.ball.render(svg, this.player1, this.player2);
    this.score1.render(svg, this.player1.score);
    this.score2.render(svg, this.player2.score);
  }
}
