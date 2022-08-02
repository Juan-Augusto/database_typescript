import { Request, Response } from 'express';
import { Product } from '../models/Product';
import { Op } from 'sequelize';
import { User } from '../models/User';

export const home = async (req: Request, res: Response)=>{
    await User.update({ age: 18},{
        where: {
            age: {
                [Op.lt]: 18
            }
        }
    });

    let users = await User.findAll();


    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: [],
        users
    });
};
export const novousuario = async (req: Request, res: Response)=>{
    let user = await User.create({
        name: req.body.name,
        age: req.body.age
    });
    res.redirect('/');
}
// export const updateUser = async (req: Request, res: Response)=>{

// }