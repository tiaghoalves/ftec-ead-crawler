/*
 * Exportando configurações da aplicação e criando conexão com banco de dados.
 * Crie um .env seguindo .env.example no root do projeto com suas configurações de ambiente, caso contrário seja utilizado valores padroes
*/
require('dotenv').config();
// import mysql from 'mysql' <- subs pelo import do banco

export default {
	host: process.env.HOST || 'localhost',
	port: process.env.PORT || 3000,
	secret: process.env.JWT_SECRET || 'web-crawler-ftec',
	exp: process.env.JWT_EXPIRATION ||"1d",
	salt: 10,
	db: {
		getConnection: () => {
			return mysql.createConnection({
				host: process.env.DB_HOST || 'localhost',
				user: process.env.DB_USER || 'root',
				password: process.env.DB_PASS,
				database: process.env.DB_DATABASE || 'CRAWLER_FTEC_DB', // <- subs pelo nome do banco
				port: process.env.DB_PORT || 3306
			});
		}
	}
};