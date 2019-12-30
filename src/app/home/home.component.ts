import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  // images=["https://via.placeholder.com/180x200.png",
  // "https://via.placeholder.com/200x150.png",
  // "https://via.placeholder.com/200x200.png",
  // "https://via.placeholder.com/200x150.png",
  // "https://via.placeholder.com/200x200.png",
  // "https://via.placeholder.com/200.png",
  // "https://via.placeholder.com/200x250.png",
  // "https://via.placeholder.com/200x200.png",
  // "https://via.placeholder.com/200x250.png",
  // "https://via.placeholder.com/200x200.png",
  // "https://placekitten.com/640/360" ]

  departments=[{img:"https://rubyhall.com/wp-content/uploads/2019/01/cancer-center.png",
  text:"Cancer Center"},
  {img:"https://rubyhall.com/wp-content/uploads/2019/07/cardiac-img-30july.jpg",
  text:"Cardiac Science & CCU"},
  {img:"https://rubyhall.com/wp-content/uploads/2019/07/ICU-img-30july.jpg",
  text:"ICU & Critical Care"},
  {img:"https://rubyhall.com/wp-content/uploads/2019/01/clinical-research.png",
  text:"Clinical Research"},
  {img:"https://rubyhall.com/wp-content/uploads/2019/07/neauro-trauma-img-31july.jpg",
  text:"Neuro Trauma Intensive Care"},
  {img:"https://rubyhall.com/wp-content/uploads/2019/07/pathology-lab-30july.jpg",
  text:"Pathology Lab"},
  {img:"https://rubyhall.com/wp-content/uploads/2019/01/TGINE.png",
  text:"Nursing Institute"},
  {img:"https://rubyhall.com/wp-content/uploads/2019/07/transplant-center-30july.jpg",
  text:"Transplant Center"}
  
  ]
  homeDepartment=["Cardiac Science & CCU",
  "ICU & Critical Care","Clinical Research",
  "Neuro Trauma Intensive Care",
  "General & Laproscopic Surgeries",
  "Pathology Lab",
  "Nursing Institute",
  "Transplant Center"]
  
  constructor(){
    
  }

  ngOnInit(){
    
  }
}
