build:
	docker build . -t hyrcania

run-prod:
	docker run -p 80:80 hyrcania

run:
	docker-compose up
