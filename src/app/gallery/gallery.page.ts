import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  public keyword:string;
  public currentPage:number=1;
  public size:number=10;
  private  dataImages=[];
  private totalPages: number;

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }

    onLoadImages() {

        this.dataImages=[];
        this.currentPage=1;
        this.totalPages=0;
        this.doSearch();

    }

    doSearch(){
      this.httpClient.get('https://pixabay.com/api/?key=12929278-38cc717cd1860df05a555246d&q=' +this.keyword+'&per_page='+this.size+'&page='+this.currentPage)
          .subscribe(data=>{
            data['hits'].forEach(image=>{
              this.dataImages.push(image);
            })
            this.totalPages=data['totalHits']/this.size;
            console.log(this.currentPage+"/"+this.totalPages);
          }, error1 => {
            console.log(error1);
          });
    }

  loadData(event) {

    if (this.currentPage<this.totalPages){

      ++this.currentPage;
      this.doSearch();
      event.target.complete();
    }
    if (this.currentPage>=this.totalPages){
      event.target.disabled=true;
    }
    
  }
}
