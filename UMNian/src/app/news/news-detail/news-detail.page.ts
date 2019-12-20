import { SavedService } from './../../saved/saved.service';
import { Component, OnInit } from '@angular/core';
import { News } from '../news.model';
import { PostsService } from '../posts.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {

  loadedNews: News;

  constructor(
    private activatedRoute: ActivatedRoute,
    private newsSvc: PostsService,
    private loadingCtrl: LoadingController,
    private savedSvc: SavedService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if (!paramMap.has('newsId')) { return; }
        this.loadedNews = this.newsSvc.getNews(paramMap.get('newsId'));
      }
    )
  }

  favIcon: string = "heart-empty";
  toggleIcon(title: string, content: string, name: string, status: number, id: string, idNews: string, img: string) {

    this.newsSvc.changeStatus(id, idNews, title, content, name, img);
    this.loadedNews = this.newsSvc.getNews(idNews);

    if (status == 0) {
      this.savedSvc.addSaved(id, name, title, content, img);
      this.loadingCtrl.create({
        keyboardClose: true,
        message: 'Updating your favorite songs...'
      })
      .then(loadingEl => {
        loadingEl.present();
        setTimeout(() => {
          loadingEl.dismiss();
        }, 2000);
      });
    } else if (status == 1) {
      this.savedSvc.delSaved(id);
      this.loadingCtrl.create({
        keyboardClose: true,
        message: 'Updating your favorite songs...'
      })
      .then(loadingEl => {
        loadingEl.present();
        setTimeout(() => {
          loadingEl.dismiss();
        }, 2000);
      });
    }
  }

}
