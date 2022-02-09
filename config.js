import env from 'dotenv';

env.config();

function getenv(key){
    const env = process.env[key];
    if(!env){
        throw new Error('NOT FOUND!');
    }

    return env;
}


export const config = {
    host : getenv('DB_HOST'),
    user : getenv('DB_USER'),
    database : getenv('DB_DATABASE'),
    password : getenv('DB_PASSWORD')
}