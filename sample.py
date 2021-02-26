class OperationFailed(Exception):
    pass

def failure():
    raise OperationFailed("failure")

def main():
    try:
        failure()
    except OperationFailed as e:
        print(f"Something went wrong: {str(e)}")

main()
