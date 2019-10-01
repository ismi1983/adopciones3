import { Component, OnInit } from '@angular/core';
import { Dog } from '../../models/dogs';
import { DogsService } from '../../services/dogs.service'; 
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-dogs',
  templateUrl: './register-dogs.component.html',
  styleUrls: ['./register-dogs.component.css']
})
export class RegisterDogsComponent implements OnInit {

formDog: FormGroup = new FormGroup({

  name:new FormControl('', Validators.required),
  age:new FormControl('', Validators.required),
  sex:new FormControl('', Validators.required),
  description:new FormControl('', Validators.required),
  imgUrl:new FormControl('', Validators.required)

})

  constructor(private dogService: DogsService) { }

  ngOnInit() {
  }


  public submit():void{
    let form = this.formDog;


    console.log(form.value);

    if(!form.valid){
      alert('Data not valid');
      return;
    };
    this.submitData(form.value);
  };


  private submitData(form:Dog):void{
    this.dogService.createDog(form)
    .subscribe(data => {
      console.log(data);
      debugger;
    })
  }



}
