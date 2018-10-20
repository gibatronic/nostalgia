.DEFAULT_GOAL := help

.PHONY: build \
				clean \
				images \
				help \
				run \
				scripts \
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

# build images
images:
	tasks/images

# show some help
help:
	tasks/help

# start the server
run: build
	tasks/run

# build scripts
scripts:
	tasks/scripts

# build styles
styles:
	tasks/styles

# build styles
templates:
	tasks/templates

# rebuild on changes
watch:
	tasks/watch
