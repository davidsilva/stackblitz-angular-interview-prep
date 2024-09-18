import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  @Input() users: User[] = [];
  @Input() filterCriteria: (user: User) => boolean = () => true;
  
  get filteredUsers(): User[] {
    return this.users.filter(this.filterCriteria);
  }
}
