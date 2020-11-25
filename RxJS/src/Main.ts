import { User } from './model/User';
import { UserStore } from './store/UserStore';

const store: UserStore = new UserStore();

store
  .add(new User('1', 'nick', 'pass'))
  .subscribe(() => console.log('\nUser added'));

store
  .update(new User('1', 'nick_1', 'pass_1'))
  .subscribe(() => console.log('\nUser updated'));  

store
  .list()
  .subscribe(value => console.log('\nList:\n', value, '\n'));

store
  .one({id: '1'})
  .subscribe(value => console.log('One:\n', value, '\n'));

