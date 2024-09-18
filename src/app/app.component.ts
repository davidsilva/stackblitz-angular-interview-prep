import { Component, OnInit } from "@angular/core";
import { UsersService } from "./shared/services/users.service";
import { User } from "./core/models/user.model";
import { Observable, filter, of, map } from "rxjs";
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
    activeUsers$: Observable<User[]> = of([]);

    ngOnInit(): void {
        this.users$ = this.usersService.getUsers();

        this.activeUsers$ = this.users$
            .pipe(
                map(users => users.filter(user => user.isActive))
            )
    }
}
