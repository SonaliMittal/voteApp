import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Voting } from './voting.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private votes: Voting[] = [];
  private subject = new Subject<Voting[]>();
  constructor(private http: HttpClient, private route: Router) { }

  setCandidateDetail() {
    this.http.get<{ bMessage: string, bVotes: Voting[] }>("http://localhost:3200/api/votes")
      .subscribe((voteData) => {
        this.votes = voteData.bVotes;
        console.log("&&&");
        console.log(this.votes)
        this.subject.next([...this.votes]);
        console.log([...this.votes])
      });
  }
  getCandidateDetail() {
    console.log("==getmessage==")
    return this.subject.asObservable();
  }

  getData() {
    return this.http.get("http://localhost:3200/api/votes")
    // try {
    //   return this.http.get("http://localhost:3200/api/votes")
    // } catch (err) {
    //   console.log("---", err)
    // }
    // const token = localStorage.getItem("token");
    // if(!token){
    //   this.route.navigate(["/login"])
    // }
    // else{
    //   console.log("authorized")
    // }

  }

  addVote(name: string, state: string, about: string) {
    const vote: Voting = { name: name, state: state, about: about, voteCount: 0 };
    this.http.post<{ message: string }>("http://localhost:3200/api/votes", vote)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.votes.push(vote);
        this.subject.next([...this.votes]);
      });
  }
  addVoteCount(cardID) {
    return this.http.post(`http://localhost:3200/api/votescount/${cardID}`, {})
  }
  registerUserInService(email: string, password: number) {
    const data = { email: email, password: password };
    return this.http.post<any>("http://localhost:3200/api/register", data);
  }
  logInUserService(email: string, password: number) {
    const data = { email: email, password: password };
    return this.http.post<any>("http://localhost:3200/api/login", data);
  }
  isLoggedIn() {
    //return !!localStorage.getItem("token");
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      this.route.navigate(["/login"])
      return false;
    }
  }
  logOutUser() {
    console.log("====")
    localStorage.removeItem("token");
    this.route.navigate(["/login"])
  }
  getToken() {
    return localStorage.getItem("token");
  }
}
