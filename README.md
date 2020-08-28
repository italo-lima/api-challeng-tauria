# Challenge Tauria

# API

:rocket: Simple API developed with principle SOLID + NodeJS + PG + TypeORM + DRY + Yagni, to save information for pizza orders.

## EndPoints

`GET /pizzas`: return all pizzas.

`POST /pizzas`: create a order of pizza.

#### Body example:

```
{
	"size": "Medium",
	"crust": "Thick",
	"toppings": "Onions,Extra cheese",
	"total": 14
}
```

#### Body response:

```
{
  	"size": string,
	"crust": string,
	"toppings": string,
	"total": number
  	"id": uuid,
  	"created_at": date,
  	"updated_at": date
}
```

# WEB

:rocket: SPA developed with ReactJS and API Context, for making of pizzas orders.

Application has the following screens:

Screens:
1. Choose your size
2. Choose your crust
3. Choose your toppings
4. Check your custom pizza and finish order.

## Initializing 

- Clone this repository.
- Access the folder challenge-tauria/api and execute `yarn`.
- Access the folder challenge-tauria/web and execute `yarn`.

## Initializing API

- Access the folder challenge-tauria/api
- Create a database following the information from api/ormconfig.json
- Execute `yarn dev:server`.
- There, it is now possible to connect API using [LocalHost](http://localhost:3333 "API Tauria") port 3333.

## Initializing WEB

- Access the folder challenge-tauria/web
- Execute `yarn start`.
