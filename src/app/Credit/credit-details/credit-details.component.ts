import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-details',
  templateUrl: './credit-details.component.html',
  styleUrls: ['./credit-details.component.css']
})
export class CreditDetailsComponent implements OnInit {
  name=localStorage.getItem('fullname');
  constructor() { }

  ngOnInit(): void {
    
  }

}
