import { Component, OnInit } from '@angular/core';
import { DogsService } from '../../services/dogs.service'
import { Dog} from '../../models/dogs'

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  constructor( private dogService:DogsService ) { }

dogs$:Dog[];

  getDogs():void{
    this.dogService.getDogs().subscribe(dogs => this.dogs$ = dogs);
  };

  ngOnInit():void {
   this.getDogs();
  }
  deleteDog(dog:Dog):void{ 
    this.dogs$ = this.dogs$.filter(d => d !== dog);   
    this.dogService.deleteDog(dog).subscribe();
  }
}
