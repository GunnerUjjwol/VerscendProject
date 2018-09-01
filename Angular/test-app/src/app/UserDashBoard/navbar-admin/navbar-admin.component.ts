import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../admin-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {
 
  getBookingHistory(){
    let obs = this.http.get("http://localhost:8080/Customers/all");
    obs.subscribe((HistoryList)=>{
      this.adminservice.changeHistory(HistoryList);
    })
  }
  getUserHistory(){
    let obs = this.http.get("http://localhost:8080/UserQueries/all");
    obs.subscribe((UserQuery)=>{
      this.adminservice.changeQuery(UserQuery);
    })
  }


  constructor(private adminservice:AdminServiceService,private http:HttpClient) { }

  ngOnInit() {
    
  }

}
