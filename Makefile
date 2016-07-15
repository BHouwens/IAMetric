help:
	@echo
	@echo "  \033[34mstart\033[0m : Starts the app up via http-server"
	@echo "  \033[34minstall\033[0m : Installs npm dependencies and builds the app via webpack"
	@echo "  \033[34mbuild\033[0m : Builds the app via webpack"
	@echo
  
start:
	@echo
	@echo "Starting the app up"
	@echo
	@http-server

install:
	@echo
	@echo "Installing JavaScript resources"
	@echo
	@npm install
	@make build
	@echo
	@echo "All done"
	@echo

build:
	@echo
	@echo "Building the app via webpack"
	@echo
	@webpack


.PHONY: start build install help