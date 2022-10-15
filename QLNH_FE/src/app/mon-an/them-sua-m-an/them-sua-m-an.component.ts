import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-them-sua-m-an',
  templateUrl: './them-sua-m-an.component.html',
  styleUrls: ['./them-sua-m-an.component.css']
})
export class ThemSuaMAnComponent implements OnInit {

    maThucDon:any
    tenThucDon:any;
    @Input() tDon:any;
    thucDon:any;
    dsTenThucDon:any=[];
    
    anhMonAn:any;
    duongDanAnh:any;

    constructor(private service:SharedService) { }
    
    ngOnInit(): void {
      // this.maThucDon=this.tDon.MaThucDon;
      // this.tenThucDon=this.tDon.TenThucDon;
      this.service.layDSTenThucDon().subscribe(data=>{
        this.dsTenThucDon = data;
      });
      this.anhMonAn = "com.jpg";
      this.duongDanAnh = this.service.PhotoUrl + "/" + this.anhMonAn;
    }
  
    themThucDon(){
      var val = {
        TenThucDon:this.tenThucDon
      };
      this.service.themMonAn(val).subscribe(res=>{
        alert(res.toString());
      });
    }
  
    suaThucDon(){
      var val = {
        MaMonAn:this.maThucDon,
        TenMonAn:this.tenThucDon
      };
      this.service.suaMonAn(val).subscribe(res=>{
        alert(res.toString());
      });
    }

    uploadPhoto(event:any) {
      var file = event.target.files[0];
      const formData:FormData = new FormData();
      formData.append('uploadedFile', file, file.name);

      this.service.taiAnh(formData).subscribe((data:any)=>{
        this.anhMonAn = data.toString();
        this.duongDanAnh = this.service.PhotoUrl + "/" + this.anhMonAn;
      })
    }

}
