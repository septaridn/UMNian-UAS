import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-my-post',
  templateUrl: './my-post.page.html',
  styleUrls: ['./my-post.page.scss'],
})
export class MyPostPage implements OnInit {

  constructor(private crudService: CrudService) { }

  posts: any;
  postName: string;
  postTitle: string;
  postContent: string;
  postImg: string;
  postStatus: number;

  ngOnInit() {

    this.crudService.read_Posts().subscribe(data => {
 
      this.posts = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['Name'],
          Title: e.payload.doc.data()['Title'],
          Content: e.payload.doc.data()['Content'],
          Img: e.payload.doc.data()['Img'],
          Status: e.payload.doc.data()['Status'],
        };
      })
      console.log(this.posts);
    });
  }

  CreateRecord() {
    let record = {};
    record['Name'] = this.postName;
    record['Title'] = this.postTitle;
    record['Content'] = this.postContent;
    record['Img'] = this.postImg;
    record['Status'] = 0;
    this.crudService.create_NewPost(record).then(resp => {
      this.postName = "";
      this.postTitle = "";
      this.postContent = "";
      this.postImg = "";
      this.postStatus = undefined;
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }

  RemoveRecord(rowID) {
    this.crudService.delete_Post(rowID);
  }

  EditRecord(record) {
    record.isEdit = true;
    record.EditName = record.Name;
    record.EditTitle = record.Title;
    record.EditContent = record.Content;
    record.EditImg = record.Img;
  }

  UpdateRecord(recordRow) {
    let record = {};
    record['Name'] = recordRow.EditName;
    record['Title'] = recordRow.EditTitle;
    record['Content'] = recordRow.EditContent;
    record['Img'] = recordRow.EditImg;
    this.crudService.update_Post(recordRow.id, record);
    recordRow.isEdit = false;
  }

}
