import { Request, Response } from 'express';
import { SequelizeInstance } from '../Instances/mysql';
import { Product } from '../models/Product';

export const home = async (req: Request, res: Response)=>{
    try{
        await SequelizeInstance.authenticate();
        console.log('Connection has been established successfully.');
    }catch(err){
        console.error('Unable to connect to the database:', err);
    }

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
        frasesDoDia: []
    });
};