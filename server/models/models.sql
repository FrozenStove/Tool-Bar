CREATE TABLE  public.employees (
	"_id" serial NOT NULL PRIMARY KEY,
	"first_name" varchar NOT NULL,
	"last_name" varchar NOT NULL,
	"team" varchar NOT NULL,
	"title" varchar NOT NULL,
	"password" varchar NOT NULL
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.projects (
    "_id" serial NOT NULL PRIMARY KEY,
	"name" varchar NOT NULL,
	"project_manager" varchar NOT NULL,
	"status" varchar DEFAULT 'open',
	"comment" varchar
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.scheduling (
    "_id" serial NOT NULL PRIMARY KEY,
	"employee_id" varchar NOT NULL,
	"project_id" varchar NOT NULL,
	"week" varchar DEFAULT 'open',
	"hours" varchar
) WITH (
  OIDS=FALSE
);


CREATE TABLE public.userAccounts (
	"_id" serial NOT NULL,
	"username" varchar NOT NULL UNIQUE,
	"password" varchar NOT NULL,
	"email" varchar NOT NULL,
	CONSTRAINT "userAccounts_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
)