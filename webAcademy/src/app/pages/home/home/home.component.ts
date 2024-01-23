import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home/home.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponentComponent implements OnInit {
  alunos = [];
  constructor(private service : HomeService) {

  }

  ngOnInit(): void {

    this.service.getAlunos().subscribe((data) => {
      this.alunos = data
    })
  }

  insertAlunos(){
    console.log('AQUIIIIIIIIIII');

    const data = {
      nome : 'Lucas',
      idade: 25
    }
    return this.service.insertAlunos(data).subscribe((data) => {
      return  console.log(data)
    })
  }

}
