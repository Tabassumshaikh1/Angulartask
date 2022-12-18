import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppiiService } from 'src/app/service/appii.service';


@Component({
  selector: 'app-addprod',
  templateUrl: './addprod.component.html',
  styleUrls: ['./addprod.component.css']
})
export class AddprodComponent implements OnInit {
  constructor(private ser:AppiiService,private router:Router){}
  mydata={name:"",price:"",quantity:"",description:"",img:""}
  ngOnInit(): void {
    
  }
  postdata(){
    this.ser.postData(this.mydata).subscribe((res)=>{
      if(res){
        alert("data is added");
        this.router.navigate(['/'])
      }
      
    })
  }


}
