require("dotenv/config");
const env = process.env.NODE_ENV || "dev";

const config = () => {
  switch (env) {
    case "dev":
      return {
          bd_string: process.env.MONGODB_CONN_STRING,
          jwt_df_passwd: process.env.JWT_PWD,
          jwt_expiresIn: '7d'
      };
    case "hml":
      return {
        bd_string: process.env.MONGODB_CONN_STRING,
        jwt_df_passwd: process.env.JWT_PWD,
        jwt_expiresIn: '7d'
      };
    case "prod":
      return {
        bd_string: process.env.MONGODB_CONN_STRING,
        jwt_df_passwd: process.env.JWT_PWD,
        jwt_expiresIn: '7d'
      };
  }
};

console.log(`Iniciando a API em ambiente de ${env.toUpperCase()}`);
module.exports = config();