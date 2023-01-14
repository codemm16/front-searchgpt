import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import IDisplayMessages from 'src/app/domain/ports/i-display-messages';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  inputValue = ''
  status = 'blank'
  answerBot = ''

  constructor(
    @Inject('IDisplayMessages') public messagesDisplayer: IDisplayMessages
  ) {}
  ngOnInit(): void {
    document.getElementById("myInput")!.addEventListener("keyup", function(event) { if (event.keyCode === 13) { event.preventDefault(); 
    document.getElementById("myButton")!.click(); } });
  }


  askAnswer(){
    this.answerBot = ''
    this.status='loading'
    this.messagesDisplayer.askAnswer(this.inputValue)
    .subscribe(_ => {
      this.status = 'complete'
      this.answerBot = this.messagesDisplayer.messages[0].bot
    })
  }

}
