import { Component, OnInit } from '@angular/core';
import { HttpClient }        from '@angular/common/http';
import { forkJoin }          from 'rxjs';

@Component({
             selector: 'app-test',
             templateUrl: './test.component.html',
             styleUrls: ['./test.component.scss']
           })
export class TestComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

    forkJoin(
      this.http.get('https://jsonplaceholder.typicode.com/posts'),
      this.http.get('https://jsonplaceholder.typicode.com/comments')
    )
      .subscribe(data => {
        const posts = data[0] as [];
        const comments = data[1] as [];

        posts.forEach((post:any) => {
          post.comments = [];
          comments.forEach((comment :any) => {
            if (comment.postId == post.id) {
              post.comments.push(comment);
            }
          });
        });
        console.log(posts);
      });
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(posts => {
      this.http.get('https://jsonplaceholder.typicode.com/comments').subscribe(comments => {

      })
    })



  }

}
