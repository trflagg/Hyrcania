build:
	docker build . -t hyrcania

mongo-compose:
		docker run -it --link hyrcania_mongo_1:mongo --rm mongo:3.0.5 sh -c 'exec mongo "$$MONGO_PORT_27017_TCP_ADDR:$$MONGO_PORT_27017_TCP_PORT"'

run-prod:
	docker run -p 80:80 hyrcania

run:
	docker-compose up
