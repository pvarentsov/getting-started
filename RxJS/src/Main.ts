import { UserStore } from './store/UserStore';

const store: UserStore = new UserStore();

store
  .list()
  .subscribe(value => console.log('\nList:\n', value, '\n'));

store
  .one({id: '1'})
  .subscribe(value => console.log('One:\n', value, '\n'));

