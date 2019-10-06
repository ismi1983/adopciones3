import { Component, OnInit, Input, Output } from '@angular/core';
import { Observable, Subject, from } from 'rxjs';
import { Dog } from '../../models/dogs';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { DogsService } from '../../services/dogs.service';
import { EventEmitter } from 'protractor';
@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
  faTrash = faTrash
  @Input() dog:Dog;
  // @Output() public deleted = new EventEmitter<Dog>();
  constructor(private dogService:DogsService) { }

  ngOnInit() {
  }

  deleteDog(dog:Dog):void{ 
    this.dogService.deleteDog(dog).subscribe();
  }

  // launch(event){
  //    this.deletedDog.emit('Delete');
  // }

}
