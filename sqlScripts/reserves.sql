create sequence seqreservesid;

create table reserves
(
	id numeric(8) PRIMARY KEY DEFAULT nextval('seqreservesid'),
	name varchar(50) not null,
	start timestamp with time zone not null,
	finish timestamp with time zone not null,
	created_at timestamp with time zone default current_timestamp,
	updated_at timestamp with time zone
);

create unique index reserves_id_uindex
	on reserves (id);