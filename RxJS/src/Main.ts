import { UserStore } from './store/UserStore';

new UserStore()
  .list()
  .subscribe(value => console.log(value));