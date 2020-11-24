export class User {

    id: string;
    nickname: string;
    password: string;

    constructor(id: string, nickname: string, password: string) {
      this.id = id;
      this.nickname = nickname;
      this.password = password;
    }
 
}