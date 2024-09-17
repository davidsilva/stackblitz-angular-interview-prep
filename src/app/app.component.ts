import { Component, OnInit } from "@angular/core";
import { UsersService } from "./services/users.service";
import { User } from "./models/user.model";
import { Observable, of } from "rxjs";
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-root",
    standalone: true,
    templateUrl: "./app.component.html",
    providers: [],
    imports: [CommonModule]
})
export class AppComponent implements OnInit {
    constructor(private usersService: UsersService) {}

    title = "My Angular App"
    users$: Observable<User[]> = of([]);

    ngOnInit(): void {
        this.users$ = this.usersService.getUsers();
    }
}
