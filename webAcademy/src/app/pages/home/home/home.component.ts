import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: HomeService) { }

  ngOnInit(): void {
    this.service.getAlunos().subscribe((data) => {
      console.log(data)
    })
  }
}
