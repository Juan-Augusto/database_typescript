import {Model, DataTypes} from 'sequelize';
import { SequelizeInstance } from '../Instances/mysql';

interface UserInstance extends Model {
    id: number;
    name: string;
    age: number;
}

export const User = SequelizeInstance.define<UserInstance>('User', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING,
        },
        age: {
            type: DataTypes.INTEGER,
            defaultValue: 18
        },
    },
    {
        tableName: 'users',
        timestamps: false,
    }
)