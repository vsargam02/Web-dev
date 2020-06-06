#databases : sequelize basic

#setup database
--shell--
mysql -u root

#inside ,MYsql shell,create database,user and grant rights
--mysql-psql
CREATE DARABASE sampledb1;
CREATE USER sampledb IDENTIFIED BY 'samplepass1';
GRANT ALL PRIVILAGES ON sampledb1 TO sampleuser1;

