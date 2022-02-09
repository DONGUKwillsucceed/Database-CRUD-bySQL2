import { db } from '../db/mysql.js';


export async function getAll(){
    return db.execute('SELECT author, title, context, date FROM postings ORDER BY date DESC').then((result)=>result[0]);
}

export async function create(body){
    const {author, title, context, date} = body;
    return db.execute('INSERT INTO postings (author, title, context, date) VALUES(?, ?, ?, ?)',[author, title, context, date]).then(()=>getAll());
}

export async function update(author, context){
    return db.execute('UPDATE postings SET context = ? WHERE author = ?',[context, author]).then(()=>getAll());
}

export async function remove(author){
    return db.execute('DELETE FROM postings WHERE author = ?',[author]).then(()=>getAll());
}