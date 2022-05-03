import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MicrocreditService } from './../../Services/MicroCredit/microcredit.service';

@Component({
  selector: 'app-my-credits',
  templateUrl: './my-credits.component.html',
  styleUrls: ['./my-credits.component.css']
})
export class MyCreditsComponent implements OnInit {

  listCredits !: Observable<any>;
  constructor(private service:MicrocreditService) { }

  ngOnInit(): void {
    this.service.getMicroCredits().subscribe(
      data => {
        console.log(data);
        this.listCredits=data;}
    )
  }

}
