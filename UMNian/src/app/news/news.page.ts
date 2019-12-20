import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { News } from './news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  loadedNews: News[] = [];
  posts: any;

  constructor(private newsService: PostsService) { }

  ngOnInit() {
    this.loadedNews = this.newsService.getAllNews();
  }

}
