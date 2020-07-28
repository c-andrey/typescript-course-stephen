import { CollectionView } from './CollectionView';
import { User } from '../models/User';
import { UserProps } from '../Interfaces/UserProps';
import { UserShow } from './UserShow';

export class UserList extends CollectionView<User, UserProps> {
  renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render();
  }
}
