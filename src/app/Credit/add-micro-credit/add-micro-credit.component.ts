import { Microcredit } from './../../Models/microcredit';
import { MicrocreditService } from './../../Services/MicroCredit/microcredit.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { MaxSizeValidator } from '@angular-material-components/file-input';

@Component({
  selector: 'app-add-micro-credit',
  templateUrl: './add-micro-credit.component.html',
  styleUrls: ['./add-micro-credit.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false},
}]
})
export class AddMicroCreditComponent implements OnInit {

  minDate = new Date();
  fileControl: FormControl;

  isLinear = false;
	firstFormGroup: FormGroup=Object.create(null);
	secondFormGroup: FormGroup=Object.create(null);

	isLinearvarient = false;
  	varientfirstFormGroup: FormGroup=Object.create(null);
 	varientsecondFormGroup: FormGroup=Object.create(null);

  credit !:Microcredit;
  CreditType = ""
  files !: any;
  maxSize= 16;
	
  constructor(private _formBuilder: FormBuilder,private service:MicrocreditService) {
    this.fileControl = new FormControl(this.files, [
      Validators.required,
      MaxSizeValidator(this.maxSize * 1024)
    ])
  }

	ngOnInit() : void{
		this.firstFormGroup = this._formBuilder.group({
			firstCtrl: ['', Validators.required]
		});
		this.secondFormGroup = this._formBuilder.group({
			secondCtrl: ['', Validators.required]
		});

		// varient
		this.varientfirstFormGroup = this._formBuilder.group({
		      varientfirstCtrl: ['', Validators.required]
		});
		this.varientsecondFormGroup = this._formBuilder.group({
		      varientsecondCtrl: ['', Validators.required]
		});

    this.fileControl.valueChanges.subscribe((files: any) => {
      if (!Array.isArray(files)) {
        this.files = [files];
      } else {
        this.files = files;
      }
    })
    
	
	}
  

  submitData(value: any) {
      this.credit = {
      idCredit : 1,
      amountCredit: value.amountCredit,
      period: value.period,
      typePeriod : value.typePeriod,
      startDate : value.startDate,
      creditType : value.creditType,
      cinGuarantor : value.cinGuarantor,
      guarantorFile : value.guarantorFile,
      status : "progressing",
      interestRate : 1 ,
      payedAmount :1 ,
      amountRemaining : value.amountCredit
    }
    
    this.service.addMicroCredit(this.credit).subscribe(
      data => {console.log(data);}
    )
  }

}
