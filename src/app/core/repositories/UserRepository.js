import User from '../models/User';

class UserRepository {
    async get() {               
        return await User.get();
    }
}

export default new UserRepository();