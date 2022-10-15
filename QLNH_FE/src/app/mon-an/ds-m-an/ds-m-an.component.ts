import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ds-m-an',
  templateUrl: './ds-m-an.component.html',
  styleUrls: ['./ds-m-an.component.css']
})
export class DsMAnComponent implements OnInit {

  constructor(private service:SharedService) { }

  DSThucDon:any=[];
  tDon:any;
  dangThemSua:boolean=false;
  tieuDe:any;

  ngOnInit(): void {
    this.taiLaiDSThucDon();
  }

  taiLaiDSThucDon(){
    this.service.layDSMonAn().subscribe(data => {
      this.DSThucDon = data;
    })
  }

  themThucDon(){
    this.tDon={
      MaMonAn:0,
      TenMonAn:"",
      AnhMonAn:"com.jpg",
      NgayTao:""
    }
    this.dangThemSua=true;
    this.tieuDe="Thêm món ăn"
  }

  chiTietThucDon(tDon:any){
    this.tDon=tDon;
    this.dangThemSua=true;
    this.tieuDe="Sửa món ăn"
  }

  xoaThucDon(tDon:any){
    if (confirm("Bạn có chắc muốn xóa?")){
      this.service.xoaThucDon(tDon.MaThucDon).subscribe(
        data=>{
          alert(data.toString());
          this.taiLaiDSThucDon();
        }
      );
    }
  }

  dong(){
    this.dangThemSua=false;
    this.taiLaiDSThucDon();
  }

}
