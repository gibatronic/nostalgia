# Contributing

To contribute to this project, follow the steps below to build the assets and run the server.

1. [Hardware](#hardware)
    1. [Operating System](#operating-system)
    1. [Setup](#setup)
1. [Software](#software)
    1. [Environment](#environment)
    1. [Setup](#setup-1)
    1. [Run](#run)

## Hardware

* [Raspberry Pi](https://www.raspberrypi.org/products/): model 3B+, 3, 2, B+, A+, Zero or Zero W
* [HyperPixel 4.0](https://shop.pimoroni.com/products/hyperpixel-4): touch or non-touch

### Operating System

Download [Raspbian Stretch Lite](https://www.raspberrypi.org/downloads/raspbian/) and put it on the SD card by following the [installation guide](https://www.raspberrypi.org/documentation/installation/installing-images/README.md).

### Setup

Setup Raspbian by following this guide: [Setup a Raspberry Pi to run a Web Browser in Kiosk Mode](https://die-antwort.eu/techblog/2017-12-setup-raspberry-pi-for-kiosk-mode/), but when configuring Open Box, in the `Start Chromium in kiosk mode` block, replace the `sed` and `chromium-browser` commands to call the `autostart` script from the `tasks` folder, like this:

```bash
# Start Chromium in kiosk mode
su pi -c '/home/pi/nostalgia/tasks/autostart &> /home/pi/nostalgia.log'
```

This way, when `autostart` install dependencies and builds assets, they'll have the right user ownership. And the log can be found inside the home folder.

Also, change the hostname with the `raspi-config` command to `nostalgia`. The server and some scripts depend on that.

Then, the only thing left to do is to setup the display, by following this guide: [HyperPixel 4.0" Drivers](https://github.com/pimoroni/hyperpixel4/blob/master/README.md). Be aware that after this point, you won't be able to use an HDMI display.

## Software

A [Unix like](https://en.wikipedia.org/wiki/Unix-like) operating system, with [Node.js](https://nodejs.org/en/download/) 6.4.0 or greater is required for this project.

### Environment

Inside the project folder, create a file named `.env`, with the following content inside:

```bash
COMMAND_BROWSER='chromium-browser'
COMMAND_SERVER='node server/main.js'
ENVIRONMENT='development'
FLICKER_ALBUM=''
FLICKER_KEY=''
FLICKER_SECRET=''
FLICKER_USER=''
PORT='8080'
```

You'll have to request a [Flicker API Key](https://www.flickr.com/services/apps/create/apply/) to fill the `FLICKER_KEY` and `FLICKER_SECRET` variables.

For the other two, `FLICKER_ALBUM` and `FLICKER_USER`, you can play with them in the [Flicker API explorer](https://www.flickr.com/services/api/explore/?method=flickr.photosets.getPhotos).

When running the project inside the Raspberry Pi, change `ENVIRONMENT` to `production`.

### Setup

Install dependencies with:

``` bash
npm install
```

Then, list available tasks with:

```bash
make help
```

### Run

You can start hacking with:

```
make watch
```

It will build, start the server and watch for changes.
