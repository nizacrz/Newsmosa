import SQLite from 'react-native-sqlite-storage';

const initDB = () => {
   const db = SQLite.openDatabase({
     name: 'newsmosaDB.db',
     location: 'default',
   });
 
   db.transaction(tx => {
     tx.executeSql(
       `CREATE TABLE IF NOT EXISTS users (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         username TEXT NOT NULL UNIQUE,
         email TEXT NOT NULL UNIQUE,
         password TEXT NOT NULL
       )`
     );
   });
 
   return db;
 };
 
 export default initDB;
 