import excelJS, { Workbook } from 'exceljs';
import UserRepository from '../repositories/UserRepository';

class UserService {
    async generateReport() {
        const workBook = new excelJS.Workbook();
        const workSheet = workBook.addWorksheet('Users Report');        
        const defaultPath = "src/files";

        workSheet.columns = [
            { header: "Código", key: "code", width: 10 },
            { header: "Nome", key: "name", width: 10 },
            { header: "Sobrenome", key: "lastName", width: 10 },
            { header: "Idade", key: "age", width: 10 },
            { header: "E-mail", key: "email", width: 10 }
        ];

        let counter = 1;

        const users = await UserRepository.get();

        users.forEach((user) => {
            user.code = counter;
            workSheet.addRow(user);
            counter++;
        });

        workSheet.getRow(1).eachCell((cell) => {
            cell.font = { bold: true }
        });
                
        await workBook.xlsx.writeFile(`${defaultPath}/users.xlsx`);
    }
}

export default new UserService();