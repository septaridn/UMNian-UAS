import { Injectable } from '@angular/core';
import { News } from './news.model';
import { SavedService } from '../saved/saved.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private news1: News[] = [
    {
      id: 'p1',
      name: 'Ultima Sonora',
      title: 'Ultima Sonora Raih Dua Emas Sekaligus dalam Festival Internasional',
      content: 'Choir kampus Univ. Multimedia Nusantara',
      img: 'https://ultimagz.com/wp-content/uploads/ulson-min-381x381.jpg',
      status: 0,
    },
    {
      id: 'p2',
      name: 'Qorie UMN',
      title: 'UKM Qorie Memboyong Piala Usai Penampilan Perdana Red:Code',
      content: 'Unit Kegiatan Mahasiswa (UKM) pecinta Budaya Korea, Qorie menorehkan prestasi baru',
      img: 'https://ultimagz.com/wp-content/uploads/1448872787839.jpg',
      status: 0,
    },
    {
      id: 'p3',
      name: 'Rencang',
      title: 'Rencang Tumbuhkan Kepedulian Mahasiswa UMN',
      content: 'Unit Kegiatan Mahasiswa (UKM),Rencang menyelenggarakan acara kegiatan sosial berupa donor darah ',
      img: 'https://ultimagz.com/wp-content/uploads/IMG_9500.jpg',
      status: 0,
    },
    {
      id: 'p4',
      name: 'Mr & Mrs UMN',
      title: 'Drama Musikal Penuhi Malam Unjuk Bakat Mr. & Ms. UMN 2019',
      content: 'Penampilan drama musikal oleh salah satu pasangan finalis Mr. & Ms. UMN 2019 dalam Talent Night Mr. & Ms. UMN 2019',
      img: 'https://ultimagz.com/wp-content/uploads/rezise-572x381.jpg',
      status: 0,
    },
    {
      id: 'p5',
      name: 'J-CAFE',
      title: 'J-CAFE tampil bersama Qorie di U-Fest 2019',
      content: 'UKM kesenian budaya Jepang',
      img: 'https://pbs.twimg.com/profile_images/378800000254419608/3b875bfd7776adfc52a5d004c37f3c86_400x400.jpeg',
      status: 0,
    },
  ];

  constructor(private savedSvc: SavedService) { }

  getAllNews() {
    return [...this.news1];
  }

  getNews(newsId: string) {
    return {
      ...this.news1.find(news => {
        return news.id === newsId;
      })
    };
  }

  changeStatus(id: string, idNews: string, title: string, content: string, name: string, img: string){
    const idxNews = this.news1.findIndex(news => news.id === idNews);

    if (this.news1[idxNews].status == 1) {
      this.news1[idxNews].status = 0;
      this.savedSvc.addSaved(id, name, title, content, img);
    } else {
      this.news1[idxNews].status = 1;
      this.savedSvc.delSaved(id);
    }
  }

}
