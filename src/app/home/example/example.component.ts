import { Component, OnInit } from '@angular/core';
import { ExampleUserModel } from '../model/example.user.model';
import { TwitterService } from '../service/twitter.service';

@Component({
  templateUrl: 'example.component.html',
  providers: [TwitterService],
  styleUrls: ['example.component.css']
})
export class ExampleComponent implements OnInit {

  data: ExampleUserModel;

  constructor(private twitterService: TwitterService) {
  }

  ngOnInit(): void {
    this.twitterService.getUserExample()
      .subscribe(value => this.data = value.data);
  }
}
