create database assetAllocation;
use assetAllocation;
create table employee(empId varchar(10) not null primary key, name varchar(20), emailId varchar(20) not null, contactNumber int);

insert into employee values("M1030394", "Ananthi", "ananthi@mindtree.com", "987654321");
insert into employee values("M1030380", "Sabbu", "sabbu@mindtree.com", "987654321");
insert into employee values("M1030395", "Anu", "anu@mindtree.com", "987654321");

create table asset(assetId varchar(10) not null primary key, asset varchar(20));

insert into asset values("LT15179", "Laptop");
insert into asset values("LT15180", "Laptop");

create table allocation(empId varchar(10) not null, assetId varchar(10) not null, foreign key (empId) references employee (empId), foreign key (assetId) references asset (assetId));

insert into allocation values("M1030394", "LT15179");
insert into allocation values("M1030380", "LT15180");

create table users(userId int not null auto_increment primary key, emailId varchar(50), password varchar(20), empId varchar(10), foreign key(empId) references employee (empId));

insert into users values(0, "ananthi@mindtree.com", "ananthi", "M1030394");
insert into users values(0, "sabbu@mindtree.com", "sabbu", "M1030380");
insert into users values(0, "anu@mindtree.com", "anu", "M1030395");

