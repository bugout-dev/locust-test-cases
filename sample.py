import argparse

def hello(name: str):
    print(f"Hello, {name}!!")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Hello world program")
    parser.add_argument("-n", "--name", required=False, default="world", help="Name to greet")
    args = parser.parse_args()
    hello(args.name)
