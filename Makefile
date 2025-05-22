APP=card-react-app

run::
	docker run -p 3000:3000 ${APP}

image::
	docker buildx build --tag ${APP} --output type=docker .
