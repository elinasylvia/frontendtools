import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css']
})
export class HelloworldComponent implements OnInit {
  first_name = 'Angular';
  title = 'Harjoittelua';
  itemImageUrl = 'https://cdn.pixabay.com/photo/2016/12/15/03/27/cocoa-1908020__480.jpg';
  changeImg() {
    console.log('Buttonia klikattu');


    if (this.itemImageUrl == 'https://cdn.pixabay.com/photo/2016/12/15/03/27/cocoa-1908020__480.jpg') {
      this.itemImageUrl = 'https://cdn.pixabay.com/photo/2019/11/23/07/24/christmas-4646421__480.jpg'
    }
    else { this.itemImageUrl = 'https://cdn.pixabay.com/photo/2016/12/15/03/27/cocoa-1908020__480.jpg' }
  };


  constructor() { }

  ngOnInit(): void {
  }

}
