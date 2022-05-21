
import UserService from '../services/UserService';

class UserController {
    async generateReport(req, res) {
        try {
            await UserService.generateReport().then(() => {
                res.status(200).json({
                    response: 'Report generated successfully!'
                });
            });
        } catch (err) {
            res.status(500).json({
                response: 'Something went wrong while generating Users Report!',
                error: err
            });
        }
    }
}

export default new UserController();