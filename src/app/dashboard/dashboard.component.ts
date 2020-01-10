import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Voting } from '../voting.model';
import { ServiceService } from '../service.service';
import { Subscription } from 'rxjs'
import { NgForm } from '@angular/forms'
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private message;
  private fVote: Voting[] = [];
  private card_id;
  constructor(private _snackBar: MatSnackBar, private voteService: ServiceService, private route:Router) { }

  ngOnInit() {
    console.log("ngoninit=====")
    this.fetchData();
  }
  fetchData() {
    this.voteService.getData().subscribe((results: any) => {

      console.log("result ", results)
      this.fVote = results.bVotes

    },err=>{
      if(err instanceof HttpErrorResponse){
        console.log("===");
        console.log(err)
        if(err.status===401 || err.status===500){
          this.route.navigate(["/login"])
        }
        
      }
    })
   
    
    
    
    // this.voteService.setCandidateDetail();
    // this.voteService.getCandidateDetail().subscribe((votes:Voting[])=>{
    //   this.fVote=votes
    //  // console.log("****")
    //  // console.log(votes);
    //   console.log(this.fVote);


    // });
  }

  handleError(error){

  }
  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.voteService.addVote(form.value.name, form.value.state, form.value.about)
    setTimeout(() => {
      form.resetForm();
      this.fetchData();
    }, 1000)

  }

  openSnackBar(message: string, action: string) {
    this.card_id = action;
    this._snackBar.open(message, action, {
      duration: 2000,
    });
    this.voteService.addVoteCount(this.card_id).subscribe(() => {
      this.fetchData();
    });
    //  console.log("jkjjk");
    //  console.log(this.card_id)
  }

}

