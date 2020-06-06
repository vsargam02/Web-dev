#serup for the mysql

--shell--
mysql -u root - p
password: pass

show databases


#CREATE DB

CREATE DATABASE sampledb1;
CREATE user sampleuser1 identified by'sampleuser1';
GRANT ALL PRIVILEGES on sampledb1.* to sampleuser1;

exit

#for checking
--shell--
mysql -u sampleuser1 -p
password:sampleuser1
show databases;