package main

import (
	"flag"
	"fmt"
)

func makeGreeting(name string) string {
	return fmt.Sprintf("Hello %s", name)
}

func main() {
	var name string
	flag.StringVar(&name, "name", "", "Name of entity to greet")
	flag.Parse()

	greeting := makeGreeting(name)
	fmt.Println(greeting)
}
