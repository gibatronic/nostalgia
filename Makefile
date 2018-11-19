.DEFAULT_GOAL := help

.PHONY: build \
				clean \
				debug \
				help \
				images \
				restart \
				scripts \
				start \
				stop \
				styles \
				templates \
				watch

.SILENT:

# build all assets
build: images \
			 scripts \
			 styles \
			 templates

# remove built assets
clean:
	tasks/clean

# create an ssh tunel to open DevTools
debug:
	tasks/debug

# build images
images:
	tasks/images

# show some help
help:
	tasks/help

# kill and run the server again
restart: stop \
				 start

# build scripts
scripts:
	tasks/scripts

# run the server
start:
	tasks/start

# kill the server
stop:
	tasks/stop

# build styles
styles:
	tasks/styles

# build styles
templates:
	tasks/templates

# rebuild on changes
watch:
	tasks/watch
