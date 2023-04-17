const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: 'mydb.com',
     user:'User',
     password: 'itsevolus2123',
     connectionLimit: 5
});
pool.getConnection()
    .then((conn: { query: (arg0: string, arg1: (string | number)[] | undefined) => Promise<any>; end: () => void; }) => {

      conn.query;(arg0: string, arg1: (string | number)[] | undefined) => Promise
        .then((rows: any) => {
          console.log(rows); //[ {val: 1}, meta: ... ]
          //Table must have been created before
          // " CREATE TABLE myTable (id int, val varchar(255)) "
          return conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
        })
        .then((res: any) => {
          console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
          conn.end();
        })
        .catch((err: any) => {
          //handle error
          console.log(err);
          conn.end();
        })

    }).catch((_err: any) => {
      //not connected
    });
