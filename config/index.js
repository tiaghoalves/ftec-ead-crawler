/*
 * Exportando configurações da aplicação e criando conexão com banco de dados.
 * Crie um .env seguindo .env.example no root do projeto com suas configurações de ambiente, caso contrário seja utilizado valores padroes
*/
require('dotenv').config();

export default {
	host: process.env.HOST || 'localhost',
	port: process.env.PORT || 3000,
	secret: process.env.JWT_SECRET || 'ftec-ead-crawler',
	exp: process.env.JWT_EXPIRATION ||"1d",
	salt: 10,
	auth: {
		username: process.env.USERNAME,
		password: process.env.PASSWORD
	}
};