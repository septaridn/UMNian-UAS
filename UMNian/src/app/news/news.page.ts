import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { News } from './news.model';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  loadedNews: News[] = [];
  posts: any;

  constructor(private newsService: PostsService, private crudService: CrudService) { }

  ngOnInit() {
    this.loadedNews = this.newsService.getAllNews();

    // this.crudService.read_Posts().subscribe(data => {
 
    //   this.posts = data.map(e => {
    //     return {
    //       id: e.payload.doc.id,
    //       isEdit: false,
    //       Name: e.payload.doc.data()['Name'],
    //       Title: e.payload.doc.data()['Title'],
    //       Content: e.payload.doc.data()['Content'],
    //       Img: e.payload.doc.data()['Img'],
    //       Status: e.payload.doc.data()['Status'],
    //     };
    //   })
    //   console.log(this.posts);
    // });
  }

}
