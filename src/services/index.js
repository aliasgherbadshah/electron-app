import AuthService from './auth.service';

class ServiceInterface {
       authService() {
           return new AuthService();
       }
}

export default new ServiceInterface();