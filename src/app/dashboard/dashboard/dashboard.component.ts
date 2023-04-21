import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  pieChartData = {
    labels: ['Mensal', 'Educação', 'Lazer', 'Imprevistos'],
    datasets: [
      {
        data: [2500, 2700, 550, 235],
        backgroundColor: ['#FF9900', '#109618', '#990099', '#3B3EAC']
      }
    ]
  };
  lineChartData = {
    labels: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    datasets: [
      {
        label: 'NPS',
        data: [1, 10, 30, -60, 1, 90, 3],
        borderColor: '#3366CC'
      }
    ]
  };
  constructor() { }

  ngOnInit() {
    
  }

}
