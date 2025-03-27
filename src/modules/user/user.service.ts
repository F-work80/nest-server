import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    getUsers(){
        return {
            firstName:'PAVEL',
            nameUser:'Pavel',
            userEmail:'test@g.com',
            userPass:'12345',

        }
    }
}
