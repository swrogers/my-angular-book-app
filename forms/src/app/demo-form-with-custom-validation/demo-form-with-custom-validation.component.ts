import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-custom-validation',
  templateUrl: './demo-form-with-custom-validation.component.html',
  styleUrls: ['./demo-form-with-custom-validation.component.css']
})
export class DemoFormWithCustomValidationComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.compose([
          Validators.required, this.skuValidator
        ])]
    });
   }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('You submitted value: ', value);
  }

  skuValidator(control: FormControl): {[s: string]: boolean} {
    if(!control.value.match(/^123/)) {
      return {invalidSku: true};
    }
  }

}
