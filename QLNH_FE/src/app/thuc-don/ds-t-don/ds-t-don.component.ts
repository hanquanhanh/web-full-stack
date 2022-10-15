import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ds-t-don',
  templateUrl: './ds-t-don.component.html',
  styleUrls: ['./ds-t-don.component.css']
})

export class DsTDonComponent implements OnInit {

  constructor(private service:SharedService) { }

  DSThucDon:any=[];
  tDon:any;
  dangThemSua:boolean=false;
  tieuDe:any;

  ngOnInit(): void {
    this.taiLaiDSThucDon();
  }

  taiLaiDSThucDon(){
    this.service.layDSThucDon().subscribe(data => {
      this.DSThucDon = data;
    })
  }

  themThucDon(){
    this.tDon={
      MaThucDon:0,
      TenThucDon:""
    }
    this.dangThemSua=true;
    this.tieuDe="Thêm thực đơn"
  }

  chiTietThucDon(tDon:any){
    this.tDon=tDon;
    this.dangThemSua=true;
    this.tieuDe="Sửa thực đơn"
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
