import { Component, OnInit } from '@angular/core';
import {AppiiService} from 'src/app/service/appii.service'


@Component({
  selector: 'app-mydata',
  templateUrl: './mydata.component.html',
  styleUrls: ['./mydata.component.css']
})
export class MydataComponent  implements OnInit{
userData:any

  constructor(private pser:AppiiService){}
  ngOnInit(){
    this.pser.getAllProduct().subscribe((data)=>{
      this.userData=data
      console.log(data);
    })
  }
  deletepro(id:any){
    // ("do u want to delete")
 
      if(confirm("do u want to delete ?")){
        this.pser.deleteData(id).subscribe((res:any)=>{
          if(res){
          alert("data is deleted")

          let data=this.userData.filter((user:any)=> user._id!=id);
          this.userData=data;
          }
        })
      }
    }
    
   
  
  }

 




