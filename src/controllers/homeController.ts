import { Request, Response } from 'express';
import { Product } from '../models/Product';
import { Op } from 'sequelize';
import { User } from '../models/User';

export const home = async (req: Request, res: Response)=>{
    let searchName: string = 'jua'; 
    let users = await User.findAll({
        where: {
            age: {
                [Op.gte]: 20
            }
        },
        order: [
            ['name', 'DESC']
        ]
    });




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